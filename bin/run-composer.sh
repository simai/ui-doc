#!/usr/bin/env bash

set -euo pipefail

php_binary="${PHP_BINARY:-php}"
composer_candidate="${COMPOSER_BINARY:-composer}"

if [[ "$composer_candidate" == */* ]]; then
    composer_binary="$composer_candidate"
else
    composer_binary="$(command -v -- "$composer_candidate" 2>/dev/null || true)"
fi

if [[ -z "$composer_binary" || "$composer_binary" != /* ]]; then
    printf '%s\n' "UI_DOC_COMPOSER_NOT_FOUND requested=$composer_candidate" >&2
    exit 1
fi

if [[ -x "$composer_binary" ]]; then
    exec "$composer_binary" "$@"
fi

if [[ -f "$composer_binary" ]]; then
    exec "$php_binary" "$composer_binary" "$@"
fi

printf '%s\n' "UI_DOC_COMPOSER_NOT_EXECUTABLE path=$composer_binary" >&2
exit 1
