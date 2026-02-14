# Content Canonicalization Plan

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Status Summary

| Cluster | Recommendation | Status |
|---------|---------------|--------|
| Projects on homepage | Document fetchprojects.js dependency | ✅ Done — documented in README.md |
| Data Science vs Projects silos | Add cross-links | ✅ Done — cross-links added in both directions |
| Biography | No action needed | ✅ N/A |
| Footer repeated verbatim | Standardise content | ✅ Done — all footers now match index.html reference |
| TidyTuesday in JS | Note in tech debt | ✅ Noted — no immediate action taken |
| Publications "Coming soon" | No action | ✅ Left as-is |

---

## Changes Made

### Cross-links added

**`projects.html` header description:** Now includes links to both `datascience.html` and `publications.html`.

**`datascience.html` page subheading:** Now includes a link to `projects.html` ("For data-driven research outputs, see my research projects").

**`publications.html` author bio:** Includes a link to `projects.html` ("For associated research projects, see the Projects page").

**Individual project cards in `projects.html`:** Several cards now link directly to relevant publications (e.g. Amundsen expedition links to Williams et al. 2024 in Chemical Geology and Scientific Data; JR18006 cruise links to the NERC dataset; intraspecific variability project links to Williams et al. 2024 in Scientific Reports and Ecology and Evolution).

### Footer standardised

All four pages now use the same footer content, heading capitalisation, Twitter handle format, `rel` attributes, and `<address>` structure.

---

## Remaining Open Items

- **Long-term:** Migrate to Jekyll `_includes` for shared nav/footer to prevent future drift. This is a significant architectural change and has not been done.
- **TidyTuesday data:** Still hardcoded as a JS array in `datascience.html`. Extracting to a separate file remains a low-priority improvement (see Style & Tech Debt Audit).
