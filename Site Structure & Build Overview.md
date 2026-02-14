# Site Structure & Build Overview

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)
**Phase:** 1 — Read-only orientation

---

## 1. Build System

This is a **plain static HTML site**. There is no Jekyll, Hugo, Eleventy, or any other static site generator in use. There is no `_config.yml`, `Gemfile`, `package.json`, or build script of any kind.

**What this means in practice:**
- Every page is a self-contained `.html` file served directly by GitHub Pages.
- There is no templating, partials, or layout inheritance.
- Navigation, header, and footer HTML are **copy-pasted into every page** — they are not generated from a shared source.
- SASS source files exist in `assets/sass/` but main.css is already pre-compiled. SASS compilation must happen locally before committing (no CI/CD pipeline exists).
- GitHub Pages serves the repository root as-is. No branch or subfolder configuration is apparent.

---

## 2. Repository Structure

```
tjw-benth.github.io/
│
├── index.html              Homepage / landing page
├── publications.html       Academic publications list
├── projects.html           Research projects portfolio
├── datascience.html        Data science resources page
├── williams_CV.pdf         Current CV (linked from navigation on all pages)
├── .gitignore              Excludes .DS_Store, Thumbs.db, .claude settings
├── README.md               Maintenance guide
│
├── assets/
│   ├── css/
│   │   ├── main.css        Compiled stylesheet (4,242 lines — do not edit directly)
│   │   ├── noscript.css    Fallback styles for JS-disabled browsers
│   │   └── fontawesome-all.min.css
│   │
│   ├── js/
│   │   ├── main.js         Template interaction logic (menu, scroll effects)
│   │   ├── fetchprojects.js  Custom script — fetches projects.html and
│   │   │                     injects 4 random projects into index.html
│   │   ├── jquery.min.js
│   │   ├── jquery.scrollex.min.js
│   │   ├── browser.min.js
│   │   ├── breakpoints.min.js
│   │   └── util.js
│   │
│   ├── sass/               SASS source (base, components, layout, libs)
│   │   └── main.scss       Entry point
│   │
│   └── webfonts/           FontAwesome icon font files (eot, svg, ttf, woff, woff2)
│
├── images/                 41 image files (JPG, PNG, JPG)
│   ├── profile_shot.JPG
│   ├── [Arctic field & project photos]
│   └── [R cheatsheet PNGs]
│
└── README.md               Two-line stub only
```

---

## 3. Pages and Their Public URLs

| File | Public URL | Purpose |
|------|-----------|---------|
| `index.html` | `https://tjw-benth.github.io/` | Homepage, biography, research interests, education, featured projects |
| `publications.html` | `https://tjw-benth.github.io/publications.html` | Peer-reviewed articles, conference proceedings, policy briefs, datasets |
| `projects.html` | `https://tjw-benth.github.io/projects.html` | All 12 research projects (cards with images, descriptions, links) |
| `datascience.html` | `https://tjw-benth.github.io/datascience.html` | TidyTuesday showcases, R packages, books, cheatsheets |

No other HTML pages exist. There are no subdirectories containing pages.

---

## 4. How Navigation Is Implemented

Navigation is **repeated verbatim in every HTML file**. There is no shared template. The nav block appears in all four pages and is structurally identical across `publications.html`, `projects.html`, and `datascience.html`, with a slightly enhanced version on `index.html` (which adds `aria-label` attributes and uses a `<button>` for close rather than `<a class="close">`).

**Nav items in all pages:**

| Label | Target | Status |
|-------|--------|--------|
| Home | `index.html` | Working |
| Publications | `publications.html` | Working |
| Projects | `projects.html` | Working |
| Data Science | `datascience.html` | Working |
| Contact | `#footer` | Working (anchor-based) |
| CV | `williams_CV.pdf` | ✅ Functional — links to PDF in repository root |

The Contact link (`#footer`) works within any page because every page has an element with `id="footer"`.

---

## 5. How Content Becomes Pages

1. Content is written directly in HTML files — no frontmatter, no markdown, no data files.
2. Styling comes from `assets/css/main.css` (a compiled CSS file based on the HTML5 UP "Solid State" template).
3. Interactive features (menu toggle, scroll effects) are handled by `main.js` and jQuery plugins.
4. Two custom dynamic features exist:
   - **Homepage featured projects:** `fetchprojects.js` fetches `projects.html` at page load, extracts the 12 project `<article>` elements, shuffles them, and inserts 4 random ones into `#featured-projects` on the homepage.
   - **TidyTuesday highlights:** An inline `<script>` block in `datascience.html` holds a hardcoded JSON array of 9 projects and renders 2 random ones into `#tidytuesday-highlights` on each page load.

---

## 6. Where Navigation Is Defined

Navigation is defined in four separate places:

| File | Location in file | Notes |
|------|-----------------|-------|
| `index.html` | Lines 29–43 | Has `role="navigation"`, `aria-label`, uses `<button class="close">` |
| `publications.html` | Lines 23–37 | Uses `<a class="close">` instead of button |
| `projects.html` | Lines 22–35 | Uses `<a class="close">` instead of button |
| `datascience.html` | Lines 29–42 | Uses `<a class="close">` instead of button |

Any change to navigation (adding a page, changing a label, fixing the CV link) requires editing all four files.

---

## 7. Design Framework

The site is built on the **"Solid State" template by HTML5 UP** (html5up.net, CCA 3.0 license). The template provides:

- A responsive CSS grid and layout system
- Sticky header with scroll-triggered alt state
- Slide-in navigation menu
- Section spotlight patterns (`wrapper spotlight style1/style2/style3`)
- Features grid (`.features section > article`) used for project cards

The template originally used SASS for styling. The compiled `main.css` is what the browser loads. If CSS changes are needed, they should ideally go into the SASS source and be recompiled, though direct edits to `main.css` are possible given no CI enforces SASS compilation.

---

## 8. Assets and Dependencies

**All paths are relative.** No absolute or hardcoded domain-based URLs are used for internal assets.

**External dependencies loaded at runtime:**
- Google Fonts: Raleway and Source Sans Pro (loaded via CSS `@import`)
- FontAwesome icons: self-hosted in `assets/webfonts/`
- TidyTuesday project images: loaded from `raw.githubusercontent.com` (external, in `datascience.html`)

---

## 9. Conventions to Respect in Future Changes

1. **No build step required** for HTML and content changes — edit the file, commit, push.
2. **SASS changes** require local compilation to update `main.css` before committing.
3. **Navigation changes** must be replicated across all four HTML files manually.
4. **New pages** must follow the existing HTML structure: `#page-wrapper > #header + #menu + [content] + #footer`.
5. **URL stability:** GitHub Pages serves filenames directly. Renaming any `.html` file breaks the public URL and any external links to it.
6. **Image files** use mixed casing (`.jpg`, `.JPG`, `.png`). On case-sensitive servers (Linux — which GitHub Pages uses), `profile_shot.JPG` and `profile_shot.jpg` are different files. Consistency matters.
7. **`projects.html` is consumed programmatically** by `fetchprojects.js`. The `.features > article` structure of that file must not be broken.
8. **The footer anchor `#footer`** is used as the Contact link target from all pages. It must remain present on every page.
