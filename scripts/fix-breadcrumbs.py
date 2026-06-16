#!/usr/bin/env python3
"""Fix Breadcrumbs line merging in all pages."""
import re
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")

for filepath in PAGES_DIR.glob("*Page.tsx"):
    content = filepath.read_text(encoding="utf-8")
    original = content

    # Fix: <Breadcrumbs items={[{ label: 'XXX' }]} /> className="...">
    # Should be:
    # <Breadcrumbs items={[{ label: 'XXX' }]} />
    # <div className="...">
    content = re.sub(
        r'(<Breadcrumbs[^/]+/>)[ \t]+(className=")',
        r'\1\n      <div \2',
        content
    )

    if content != original:
        filepath.write_text(content, encoding="utf-8")
        print(f"✅ Fixed: {filepath.name}")
    else:
        print(f"⏭️  {filepath.name}: no fix needed")
