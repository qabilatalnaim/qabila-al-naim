#!/usr/bin/env node
/**
 * clean-dist-images.js
 * --------------------
 * بعد البناء (vite build)، ملفات الصور في dist/images تحتوي على:
 *   - WebP المحسّن (نحتاجه)
 *   - JPG/PNG الأصلية (ما نحتاجها لأن WebP يخدم نفس الغرض بأحجام أصغر)
 *
 * هذا السكربت يحذف JPG/PNG ويبقي WebP فقط.
 */

import { existsSync, readdirSync, unlinkSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const DIST_IMAGES = 'dist/images'

const stats = { kept: 0, removed: 0, bytesRemoved: 0 }

if (!existsSync(DIST_IMAGES)) {
  console.log(`\u2713 لا يوجد مجلد ${DIST_IMAGES} \u2014 تخطي`)
  process.exit(0)
}

const files = readdirSync(DIST_IMAGES)
for (const file of files) {
  const filePath = join(DIST_IMAGES, file)
  const ext = extname(file).toLowerCase()
  const fileStat = statSync(filePath)
  if (ext === '.webp') { stats.kept++; continue }
  if (['.jpg', '.jpeg', '.png'].includes(ext)) {
    unlinkSync(filePath)
    stats.removed++
    stats.bytesRemoved += fileStat.size
  }
}

const mb = (stats.bytesRemoved / 1024 / 1024).toFixed(2)
console.log(`\u2728 \u062a\u0646\u0638\u064a\u0641: ${stats.kept} WebP \u0645\u062d\u0641\u0648\u0638, ${stats.removed} \u0623\u0635\u0644\u064a \u0645\u062d\u0630\u0648\u0641 (${mb} MB)`)