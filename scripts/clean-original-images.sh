#!/bin/bash
# Remove original JPG/PNG from public/images/ (keep only WebP)
# WebP has fallback in OptimizedImage component
set -e

PUBLIC_IMAGES=/workspace/qabila-al-naim/public/images

echo "=== Removing original JPG/PNG (keeping WebP only) ==="
cd "$PUBLIC_IMAGES"

# Count before
before_count=$(ls -1 *.jpg *.png 2>/dev/null | wc -l)
before_size=$(du -sh . | cut -f1)

rm -f *.jpg *.png

after_count=$(ls -1 *.webp 2>/dev/null | wc -l)
after_size=$(du -sh . | cut -f1)

echo "قبل: $before_count ملف ($before_size)"
echo "بعد: $after_count ملف ($after_size)"
