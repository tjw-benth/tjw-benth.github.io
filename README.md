# tjw-benth.github.io

Personal academic and portfolio website for Tom Williams — Arctic marine ecologist and research fellow at Åbo Akademi University. Hosted via GitHub Pages at **https://tjw-benth.github.io**.

---

## Site Structure

```
tjw-benth.github.io/
├── index.html           Homepage (biography, research interests, education, featured projects)
├── publications.html    Peer-reviewed articles, policy briefs, datasets
├── projects.html        All research projects (12 cards with images and links)
├── datascience.html     TidyTuesday portfolio, R packages, books, cheatsheets
├── williams_CV.pdf      Current CV (linked from navigation)
├── assets/
│   ├── css/main.css     Compiled stylesheet — do not edit directly
│   ├── js/              JavaScript (main.js, fetchprojects.js, jQuery plugins)
│   └── sass/            SASS source — must be compiled to update main.css
└── images/              All site images (41 files)
```

---

## How to Edit Content

This is a **plain static HTML site** — no Jekyll, no build step required for content changes.

1. Edit the relevant `.html` file directly.
2. Open the file in a browser locally to verify the change looks correct.
3. Commit and push — GitHub Pages deploys automatically.

---

## Navigation and Footer

Navigation and footer HTML are **repeated in every page** (no shared template). If you change a nav item or footer detail, you must update **all four HTML files**.

`index.html` is the **reference implementation** — when in doubt, match its nav and footer markup.

---

## Adding a New Project

Edit `projects.html`. Add a new `<article>` inside the `<section class="features">` block, following the pattern of existing articles:

```html
<article>
    <a href="[PROJECT URL]" target="_blank" class="image content">
        <img src="images/[IMAGE].jpg" alt="[Description]" width="200" height="250" style="object-fit: cover;" />
    </a>
    <h3 class="major">[Project Title]</h3>
    <p>[Description]</p>
    <a href="[PROJECT URL]" target="_blank" class="special">Learn more</a>
</article>
```

> **Important:** The homepage dynamically fetches 4 random projects from `projects.html` via `assets/js/fetchprojects.js`. The `.features > article` structure must be preserved or the homepage will break.

---

## Adding a New TidyTuesday Project

Edit `datascience.html`. Find the `const tidyTuesdayProjects = [...]` array near the bottom of the file and add a new object:

```javascript
{
    title: "Project Title",
    date: "Month DD, YYYY",
    url: "https://github.com/tjw-benth/TidyTuesday/blob/main/r_scripts/...",
    image: "https://raw.githubusercontent.com/tjw-benth/TidyTuesday/main/outputs/...",
    alt: "Description of image",
    description: "Brief description of the analysis."
}
```

---

## Adding a Publication

Edit `publications.html`. Add a new `<article class="publication">` inside the relevant `<section>` (peer-reviewed, datasets, etc.), following the citation format already used.

---

## Updating the CV

Replace `williams_CV.pdf` in the repository root with a new version. Keep the same filename so the nav link (`href="williams_CV.pdf"`) continues to work without editing any HTML.

---

## CSS / Styling Changes

`assets/css/main.css` is the compiled stylesheet and is what the browser loads. SASS source lives in `assets/sass/`. To make CSS changes:

- Either edit `main.css` directly (simpler, but SASS source becomes stale).
- Or edit the SASS source and recompile: `sass assets/sass/main.scss assets/css/main.css`.

---

## Critical Conventions

- **Do not rename any `.html` file** — it will break public URLs and external links.
- **Do not remove `id="footer"`** from any footer element — it is the target of the Contact nav link (`#footer`) on every page.
- **Do not change the `.features > article` structure** in `projects.html` — `fetchprojects.js` depends on it.
- Image filenames are **case-sensitive** on GitHub Pages (Linux). `photo.JPG` and `photo.jpg` are different files.
