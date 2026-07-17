#!/usr/bin/env bash

set -euo pipefail

repository_root="$(cd "$(dirname "$0")/.." && pwd)"
output_directory="$repository_root/build_production"
php_binary="${PHP_BINARY:-php}"
memory_limit="${DOCARA_MEMORY_LIMIT:-512M}"

case "$output_directory" in
    "$repository_root"/build_production) ;;
    *)
        echo "Refusing to clean an unexpected output directory: $output_directory" >&2
        exit 2
        ;;
esac

rm -rf "$output_directory"
exec "$php_binary" -d "memory_limit=$memory_limit" "$repository_root/vendor/bin/docara" build production --cache=false
