#!/usr/bin/env python3
"""Add Breadcrumbs component to all heritage pages."""
import re
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")

# Page slug -> label
PAGE_LABELS = {
    "/history": "النسب والتاريخ",
    "/camels": "الإبل",
    "/horses": "الخيل",
    "/sheep": "الغنم",
    "/wasm": "الوسم",
    "/poetry": "الشعر النبطي",
    "/coffee": "القهوة العربية",
    "/traditions": "العادات والتقاليد",
    "/tent": "بيت الشعر",
    "/town": "بلدة عز الدين",
}

for filename, (path, label) in zip(
    [p + ".tsx" for p in PAGE_LABELS.keys()],
    PAGE_LABELS.items()
):
    # Use basename
    basename = Path(path).name
    filename = None
    for f in PAGES_DIR.iterdir():
        # Match camel-case file name
        expected_name = "".join(w.capitalize() for w in basename.split("-")) + "Page.tsx"
        if f.name == expected_name:
            filename = f
            break
        # Also try simple mapping
        simple_map = {
            "history": "HistoryPage.tsx",
            "camels": "CamelsPage.tsx",
            "horses": "HorsesPage.tsx",
            "sheep": "SheepPage.tsx",
            "wasm": "WasmPage.tsx",
            "poetry": "PoetryPage.tsx",
            "coffee": "CoffeePage.tsx",
            "traditions": "TraditionsPage.tsx",
            "tent": "TentPage.tsx",
            "town": "TownPage.tsx",
        }
        if f.name == simple_map.get(path.strip("/")):
            filename = f
            break

    if not filename:
        print(f"❌ Could not find file for {path}")
        continue

    content = filename.read_text(encoding="utf-8")

    # Skip if already added
    if "import Breadcrumbs" in content:
        print(f"⏭️  {filename.name}: Breadcrumbs already added")
        continue

    # Add import
    if "import SEO" in content:
        content = content.replace(
            "import SEO from '../components/SEO'",
            "import SEO from '../components/SEO'\nimport Breadcrumbs from '../components/Breadcrumbs'",
            1
        )

    # Add Breadcrumbs component right after <SEO /> and before <div
    breadcrumbs_jsx = f"""      <Breadcrumbs items={{[{{ label: '{label}' }}]}} />
    </div>"""

    # Replace first occurrence of </div> after <SEO
    # Pattern: <SEO ... />\n      <div
    pattern = re.compile(r"(<SEO \{[^}]+\} />)\s*(\n\s*<div)")
    if pattern.search(content):
        content = pattern.sub(
            r"\1\n      <Breadcrumbs items={[{ label: '" + label + "' }]} />\2",
            content,
            count=1
        )
        filename.write_text(content, encoding="utf-8")
        print(f"✅ {filename.name}: added Breadcrumbs ({label})")
    else:
        print(f"⚠️  {filename.name}: SEO pattern not found")
