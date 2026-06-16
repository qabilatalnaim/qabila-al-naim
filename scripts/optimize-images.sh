#!/bin/bash
# Convert images to WebP with smart resizing
set -e

cd /workspace/qabila-al-naim/public/images

echo "=== تحويل الصور الكبيرة (1200px max) ==="
for f in abnaa-izz-din-abu-himara.jpg mawlid-wa-nashaa.jpg nasb-al-jadd-al-moassese.jpg nasb-kull-ibn.jpg silsilat-al-nasb.jpg wafat-wa-maqam.jpg; do
  if [ -f "$f" ]; then
    webp_name="${f%.jpg}.webp"
    echo "→ $f → $webp_name (1200px max, quality 80)"
    convert "$f" -resize "1200x1200>" -quality 80 "$webp_name"
  fi
done

echo ""
echo "=== تحويل الصور المتوسطة (1600px max) ==="
for f in banner.jpg tribe-flag.jpg; do
  if [ -f "$f" ]; then
    webp_name="${f%.jpg}.webp"
    echo "→ $f → $webp_name (1600px max, quality 85)"
    convert "$f" -resize "1600x1600>" -quality 85 "$webp_name"
  fi
done

echo ""
echo "=== تحويل الصور المربعة (800px max) ==="
for f in tribe-logo-calligraphy.jpg logo.png; do
  if [ -f "$f" ]; then
    webp_name="${f%.*}.webp"
    echo "→ $f → $webp_name (800px max, quality 90)"
    convert "$f" -resize "800x800>" -quality 90 "$webp_name"
  fi
done

echo ""
echo "=== النتائج ==="
echo "JPG/PNG الأصلي:"
du -sh *.jpg *.png 2>/dev/null | sort -h
echo ""
echo "WebP الجديد:"
du -sh *.webp 2>/dev/null | sort -h
echo ""
echo "=== الإجمالي ==="
echo "قبل: $(du -sh --total *.jpg *.png 2>/dev/null | tail -1 | cut -f1)"
echo "بعد (WebP فقط): $(du -sh --total *.webp 2>/dev/null | tail -1 | cut -f1)"
