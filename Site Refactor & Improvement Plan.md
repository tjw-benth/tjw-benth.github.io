# Site Refactor & Improvement Plan

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Implementation Status

All stages from the original plan have been executed, with the exception of Stage 4.3 (favicon) and the optional Stage 6 items. The `datascience.html` filename was intentionally not renamed per instruction.

---

## Completed Changes

### Stage 0 — Housekeeping
| Step | Status |
|------|--------|
| 0.1 Add `.gitignore` | ✅ Done |
| 0.2 Expand README.md | ✅ Done |

### Stage 1 — HTML Fixes
| Step | Status |
|------|--------|
| 1.1 Fix `</main>` mismatched tag in publications.html | ✅ Done |
| 1.2 Fix malformed email `<li>` in datascience.html | ✅ Done |
| 1.3 Fix malformed img attribute syntax in projects.html | ✅ Done — all 12 images |
| 1.4 Fix nested `<address>` in index.html | ✅ Done |
| 1.5 Fix `<section id="footer">` → `<footer id="footer">` | ✅ Done — projects.html and datascience.html |

### Stage 2 — Security and Attribute Fixes
| Step | Status |
|------|--------|
| 2.1 Add `rel="noopener noreferrer"` to all external links; fix `http://` | ✅ Done — all four pages |
| 2.2 Replace URL shortener in publications.html | ✅ Done — direct Southampton PDF URL used |

### Stage 3 — Consistency Fixes
| Step | Status |
|------|--------|
| 3.1 Standardise navigation to match index.html | ✅ Done — ARIA, role, button close, CV link on all pages |
| 3.2 Standardise footer across all pages | ✅ Done — heading, Twitter @, rel, address structure |
| 3.3 Add `lang="en"` to projects.html and datascience.html | ✅ Done |

### Stage 4 — Content Updates
| Step | Status |
|------|--------|
| 4.1 Update index.html meta description and keywords | ✅ Done — Åbo Akademi, updated keywords |
| 4.2 Add `<title>`, meta description, author, lang to secondary pages | ✅ Done — all three secondary pages |
| 4.3 Add favicon | ⬜ Not done — requires creating/sourcing an icon file |
| 4.4 Add project status/date labels to projects.html | ✅ Done — all 12 cards |
| 4.5 Add author bio to publications.html | ✅ Done |
| 4.6 Add cross-links between publications, projects, data science | ✅ Done |

### Stage 5 — CV
| Step | Status |
|------|--------|
| 5.1 Link `williams_CV.pdf` in navigation | ✅ Done — all four pages |

---

## Remaining / Optional Work

### Favicon (Stage 4.3) — Medium priority
No favicon currently exists. Every page load triggers a 404 request for `/favicon.ico`.

**Action:** Create or source a small icon (32×32px). A dragon icon (`fa-dragon` is already used on the site), a wave/marine motif, or a simple "TW" monogram would all work. Save as `favicon.png` in the root, then add to all four `<head>` sections:
```html
<link rel="icon" href="favicon.png" type="image/png">
```

### Open Graph tags (Stage 6.1) — Low-medium priority
Add to all four pages for better social media sharing cards:
```html
<meta property="og:type" content="website">
<meta property="og:title" content="[page title]">
<meta property="og:description" content="[page description]">
<meta property="og:url" content="https://tjw-benth.github.io/[file]">
<meta property="og:image" content="https://tjw-benth.github.io/images/profile_shot.JPG">
<meta name="twitter:card" content="summary_large_image">
```

### Extract TidyTuesday JS (Stage 6.2) — Low priority
Move the inline `<script>` data and functions in `datascience.html` to `assets/js/tidytuesday.js`.

### SASS build system (Stage 6.3) — Low priority, decide direction
Either:
- Add `package.json` with `sass` compile script (if CSS edits are planned)
- Or delete `assets/sass/` and accept `main.css` as canonical

### GitHub Actions HTML validation (Stage 6.4) — Optional
Add `.github/workflows/validate.yml` to run HTML validation on push.

### Jekyll migration — Long-term
Migrating to Jekyll would allow shared `_includes` for nav and footer, eliminating the 4-file update requirement. This is the most impactful long-term maintainability improvement but requires significant restructuring.

---

## What Must NOT Be Changed Without Discussion

- **Renaming any `.html` file** — breaks public URLs and external links.
- **Removing `id="footer"`** — breaks the Contact nav anchor link on all pages.
- **Changing the `.features > article` structure in `projects.html`** — breaks `fetchprojects.js` on the homepage.
- **Deleting any image file** — may be referenced by external sites.
