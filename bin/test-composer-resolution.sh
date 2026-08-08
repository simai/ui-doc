#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd -P)"
fixture_root="$(mktemp -d "${TMPDIR:-/tmp}/ui-doc-composer-resolution.XXXXXX")"

cleanup() {
    rm -rf -- "$fixture_root"
}
trap cleanup EXIT

cat >"$fixture_root/composer" <<'SH'
#!/usr/bin/env bash
printf '%s\n' "COMPOSER_FIXTURE_PASS args=$*"
SH
chmod +x "$fixture_root/composer"

cat >"$fixture_root/php-must-not-run" <<'SH'
#!/usr/bin/env bash
printf '%s\n' 'UI_DOC_COMPOSER_INCORRECTLY_INVOKED_THROUGH_PHP' >&2
exit 97
SH
chmod +x "$fixture_root/php-must-not-run"

path_output="$(
    unset COMPOSER_BINARY
    PATH="$fixture_root:/usr/bin:/bin" \
        PHP_BINARY="$fixture_root/php-must-not-run" \
        "$repository_root/bin/run-composer.sh" --version
)"
if [[ "$path_output" != 'COMPOSER_FIXTURE_PASS args=--version' ]]; then
    printf '%s\n' "UI_DOC_COMPOSER_PATH_REGRESSION actual=$path_output" >&2
    exit 1
fi

override_output="$(
    COMPOSER_BINARY="$fixture_root/composer" \
        PHP_BINARY="$fixture_root/php-must-not-run" \
        "$repository_root/bin/run-composer.sh" diagnose
)"
if [[ "$override_output" != 'COMPOSER_FIXTURE_PASS args=diagnose' ]]; then
    printf '%s\n' "UI_DOC_COMPOSER_OVERRIDE_REGRESSION actual=$override_output" >&2
    exit 1
fi

printf '%s\n' 'UI_DOC_COMPOSER_RESOLUTION_PASS path_default=true absolute_override=true'
