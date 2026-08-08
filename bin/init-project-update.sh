#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd -P)"
php_binary="${PHP_BINARY:-php}"

if [[ ! -d "$repository_root/.git" && ! -f "$repository_root/.git" ]]; then
    printf '%s\n' 'UI_DOC_PROJECT_ROOT_INVALID expected=git_worktree' >&2
    exit 2
fi
if ! git -C "$repository_root" diff --quiet -- source package.json \
    || ! git -C "$repository_root" diff --cached --quiet -- source package.json; then
    printf '%s\n' 'UI_DOC_PROJECT_SOURCE_DIRTY path=source|package.json' >&2
    exit 2
fi

preserve_root="$(mktemp -d "${TMPDIR:-/tmp}/ui-doc-project-preserve.XXXXXX")"
cleanup() {
    rm -rf -- "$preserve_root"
}
trap cleanup EXIT

git -C "$repository_root" archive --format=tar HEAD -- source package.json \
    > "$preserve_root/project-owned.tar"

index_existed=false
nul_existed=false
[[ -e "$repository_root/source/index.blade.md" ]] && index_existed=true
[[ -e "$repository_root/nul" ]] && nul_existed=true

(
    cd "$repository_root"
    DOCARA_SKIP_FRONTEND_INSTALL=true "$php_binary" vendor/bin/docara init --update --force-core-files
)

tar -xf "$preserve_root/project-owned.tar" -C "$repository_root"

if [[ "$index_existed" == false && -f "$repository_root/source/index.blade.md" ]] \
    && ! git -C "$repository_root" ls-files --error-unmatch source/index.blade.md >/dev/null 2>&1; then
    rm -f -- "$repository_root/source/index.blade.md"
fi
if [[ "$nul_existed" == false && -f "$repository_root/nul" ]] \
    && ! git -C "$repository_root" ls-files --error-unmatch nul >/dev/null 2>&1; then
    rm -f -- "$repository_root/nul"
fi

if ! git -C "$repository_root" diff --quiet HEAD -- source package.json; then
    printf '%s\n' 'UI_DOC_PROJECT_SOURCE_NOT_PRESERVED path=source|package.json' >&2
    git -C "$repository_root" diff --name-status HEAD -- source package.json >&2
    exit 1
fi

printf '%s\n' 'UI_DOC_PROJECT_INIT_PASS tracked_source_preserved=true generated_index_removed=true generated_nul_removed=true'
