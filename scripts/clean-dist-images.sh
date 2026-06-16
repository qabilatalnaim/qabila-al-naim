#!/bin/bash
# Clean up dist/images/ - keep only WebP versions for production
# (Originals remain in public/images/ as fallback for older browsers)
set -e

DIST_IMAGES=/workspace/qabila-al-naim/dist/images

echo "=== Cleaning dist/images/ - keeping only WebP ==="
cd "$DIST_IMAGES"

before=$(du -sh . | cut -f1)
rm -f *.jpg *.png
after=$(du -sh . | cut -f1)

echo "Before: $before"
echo "After:  $after (WebP only)"
