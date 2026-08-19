# Gallery photos

Drop real photos in this folder using these **exact filenames** — the
Gallery section (`src/pages/Gallery/Gallery.jsx`) already points at them,
so a matching file "just works" with no code changes. Places with more
than one photo show a small "1/3"-style counter on each tile.

| Filename                          | Place                | Context                                            | Status |
|-------------------------------------|-----------------------|-----------------------------------------------------|--------|
| `dongguk-exchange.jpg`              | Seoul, South Korea    | Exchange year at Dongguk University                 | ✅ in place |
| `dongguk-exchange-2.jpg`            | Seoul, South Korea    | Exchange year at Dongguk University                 | ✅ in place |
| `hong-kong.jpg`                     | Hong Kong             | Cultural exchange trip during her year abroad        | ✅ in place |
| `tulum-homa-kah.jpg`                | Tulum, Mexico         | Homa Kah, a certified sustainable development        | ✅ in place |
| `tulum-homa-kah-2.jpg`              | Tulum, Mexico         | Homa Kah, a certified sustainable development        | ✅ in place |
| `tulum-homa-kah-3.jpg`              | Tulum, Mexico         | Homa Kah, a certified sustainable development        | ✅ in place |
| `vienna-aguacate.jpg`               | Vienna, Austria       | Community event with Aguacate Latin Food             | ✅ in place |
| `vienna-aguacate-2.jpg`             | Vienna, Austria       | Community event with Aguacate Latin Food             | ✅ in place |
| `vienna-aguacate-3.jpg`             | Vienna, Austria       | Community event with Aguacate Latin Food             | ✅ in place |
| `ceu-environmental-front.jpg`       | Vienna, Austria       | Outreach for CEU Environmental Front                 | ✅ in place |
| `ceu-environmental-front-2.jpg`     | Vienna, Austria       | Outreach for CEU Environmental Front                 | ✅ in place |
| `ceu-environmental-front-3.jpg`     | Vienna, Austria       | Outreach for CEU Environmental Front                 | ✅ in place |

**Specs:** square (1:1), at least 1200×1200px, JPG or WEBP, ideally under
~500KB each so the page stays fast.

Until a file is added, the site shows a labeled placeholder tile in its
place — nothing breaks, so files can be added one at a time. To add
another photo to a place that already has some, add a new row (e.g.
`hong-kong-2.jpg`) with the same `place`/`context` in
`src/pages/Gallery/Gallery.jsx`.

This README is documentation only and is not referenced by the app; it's
safe to delete once the real photos are in place.
