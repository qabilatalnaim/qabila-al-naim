#!/usr/bin/env python3
"""Replace <img> tags with OptimizedImage in all pages."""
import re
from pathlib import Path

FILES_TO_PROCESS = [
    "src/App.tsx",
    "src/pages/HistoryPage.tsx",
    "src/pages/CamelsPage.tsx",
    "src/pages/HorsesPage.tsx",
    "src/pages/SheepPage.tsx",
    "src/pages/WasmPage.tsx",
    "src/pages/PoetryPage.tsx",
    "src/pages/CoffeePage.tsx",
    "src/pages/TraditionsPage.tsx",
    "src/pages/TentPage.tsx",
    "src/pages/TownPage.tsx",
]

ROOT = Path("/workspace/qabila-al-naim")

for filename in FILES_TO_PROCESS:
    filepath = ROOT / filename
    if not filepath.exists():
        print(f"⏭️  {filename}: not found")
        continue

    content = filepath.read_text(encoding="utf-8")
    original = content

    # Skip if already using OptimizedImage import
    if "import OptimizedImage" in content:
        print(f"⏭️  {filename}: already imports OptimizedImage")
        continue

    # Add import for OptimizedImage
    if "import SEO" in content:
        content = content.replace(
            "import SEO from '../components/SEO'",
            "import SEO from '../components/SEO'\nimport OptimizedImage from '../components/OptimizedImage'",
            1
        )
    elif "import SEO" in content and filename == "src/App.tsx":
        content = content.replace(
            "import SEO from './components/SEO'",
            "import SEO from './components/SEO'\nimport OptimizedImage from './components/OptimizedImage'",
            1
        )

    # Replace <img ... /> with <OptimizedImage ... />
    # Simple single-line tags
    content = re.sub(
        r'<img\s+',
        '<OptimizedImage ',
        content
    )
    # Replace closing /> after OptimizedImage (it accepts same props as img)
    # We don't need to change the closing tag because </img> -> </OptimizedImage>
    content = re.sub(
        r'</img>',
        '</OptimizedImage>',
        content
    )

    if content != original:
        filepath.write_text(content, encoding="utf-8")
        print(f"✅ {filename}: updated to OptimizedImage")
    else:
        print(f"⏭️  {filename}: no changes")
