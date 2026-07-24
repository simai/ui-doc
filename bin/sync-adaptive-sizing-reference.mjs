import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pointerPath = path.join(
    root,
    "contracts/adaptive-sizing/design-token-registry.pointer.json",
);
const pointer = JSON.parse(fs.readFileSync(pointerPath, "utf8"));
const contractPath = path.join(root, pointer.vendoredProjection);
const rawContract = fs.readFileSync(contractPath);
const contract = JSON.parse(rawContract);
const actualHash = crypto.createHash("sha256").update(rawContract).digest("hex");

if (actualHash !== pointer.source.sha256) {
    throw new Error(
        `adaptive sizing source hash mismatch: ${actualHash} != ${pointer.source.sha256}`,
    );
}
if (
    contract.meta.contractId !== pointer.source.contractId
    || contract.meta.version !== pointer.source.contractVersion
) {
    throw new Error("adaptive sizing contract identity mismatch");
}

const primitiveValues = new Map([["zero", 0]]);
for (const [rangeName, range] of Object.entries(contract.primitives)) {
    for (let index = 0; index < range.count; index += 1) {
        primitiveValues.set(
            `${rangeName}${index}`,
            range.startPx + range.stepPx * index,
        );
    }
}
const px = alias => {
    const value = primitiveValues.get(alias);
    if (value === undefined) throw new Error(`unknown primitive alias: ${alias}`);
    return value;
};
const roleNumber = role => {
    if (!role.includes("/")) return Number(role);
    const [numerator, denominator] = role.split("/").map(Number);
    return numerator / denominator;
};
const ordered = object => Object.entries(object).sort(
    ([left], [right]) => roleNumber(left) - roleNumber(right),
);
const pair = aliases =>
    `${aliases.mobile} (${px(aliases.mobile)} px) / ${aliases.desktop} (${px(aliases.desktop)} px)`;
const table = (headings, rows) => [
    `| ${headings.join(" | ")} |`,
    `| ${headings.map(() => "---").join(" | ")} |`,
    ...rows.map(row => `| ${row.join(" | ")} |`),
].join("\n");

const primitiveRows = Object.entries(contract.primitives).map(
    ([name, range]) => [
        name.toUpperCase(),
        `${range.startPx} px`,
        `${range.stepPx} px`,
        String(range.count),
        `${range.startPx + range.stepPx * (range.count - 1)} px`,
    ],
);
const typographyRows = ordered(contract.typography.sizes).map(
    ([role, aliases]) => [
        role,
        pair(aliases),
        contract.typography.lineHeights[role]
            ? pair(contract.typography.lineHeights[role])
            : "не назначена",
    ],
);
const spacingRows = ordered(contract.spacing).map(
    ([role, aliases]) => [role, pair(aliases)],
);
const controlRows = [];
for (const [tightness, paddings] of Object.entries(contract.controls.tightness)) {
    for (const [size, definition] of ordered(contract.controls.sizeRoles)) {
        const lineHeight = contract.typography.lineHeights[
            definition.lineHeightRole
        ];
        const mobileHeight = px(lineHeight.mobile) + 2 * px(paddings[size].mobile);
        const desktopHeight = px(lineHeight.desktop) + 2 * px(paddings[size].desktop);
        controlRows.push([
            tightness,
            size,
            pair(paddings[size]),
            `${mobileHeight} px / ${desktopHeight} px`,
        ]);
    }
}

const generated = `---
extends: _core._layouts.documentation
section: content
title: Справочник вертикальных размеров
description: Сгенерированные пары mobile и desktop для типографики, интервалов и controls.
---

# Справочник вертикальных размеров

> Этот файл сгенерирован командой \`npm run tokens:sync\`. Не меняйте числа
> вручную. Источник: \`${pointer.source.contractId}@${pointer.source.contractVersion}\`,
> SHA-256 \`${pointer.source.sha256}\`.

## Primitive scale A–I

${table(["Диапазон", "Начало", "Шаг", "Количество", "Последнее значение"], primitiveRows)}

## Типографика

Порядок в каждой паре: \`mobile / desktop\`.

${table(["Роль", "Размер", "Высота строки"], typographyRows)}

## Вертикальные интервалы

${table(["Роль", "Значение mobile / desktop"], spacingRows)}

## Высоты controls

Высота вычисляется как \`line-height + 2 × block-padding\`. Структурная рамка
учитывается внутри итоговой высоты.

${table(["Tightness", "Size", "Block padding mobile / desktop", "Высота mobile / desktop"], controlRows)}

## Граница контракта

В контракт входят root/rem policy, viewport mode, typography, control height,
block padding и вертикальный rhythm. Межкомпонентное горизонтальное
выравнивание, menu nesting, inline padding и container gutters не входят.
`;

const outputPath = path.join(root, pointer.generatedReference);
const checkOnly = process.argv.includes("--check");
if (checkOnly) {
    const actual = fs.existsSync(outputPath)
        ? fs.readFileSync(outputPath, "utf8")
        : null;
    if (actual !== generated) {
        process.stderr.write(`${pointer.generatedReference} is stale\n`);
        process.exitCode = 1;
    } else {
        process.stdout.write(
            `adaptive sizing docs parity PASS ${pointer.source.sha256}\n`,
        );
    }
} else {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, generated);
    process.stdout.write(
        `generated ${pointer.generatedReference} from ${pointer.source.sha256}\n`,
    );
}
