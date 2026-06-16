#!/usr/bin/env python3
"""Add SEO component to all heritage pages automatically."""
import re
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")
COMPONENT_NAME = "CamelsPage"  # Will be replaced

# Map: file -> (page_name for SEO, original component name in file)
PAGES = {
    "CamelsPage.tsx": "camels",
    "HorsesPage.tsx": "horses",
    "SheepPage.tsx": "sheep",
    "WasmPage.tsx": "wasm",
    "PoetryPage.tsx": "poetry",
    "CoffeePage.tsx": "coffee",
    "TraditionsPage.tsx": "traditions",
    "TentPage.tsx": "tent",
    "TownPage.tsx": "town",
}

IMPORT_LINE = "import { Link } from 'react-router-dom'"
NEW_IMPORT = """import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { seoConfig } from '../lib/seo-config'"""

for filename, seo_key in PAGES.items():
    filepath = PAGES_DIR / filename
    if not filepath.exists():
        print(f"❌ {filename} not found")
        continue

    content = filepath.read_text(encoding="utf-8")

    # Skip if SEO already added
    if "import SEO" in content:
        print(f"⏭️  {filename}: SEO already imported, skipping")
        continue

    # Add import
    if IMPORT_LINE in content:
        content = content.replace(IMPORT_LINE, NEW_IMPORT, 1)
    else:
        print(f"⚠️  {filename}: Link import not found, adding manually")
        # Find first import line and add after it
        match = re.search(r"(import .+\n)", content)
        if match:
            content = content.replace(
                match.group(1),
                match.group(1) + "import SEO from '../components/SEO'\nimport { seoConfig } from '../lib/seo-config'\n",
                1
            )

    # Find function declaration
    fn_match = re.search(r"export default function (\w+)\(\)", content)
    if not fn_match:
        # Try to find function with same name
        base_name = filename.replace(".tsx", "")
        fn_match = re.search(rf"function {base_name}\(\)", content)

    if not fn_match:
        print(f"❌ {filename}: function not found")
        continue

    # Find return statement
    return_match = re.search(r"  return \(\n    <div", content)
    if not return_match:
        print(f"❌ {filename}: return statement not found")
        continue

    # Insert <SEO> before the <div
    content = content.replace(
        "  return (\n    <div",
        "  return (\n    <>\n      <SEO {...seoConfig." + seo_key + "} />\n      <div",
        1
    )

    # Find the last </div>\n  )\n} pattern and add </> before )
    # We need to find the matching closing of the outer return
    # Strategy: find the last occurrence of "    </div>\n  )\n}" and replace
    # More robust: find "  )\n}" at the end of file (just before "}" function end)
    # Let's look for the final return block
    pattern = re.compile(r"(    </div>\n)(\s*)\)\n\}", re.MULTILINE)
    matches = list(pattern.finditer(content))
    if not matches:
        print(f"❌ {filename}: final closing pattern not found")
        continue

    # Get the last match (the outer closing)
    last_match = matches[-1]
    new_content = (
        content[:last_match.start(1) + len(last_match.group(1))]
        + "    </>\n"
        + content[last_match.start(2):]
    )

    filepath.write_text(new_content, encoding="utf-8")
    print("✅ " + filename + ": added <SEO {...seoConfig." + seo_key + "} />")

print("\n🎉 Done!")
