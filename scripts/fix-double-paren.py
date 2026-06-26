#!/usr/bin/env python3
"""Fix double closing parens added by add-footer.py script."""
import re
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")

for filepath in PAGES_DIR.glob("*Page.tsx"):
    content = filepath.read_text(encoding="utf-8")
    original = content

    # Pattern: <Footer />\n    </>\n  )\n  )\n}
    # Should be: <Footer />\n    </>\n  )\n}
    content = re.sub(
        r'(<Footer />\s*\n\s*</>)\s*\n\s*\)\s*\n\s*\)(\s*\n\s*})',
        r'\1\n  )\2',
        content
    )

    if content != original:
        filepath.write_text(content, encoding="utf-8")
        print(f"✅ Fixed: {filepath.name}")
    else:
        print(f"⏭️  {filepath.name}: no double-paren found")