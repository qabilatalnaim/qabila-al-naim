#!/usr/bin/env python3
"""Add unified Footer to all heritage pages."""
import re
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")

# Pattern: find the closing </div>\n  )\n} before "export default" (if exists)
# Add Footer import and Footer component before the final closing

for filepath in PAGES_DIR.glob("*Page.tsx"):
    if filepath.name == "NotFoundPage.tsx":
        continue  # NotFoundPage uses Footer too but it's handled separately

    content = filepath.read_text(encoding="utf-8")
    original = content

    # Skip if already has Footer import
    if "import Footer" in content:
        print(f"⏭️  {filepath.name}: Footer already imported")
        continue

    # 1. Add Footer import after SEO/Breadcrumbs imports
    if "import SEO" in content:
        content = content.replace(
            "import SEO from '../components/SEO'",
            "import SEO from '../components/SEO'\nimport Footer from '../components/Footer'",
            1
        )
    else:
        print(f"⚠️  {filepath.name}: No SEO import found")
        continue

    # 2. Find pattern: </div>\n    </>  (end of fragment) or </div>\n  )\n} (end of function)
    # Add <Footer /> just before the final closing

    # Pattern 1: </> closing fragment
    pattern_frag = re.compile(r'(\s*)(</>)(\s*\)\s*\})', re.MULTILINE)
    matches = list(pattern_frag.finditer(content))
    if matches:
        last_match = matches[-1]
        new_text = f'\n      <Footer />\n    </>\n  )'
        content = content[:last_match.start(2)] + new_text[1:] + content[last_match.end(2):]
    else:
        # Pattern 2: </div>\n  )\n} (no fragment)
        pattern_nofrag = re.compile(r'(\s*)(</div>)(\s*\)\s*\})', re.MULTILINE)
        matches2 = list(pattern_nofrag.finditer(content))
        if matches2:
            last_match = matches2[-1]
            content = content[:last_match.start(2) + len(last_match.group(2))] + '\n      <Footer />\n    ' + content[last_match.end(2):]
        else:
            print(f"❌ {filepath.name}: Could not find closing pattern")
            continue

    filepath.write_text(content, encoding="utf-8")
    print(f"✅ {filepath.name}: Footer added")