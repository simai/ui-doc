#!/usr/bin/env bash

set -euo pipefail

source_root="$(cd "$(dirname "$0")/.." && pwd -P)"
php_binary="${PHP_BINARY:-php}"
composer_binary="${COMPOSER_BINARY:-composer}"
composer_preference="${UI_DOC_COMPOSER_PREFERENCE:---prefer-dist}"
expected_revision="$(git -C "$source_root" rev-parse HEAD)"
lifecycle_root="$(mktemp -d "${TMPDIR:-/tmp}/ui-doc-lifecycle.XXXXXX")"

cleanup() {
    rm -rf -- "$lifecycle_root"
}
trap cleanup EXIT

git clone --quiet --no-local "$source_root" "$lifecycle_root/repo"
git -C "$lifecycle_root/repo" checkout --quiet --detach "$expected_revision"

"$php_binary" "$composer_binary" install --no-interaction "$composer_preference" \
    --working-dir="$lifecycle_root/repo"

(
    cd "$lifecycle_root/repo"
    PHP_BINARY="$php_binary" bin/validate-docs-project.sh
)

expected_package_sha="$(git -C "$source_root" show "$expected_revision:package.json" | shasum -a 256 | awk '{print $1}')"
actual_package_sha="$(shasum -a 256 "$lifecycle_root/repo/package.json" | awk '{print $1}')"
status="$(git -C "$lifecycle_root/repo" status --short --untracked-files=all)"

if [[ "$actual_package_sha" != "$expected_package_sha" ]]; then
    printf '%s\n' "UI_DOC_LIFECYCLE_PACKAGE_MUTATED expected=$expected_package_sha actual=$actual_package_sha" >&2
    exit 1
fi
if [[ -n "$status" ]]; then
    printf '%s\n' 'UI_DOC_LIFECYCLE_WORKTREE_DIRTY' >&2
    printf '%s\n' "$status" >&2
    exit 1
fi

printf '%s\n' "UI_DOC_LIFECYCLE_PASS revision=$expected_revision package_sha256=$actual_package_sha"
