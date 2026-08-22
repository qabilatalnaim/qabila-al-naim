#!/usr/bin/env node
/**
 * postbuild.js - Runs after Vite build to handle platform-specific needs.
 *
 * - For GitHub Pages: copies index.html → 404.html so client-side routing works.
 *   GitHub Pages serves 404.html for any unknown route, allowing React Router
 *   to handle the URL on the client side.
 */
import { copyFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(__dirname, '../dist')

const indexPath = resolve(distDir, 'index.html')
const notFoundPath = resolve(distDir, '404.html')

if (!existsSync(indexPath)) {
  console.error('❌ dist/index.html not found — did the Vite build fail?')
  process.exit(1)
}

try {
  copyFileSync(indexPath, notFoundPath)
  console.log('✅ Copied index.html → 404.html (GitHub Pages SPA fallback)')
} catch (err) {
  console.error('❌ Failed to copy 404.html:', err.message)
  process.exit(1)
}
