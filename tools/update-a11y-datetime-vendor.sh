#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ADDON_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TMP_DIR="${TMPDIR:-/tmp}/a11ydt_release"
VENDOR_DIR="$ADDON_DIR/assets/vendor/a11y_datetime"

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Fehlendes Kommando: $1" >&2
    exit 1
  fi
}

require_cmd gh
require_cmd curl
require_cmd unzip

echo "Ermittle neuestes Release..."
TAG="$(gh api repos/FriendsOfREDAXO/a11y_datetime/releases/latest --jq .tag_name)"
URL="$(gh api repos/FriendsOfREDAXO/a11y_datetime/releases/latest --jq '.assets[] | select(.name=="dist.zip") | .browser_download_url')"

if [[ -z "$TAG" || -z "$URL" ]]; then
  echo "Konnte Release-Informationen nicht aufloesen." >&2
  exit 1
fi

echo "Release: $TAG"
echo "Download: $URL"

OUT_DIR="${1:-$TMP_DIR/$TAG}"
ZIP_PATH="$OUT_DIR/dist.zip"
DIST_DIR="$OUT_DIR/dist"

rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR"

echo "Lade dist.zip..."
curl -fsSL "$URL" -o "$ZIP_PATH"

echo "Entpacke in: $OUT_DIR"
unzip -q "$ZIP_PATH" -d "$OUT_DIR"

echo "Pruefe Pflichtdateien in dist..."
for f in \
  "$DIST_DIR/a11y_datetime.min.js" \
  "$DIST_DIR/a11y_datetime.min.css" \
  "$DIST_DIR/l10n/de.js" \
  "$DIST_DIR/plugins/rangePlugin.js" \
  "$DIST_DIR/themes/dark.css"; do
  if [[ ! -f "$f" ]]; then
    echo "Fehlende Datei: $f" >&2
    exit 1
  fi
done

echo "Aktualisiere Vendor: $VENDOR_DIR"
rm -rf "$VENDOR_DIR"
mkdir -p "$VENDOR_DIR"
cp -R "$DIST_DIR" "$VENDOR_DIR/dist"

echo "Fertig: Vendor wurde auf $TAG aktualisiert."