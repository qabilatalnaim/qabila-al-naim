#!/usr/bin/env python3
"""Fix Breadcrumbs line merging - using simple Python string replace."""
from pathlib import Path

PAGES_DIR = Path("/workspace/qabila-al-naim/src/pages")

for filepath in PAGES_DIR.glob("*Page.tsx"):
    content = filepath.read_text(encoding="utf-8")
    original = content

    # Find the pattern: <Breadcrumbs ... /> className="min-h-screen bg-[#0a1628] pt-24 pb-16">
    # and replace with:
    # <Breadcrumbs ... />
    # <div className="min-h-screen bg-[#0a1628] pt-24 pb-16">

    old_pattern = '<Breadcrumbs items={[{ label: '
    # Find the line that contains it
    lines = content.split('\n')
    new_lines = []
    for i, line in enumerate(lines):
        if 'Breadcrumbs' in line and 'className=' in line and 'min-h-screen' in line:
            # Find the index where className starts
            idx = line.find('className=')
            # Extract the part before className (ends with />)
            before = line[:idx].rstrip()
            after = line[idx:]
            new_lines.append(before)
            new_lines.append('      <div ' + after)
        else:
            new_lines.append(line)

    new_content = '\n'.join(new_lines)
    if new_content != content:
        filepath.write_text(new_content, encoding="utf-8")
        print(f"✅ Fixed: {filepath.name}")
    else:
        print(f"⏭️  {filepath.name}: no fix needed")
