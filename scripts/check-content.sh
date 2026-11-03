#!/usr/bin/env bash
# Usage: scripts/check-content.sh [fichier.md ...]
# Sans argument : parité FR/EN seulement.
# Avec arguments : parité + termes bannis dans ces fichiers.
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0

fr=$(cd docs && find . -name '*.md' -not -path './en/*' -not -name '404.md' | sort)
en=$(cd docs/en && find . -name '*.md' | sort)
if ! diff_out=$(comm -3 <(echo "$fr") <(echo "$en")) || [ -n "$diff_out" ]; then
  echo "PARITE FR/EN KO (colonne 1 = FR seul, colonne 2 = EN seul) :"
  echo "$diff_out"
  fail=1
fi

BANNED='250\+|300\+ annonceurs|300\+ active advertisers|950\+|[Rr]etail [Mm]edia|asile colis|e-commerçants?|[Ee]-retailers?'
for f in "$@"; do
  if grep -nE "$BANNED" "$f"; then
    echo "TERME BANNI dans $f"
    fail=1
  fi
done

[ "$fail" -eq 0 ] && echo "OK"
exit "$fail"
