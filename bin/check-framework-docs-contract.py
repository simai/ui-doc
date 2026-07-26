#!/usr/bin/env python3
"""Validate Russian documentation against the pinned Framework sources."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "source/docs/ru"
POINTER = ROOT / "contracts/framework-contract-registry.pointer.json"
FENCE = re.compile(r"```(?:html|css|js|javascript)\s*\n(.*?)```", re.S | re.I)
CLASS_ATTRIBUTE = re.compile(r"\bclass\s*=\s*([\"'])(.*?)\1", re.S | re.I)
CSS_CLASS = re.compile(r"\.((?:\\.|[A-Za-z0-9_-])+)")
CSS_VARIABLE = re.compile(r"--sf-[a-z0-9_-]+(?:\\?/[a-z0-9_-]+)*", re.I)
RTAGS = re.compile(r"!rtags\[([^\]]+)\]")


class ContractError(ValueError):
    pass


def load_json(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as error:
        raise ContractError(f"json_unreadable:{path}") from error
    if not isinstance(value, dict):
        raise ContractError(f"json_object_required:{path}")
    return value


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def css_classes(root: Path) -> set[str]:
    result: set[str] = set()
    for path in root.rglob("*.css"):
        if ".min." in path.name:
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        for raw in CSS_CLASS.findall(text):
            result.add(raw.replace("\\:", ":").replace("\\/", "/"))
    return result


def css_variables(ui_root: Path, smart_root: Path) -> set[str]:
    result: set[str] = set()
    monaco = ui_root / "distr/monaco-css-vars.json"
    if monaco.is_file():
        value = load_json(monaco)
        result.update(key for key in value if isinstance(key, str) and key.startswith("--sf-"))
    for root in (ui_root / "distr", smart_root / "smart"):
        for path in root.rglob("*.css"):
            if ".min." in path.name:
                continue
            result.update(CSS_VARIABLE.findall(path.read_text(encoding="utf-8", errors="replace")))
    return result


def literal_class(token: str) -> bool:
    return (
        bool(token)
        and "..." not in token
        and not any(char in token for char in "{}$<>()[]`'")
    )


def validate(args: argparse.Namespace) -> dict[str, Any]:
    registry_path = args.registry.resolve()
    registry = load_json(registry_path)
    pointer = load_json(POINTER)
    compatibility = registry.get("compatibility", {})
    if pointer.get("compatibility_id") != compatibility.get("id"):
        raise ContractError("consumer_pointer_compatibility_mismatch")
    if pointer.get("registry", {}).get("file_sha256") != sha256(registry_path):
        raise ContractError("consumer_pointer_hash_mismatch")

    utility_entries = {
        entry["name"]: entry
        for entry in registry.get("entries", [])
        if entry.get("kind") == "utility"
    }
    component_entries = [entry for entry in registry.get("entries", []) if entry.get("kind") == "component"]
    smart_entries = [entry for entry in registry.get("entries", []) if entry.get("kind") == "smart-component"]
    if (len(utility_entries), len(component_entries), len(smart_entries)) != (225, 58, 50):
        raise ContractError("registry_inventory_unexpected")

    known_classes = css_classes(args.ui_root.resolve() / "distr")
    known_classes.update(css_classes(args.smart_root.resolve() / "smart"))
    known_variables = css_variables(args.ui_root.resolve(), args.smart_root.resolve())
    documented_families: set[str] = set()
    findings: list[dict[str, str]] = []
    class_checks = 0
    variable_checks = 0

    for path in sorted(DOCS.rglob("*.md")):
        relative = path.relative_to(ROOT).as_posix()
        text = path.read_text(encoding="utf-8")
        for match in RTAGS.finditer(text):
            values = match.group(1).split()
            if not values:
                findings.append({"kind": "empty_rtags", "path": relative, "value": ""})
                continue
            family, *conditions = values
            entry = utility_entries.get(family)
            if entry is None:
                findings.append({"kind": "unknown_utility_family", "path": relative, "value": family})
                continue
            documented_families.add(family)
            available = {rule.split("/", 1)[1] for rule in entry["runtime"]["rule_names"]}
            for condition in conditions:
                if condition not in available:
                    findings.append({"kind": "unknown_loader_condition", "path": relative, "value": f"{family}/{condition}"})

        for block in FENCE.findall(text):
            for attribute in CLASS_ATTRIBUTE.finditer(block):
                for token in attribute.group(2).split():
                    if not literal_class(token):
                        continue
                    class_checks += 1
                    if token not in known_classes:
                        findings.append({"kind": "unknown_example_class", "path": relative, "value": token})
            for variable in CSS_VARIABLE.findall(block):
                if any(char in variable for char in "{}"):
                    continue
                variable_checks += 1
                if variable not in known_variables:
                    findings.append({"kind": "unknown_example_variable", "path": relative, "value": variable})

    reference_root = DOCS / "utilities/reference"
    reference_families = {
        path.stem
        for path in reference_root.glob("*.md")
        if path.name != "index.md"
    }
    covered = documented_families | reference_families
    for family in sorted(set(utility_entries) - covered):
        findings.append({"kind": "undocumented_utility_family", "path": "source/docs/ru/utilities", "value": family})

    component_pages = {path.stem for path in (DOCS / "components/reference").glob("*.md") if path.name != "index.md"}
    smart_pages = {path.stem for path in (DOCS / "smart-components/reference").glob("*.md") if path.name != "index.md"}
    for name in sorted({entry["name"] for entry in component_entries} - component_pages):
        findings.append({"kind": "missing_component_reference", "path": "source/docs/ru/components/reference", "value": name})
    for name in sorted({entry["name"] for entry in smart_entries} - smart_pages):
        findings.append({"kind": "missing_smart_reference", "path": "source/docs/ru/smart-components/reference", "value": name})

    return {
        "status": "pass" if not findings else "fail",
        "compatibility_id": compatibility.get("id"),
        "counts": {
            "utility_families": len(utility_entries),
            "utility_families_with_authored_rtags": len(documented_families),
            "utility_reference_pages": len(reference_families),
            "component_reference_pages": len(component_pages),
            "smart_reference_pages": len(smart_pages),
            "example_classes_checked": class_checks,
            "example_variables_checked": variable_checks,
            "findings": len(findings),
        },
        "findings": findings,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--registry", type=Path, required=True)
    parser.add_argument("--ui-root", type=Path, required=True)
    parser.add_argument("--smart-root", type=Path, required=True)
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()
    report = validate(args)
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=2))
    else:
        for finding in report["findings"]:
            print(f"{finding['kind']}: {finding['path']} — {finding['value']}")
        print(json.dumps(report["counts"], ensure_ascii=False))
    return 0 if report["status"] == "pass" else 1


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except ContractError as error:
        print(error, file=sys.stderr)
        raise SystemExit(2)
