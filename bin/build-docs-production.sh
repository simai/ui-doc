#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd)"
output_directory="$repository_root/build_production"
php_binary="${PHP_BINARY:-php}"
memory_limit="${DOCARA_MEMORY_LIMIT:-512M}"
registry_path="${SIMAI_FRAMEWORK_REGISTRY:-}"
ui_root="${SIMAI_UI_ROOT:-}"
smart_root="${SIMAI_UI_SMART_ROOT:-}"

case "$output_directory" in
    "$repository_root"/build_production) ;;
    *)
        echo "Refusing to clean an unexpected output directory: $output_directory" >&2
        exit 2
        ;;
esac

for required in "$registry_path" "$ui_root" "$smart_root"; do
    if [[ -z "$required" ]]; then
        echo "Local production build requires SIMAI_FRAMEWORK_REGISTRY, SIMAI_UI_ROOT and SIMAI_UI_SMART_ROOT." >&2
        exit 2
    fi
done

if [[ ! -f "$registry_path" || ! -d "$ui_root/distr" || ! -d "$smart_root/smart" ]]; then
    echo "Pinned Framework registry or runtime roots are unavailable." >&2
    exit 2
fi

read -r expected_ui_commit expected_ui_runtime_tree expected_smart_commit expected_smart_runtime_tree < <(
    "$php_binary" -r '
        $registry = json_decode(file_get_contents($argv[1]), true, 512, JSON_THROW_ON_ERROR);
        $sources = $registry["compatibility"]["runtime_sources"] ?? [];
        $byOwner = [];
        foreach ($sources as $source) {
            $byOwner[$source["owner"] ?? ""] = $source;
        }
        echo ($byOwner["simai/ui"]["commit"] ?? "") . " "
            . ($byOwner["simai/ui"]["runtime_tree"] ?? "") . " "
            . ($byOwner["simai/ui-smart"]["commit"] ?? "") . " "
            . ($byOwner["simai/ui-smart"]["runtime_tree"] ?? "") . PHP_EOL;
    ' "$registry_path"
)

actual_ui_runtime_tree="$(git -C "$ui_root" rev-parse "HEAD:distr" 2>/dev/null || true)"
actual_smart_runtime_tree="$(git -C "$smart_root" rev-parse "${expected_smart_commit}:smart" 2>/dev/null || true)"
if [[ -z "$expected_ui_commit" || -z "$expected_smart_commit" ]]; then
    echo "The registry does not contain both pinned runtime sources." >&2
    exit 1
fi
if [[ "$actual_ui_runtime_tree" != "$expected_ui_runtime_tree" ]]; then
    echo "UI distr tree mismatch: expected $expected_ui_runtime_tree, got $actual_ui_runtime_tree." >&2
    exit 1
fi
if [[ "$actual_smart_runtime_tree" != "$expected_smart_runtime_tree" ]]; then
    echo "Smart runtime tree mismatch: expected $expected_smart_runtime_tree, got $actual_smart_runtime_tree." >&2
    exit 1
fi
if ! git -C "$ui_root" diff --quiet "$expected_ui_commit" -- distr \
    || [[ -n "$(git -C "$ui_root" status --porcelain --untracked-files=all -- distr)" ]]; then
    echo "UI distr has changes outside the pinned runtime revision." >&2
    exit 1
fi

export DOCARA_FRAMEWORK_BASE_URL="${DOCARA_FRAMEWORK_BASE_URL:-/framework/ui/distr/}"
export DOCARA_FRAMEWORK_SMART_BASE_URL="${DOCARA_FRAMEWORK_SMART_BASE_URL:-/framework/ui-smart}"

rm -rf "$output_directory"
"$php_binary" -d "memory_limit=$memory_limit" "$repository_root/vendor/bin/docara" build production --cache=false

mkdir -p "$output_directory/framework/ui" "$output_directory/framework/ui-smart"
rsync -a --delete "$ui_root/distr/" "$output_directory/framework/ui/distr/"
git -C "$smart_root" archive "$expected_smart_commit" smart | tar -x -C "$output_directory/framework/ui-smart"

printf '%s\n' "$expected_ui_commit" > "$output_directory/framework/ui/REVISION"
printf '%s\n' "$expected_smart_commit" > "$output_directory/framework/ui-smart/REVISION"
