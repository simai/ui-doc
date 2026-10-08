#!/usr/bin/env bash
# Build the documentation and publish it as the local preview that ui-doc.test
# serves, then keep only the last few builds.
#
# The build is run with php directly rather than through `composer docs:build`:
# composer kills its own scripts at 300 seconds and a full build takes longer,
# which reads as a failed build rather than a stopped one.
#
# Releases used to accumulate: 107 of them held 136 GB while the disk had 17 GB
# left, and each is a complete copy of the site (~1.3 GB). Only the live one and
# a couple to roll back to are worth keeping (owner, 2026-10-08).
set -euo pipefail

name="${1:-$(date +%Y%m%d)-preview}"
keep="${PUBLISH_KEEP:-3}"
releases="${PUBLISH_RELEASES:-$HOME/Sites/.ui-doc-releases}"
link="${PUBLISH_LINK:-$HOME/Sites/ui-doc.test}"
root="$(cd "$(dirname "$0")/.." && pwd)"
php="${PHP_BINARY:-php}"

if [ -z "${DOCARA_SIMAI_UI_ROOT:-}" ] && [ -z "${SIMAI_UI_ROOT:-}" ]; then
    # Docara compiles composition recipes from an exact Framework distribution.
    # Without it the build stops at COMPOSITION_RECIPE_RUNTIME_REQUIRED, which
    # names the runtime rather than the variable and has been read as a version
    # problem more than once.
    echo "DOCARA_SIMAI_UI_ROOT is not set: point it at the ui checkout Docara builds from." >&2
    exit 2
fi

cd "$root"
"$php" -d memory_limit=2G scripts/build-documentation.php

target="$releases/$name"
rm -rf "$target"
mkdir -p "$releases"
cp -R build_production "$target"
ln -sfn "$target" "$link"
echo "published $name -> $link"

current="$(basename "$(readlink "$link")")"
cd "$releases"
# Newest first, the live one always among them however old it is.
kept="$( { echo "$current"; ls -1t | grep -v '\.release\.json$'; } | awk '!seen[$0]++' | head -n "$keep")"
removed=0
for item in *; do
    if ! printf '%s\n' "$kept" | grep -qxF "$item"; then
        rm -rf "$item"
        removed=$((removed + 1))
    fi
done
echo "kept $keep, removed $removed"
