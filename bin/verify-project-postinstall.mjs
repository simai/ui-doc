import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const packagePath = path.join(root, "package.json");
const requiredScripts = [
    "docs:build",
    "docs:integrity",
    "docs:rendered-links",
    "postinstall",
];

const manifest = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const missing = requiredScripts.filter(name => typeof manifest.scripts?.[name] !== "string");

if (missing.length > 0) {
    process.stderr.write(`${JSON.stringify({
        status: "fail",
        diagnostic: {
            code: "UI_DOC_PROJECT_SCRIPTS_MISSING",
            path: "package.json#/scripts",
            expected: requiredScripts,
            actual: Object.keys(manifest.scripts ?? {}).sort(),
        },
    })}\n`);
    process.exit(1);
}

process.stdout.write(`${JSON.stringify({
    status: "pass",
    code: "UI_DOC_PROJECT_CONFIG_PRESERVED",
    path: "package.json",
})}\n`);
