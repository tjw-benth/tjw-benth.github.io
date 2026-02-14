# URL & Metadata Hygiene Report

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Status Summary

| Issue | Status |
|-------|--------|
| `<title>` generic on projects.html and datascience.html | ✅ Fixed — now "Research Projects — Tom Williams" and "Data Science — Tom Williams" |
| `<title>` on publications.html used repo name | ✅ Fixed — now "Publications — Tom Williams" |
| Missing `<meta name="description">` on projects.html | ✅ Fixed |
| Missing `<meta name="description">` on datascience.html | ✅ Fixed |
| Outdated institution in index.html description | ✅ Fixed — now references Åbo Akademi University |
| Missing `lang="en"` on projects.html and datascience.html | ✅ Fixed |
| Missing `<meta name="author">` on secondary pages | ✅ Fixed — added to all three secondary pages |
| `http://` HTML5 UP link | ✅ Fixed — now `https://` on all pages |
| Outdated "Southampton" in index.html keywords | ✅ Fixed — keywords updated |
| No favicon | ⬜ Not yet done — requires creating/sourcing an icon file |
| No Open Graph / Twitter Card tags | ⬜ Not yet done — optional improvement |
| No canonical `<link>` tags | ⬜ Not yet done — low priority |
| `datascience.html` slug has no separator | ⬜ Not renamed — kept as-is per instruction |

---

## Current `<title>` Values (Post-implementation)

| Page | Title |
|------|-------|
| `index.html` | `Tom Williams - Arctic Marine Ecologist` |
| `publications.html` | `Publications — Tom Williams` |
| `projects.html` | `Research Projects — Tom Williams` |
| `datascience.html` | `Data Science — Tom Williams` |

---

## Current Meta Descriptions (Post-implementation)

| Page | Meta description |
|------|----------------|
| `index.html` | "Tom Williams — Arctic marine ecologist and research fellow at Åbo Akademi University, specialising in benthic ecology, biodiversity, and data-driven approaches to environmental change." |
| `publications.html` | "Publications by Thomas J. Williams — peer-reviewed articles, conference proceedings, policy briefs, and datasets in marine science, Arctic ecology, and ocean research." |
| `projects.html` | "Research projects by Tom Williams covering Arctic marine ecology, offshore wind impacts, carbon cycling, and climate change effects on polar benthic ecosystems." |
| `datascience.html` | "Data science resources, TidyTuesday visualisations, and R tools curated by Tom Williams, marine ecologist and quantitative researcher." |

---

## Remaining Open Items

1. **Favicon** — No favicon exists. Add a `favicon.ico` or `favicon.png` to the root and link it from all four `<head>` sections. Until added, browsers make a 404 request on every page load.
2. **Open Graph tags** — No `og:` or `twitter:card` tags on any page. Worth adding if social sharing is a priority (especially for publications page).
3. **Canonical tags** — Low priority. Consider adding if the site ever appears at multiple URLs.
