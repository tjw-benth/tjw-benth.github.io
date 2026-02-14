# Information Architecture Review

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Status Summary

| Recommendation | Status |
|---------------|--------|
| Fix CV link | ✅ Done — `williams_CV.pdf` linked in nav on all pages |
| Add author bio to publications.html | ✅ Done — bio paragraph added above peer-reviewed section |
| Add current/past status labels to project cards | ✅ Done — all 12 cards now show status and approximate dates |
| Add cross-links between Publications and Projects | ✅ Done — selected project cards link to related publications |
| Add cross-links between Data Science and Projects | ✅ Done — both pages now reference each other |
| Reconsider "Aspiring Data Scientist" subtitle | ⬜ Left for author's discretion — not changed |

---

## Changes Made

### CV
`williams_CV.pdf` added to repository root. All four navigation menus now link to it correctly.

### Publications page — author bio
A paragraph was added directly below the page header, before the peer-reviewed section:

> "Thomas J. Williams is a research fellow at Åbo Akademi University, Finland, specialising in Arctic marine benthic ecology and quantitative approaches to understanding biodiversity and ecosystem functioning. He received his PhD from the University of Southampton in 2023. For associated research projects, see the Projects page."

### Projects page — status labels
All 12 project cards now include an italicised status/date line beneath the title. Examples:
- SEA-Quester: *Current (2024–present)*
- BOWIE: *Current (2023–present)*
- UK-Greenland capacity: *Current (2024–present)*
- PhD thesis project: *Completed — PhD thesis (2019–2023)*
- BLUEcoast: *Completed (2018–2019)*
- JR18006 cruise: *Completed (2019)*

This makes it immediately clear which projects are active and which are historical.

### Projects page — header cross-links
The page header description now reads: "All research projects I have been directly involved in. For data science and quantitative tools used in these projects, see the Data Science page. Associated outputs are listed on the Publications page."

### Individual project → publication cross-links
Selected project cards now include inline links to relevant outputs:
- Intraspecific variability project → Williams et al. 2024, *Scientific Reports*; Williams et al. 2024, *Ecology and Evolution*
- Geospatial mapping project → Putuhena, Williams et al. 2025, *Scientific Data*
- Amundsen expedition → Williams et al. 2024, *Scientific Data*; Williams et al. 2024, *Chemical Geology*
- JR18006 cruise → Williams et al. 2023, NERC EDS UK Polar Data Centre dataset

### Data Science page — cross-link to projects
The page subheading now includes: "For data-driven research outputs, see my research projects."

---

## Remaining Open Items

1. **"Aspiring Data Scientist" subtitle** on homepage — this is a personal framing decision. The audit recommended reviewing it given the TidyTuesday portfolio and quantitative ecology publications. Left unchanged pending author decision.
2. **No formal "About" page** — biography is still homepage-only. The author bio on `publications.html` partially addresses the information gap for visitors arriving from external links.
3. **No project-to-project cross-links** — related projects (e.g. BOWIE and geospatial mapping are both offshore wind) are not linked to each other. Low priority.
