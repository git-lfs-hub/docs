#!/bin/bash
set -Eeo pipefail
cd "$(dirname "$0")/.."

for dir in '.' 'assets'; do
    for file in $dir/*.example; do
        if [ ! -f "${file%.*}" ]; then
            cp "$file" "${file%.*}"
        fi
    done
done
