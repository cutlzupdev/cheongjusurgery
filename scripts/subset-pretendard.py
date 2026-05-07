"""
Subset PretendardVariable.woff2 to only the characters actually used in the
codebase + KS X 1001 (~2,350 common Korean syllables for dynamic news content).

Output: public/fonts/PretendardVariable.subset.woff2 (~737KB vs 2MB full font).

Requirements:
  pip install fonttools brotli zopfli

Usage:
  python3 scripts/subset-pretendard.py
"""

from pathlib import Path
from fontTools.subset import Subsetter, Options
from fontTools.ttLib import TTFont

ROOT = Path(__file__).resolve().parent.parent
SRC_FONT = ROOT / "node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2"
OUT_FONT = ROOT / "public/fonts/PretendardVariable.subset.woff2"

def collect_codebase_chars() -> set[str]:
    chars: set[str] = set()
    exts = (".tsx", ".ts", ".css", ".md", ".mdx", ".json")
    skip_dirs = {"node_modules", ".next", ".git", "scripts"}
    for base in [ROOT / "src", ROOT / "public"]:
        for path in base.rglob("*"):
            if not path.is_file() or path.suffix not in exts:
                continue
            if any(part in skip_dirs for part in path.parts):
                continue
            try:
                chars.update(path.read_text(encoding="utf-8"))
            except UnicodeDecodeError:
                pass
    return chars

def ks_x_1001_hangul() -> set[str]:
    """Common Korean syllables defined by KS X 1001 (CP949 subset)."""
    result: set[str] = set()
    for i in range(0xB0A1, 0xC8FF):
        try:
            s = bytes([i >> 8, i & 0xFF]).decode("cp949")
            if len(s) == 1 and 0xAC00 <= ord(s) <= 0xD7A3:
                result.add(s)
        except Exception:
            pass
    return result

def main() -> None:
    chars = collect_codebase_chars()
    for c in range(0x20, 0x7F):
        chars.add(chr(c))
    extras = [
        0x00A0, 0x00A9, 0x00AE, 0x00B0, 0x00B7, 0x2013, 0x2014, 0x2018, 0x2019,
        0x201C, 0x201D, 0x2022, 0x2026, 0x2030, 0x2039, 0x203A,
        0x3001, 0x3002, 0x3008, 0x3009, 0x300A, 0x300B, 0x300C, 0x300D,
        0x300E, 0x300F, 0x3010, 0x3011, 0x3014, 0x3015, 0x301C,
        0xFF01, 0xFF0C, 0xFF0E, 0xFF1A, 0xFF1B, 0xFF1F, 0xFF5E,
    ]
    for c in extras:
        chars.add(chr(c))
    chars.update(ks_x_1001_hangul())

    print(f"Subsetting {len(chars)} chars")
    font = TTFont(str(SRC_FONT))
    options = Options()
    options.flavor = "woff2"
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.name_languages = ["*"]
    options.glyph_names = False
    options.hinting = True
    options.desubroutinize = False

    Subsetter(options=options).populate(unicodes=sorted(ord(c) for c in chars)).subset(font) \
        if False else None  # keep linter happy
    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=sorted(ord(c) for c in chars))
    subsetter.subset(font)

    font.flavor = "woff2"
    OUT_FONT.parent.mkdir(parents=True, exist_ok=True)
    font.save(str(OUT_FONT))
    size_kb = OUT_FONT.stat().st_size / 1024
    print(f"Wrote {OUT_FONT.relative_to(ROOT)} ({size_kb:.1f} KB)")

if __name__ == "__main__":
    main()
