#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd -P)"
php_binary="${PHP_BINARY:-php}"

cd "$repository_root"

PHP_BINARY="$php_binary" bin/init-project-update.sh
yarn install --frozen-lockfile --ignore-engines
npm run docs:integrity

rm -rf -- "$repository_root/.cache" "$repository_root/build_production"
DOCARA_SKIP_BUILD=1 yarn prod

if [[ -n "${SIMAI_FRAMEWORK_REGISTRY:-}" \
    || -n "${SIMAI_UI_ROOT:-}" \
    || -n "${SIMAI_UI_SMART_ROOT:-}" ]]; then
    npm run docs:build
else
    "$php_binary" -d memory_limit=512M vendor/bin/docara build production --cache=false
fi

npm run docs:rendered-links

printf '%s\n' 'UI_DOC_CANONICAL_VALIDATION_PASS'
