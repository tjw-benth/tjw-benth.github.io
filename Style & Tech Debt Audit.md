# Style & Tech Debt Audit

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Content-Level Issues

| ID | Issue | Status |
|----|-------|--------|
| C1 | Nav duplicated across 4 files | ⚠ Structural limitation — not resolved. All four pages updated to use index.html as reference and are now in sync. Long-term fix (Jekyll) not done. |
| C2 | Nav inconsistencies between pages | ✅ Fixed — ARIA, role, and close button standardised on all pages |
| C3 | Footer duplicated with drift | ✅ Fixed — all footers now match, correct `rel`, heading, Twitter handle |
| C4 | TidyTuesday data in inline script | ⬜ Not done — low priority. Data remains in datascience.html script block. |
| C5 | Conference proceedings placeholder | ⬜ Not done — left as "Coming soon" |
| C6 | Outdated institution in meta tags | ✅ Fixed — index.html description and keywords updated to Åbo Akademi |

---

## Structural / Layout Issues

| ID | Issue | Status |
|----|-------|--------|
| S1 | `<section>` not `<footer>` for footer | ✅ Fixed — projects.html and datascience.html now use `<footer id="footer">` |
| S2 | Mismatched `</main>` tag in publications.html | ✅ Fixed — changed to `</section>` |
| S3 | Nested `<address>` in index.html | ✅ Fixed — outer `<address>` wrapper removed |
| S4 | Malformed inline styles on images in projects.html | ✅ Fixed — all 12 project images now use `width="200" height="250" style="object-fit: cover;"` |
| S5 | Questionable dl/dt/dd for education | ⬜ Not changed — low severity, no visual impact |
| S6 | Long inline script block in datascience.html | ⬜ Not done — extracting to external JS file remains a future improvement |

---

## Build / Tooling Issues

| ID | Issue | Status |
|----|-------|--------|
| B1 | No build system for SASS | ⬜ Not done — no CSS changes were required in this pass |
| B2 | No .gitignore | ✅ Fixed — `.gitignore` added covering `.DS_Store`, `Thumbs.db`, `.claude/settings.local.json` |
| B3 | No CI/CD pipeline | ⬜ Not done — optional improvement |
| B4 | README is a stub | ✅ Fixed — README fully rewritten with site structure, editing guide, conventions, and critical notes |

---

## Remaining Open Items

1. **TidyTuesday data (C4):** Extract the `tidyTuesdayProjects` array and rendering functions from the inline `<script>` block to `assets/js/tidytuesday.js`. Low effort, improves maintainability.
2. **Conference proceedings (C5):** Populate or remove when appropriate.
3. **SASS build system (B1):** If CSS changes are planned, add a `package.json` with a compile script, or formally retire the SASS source and treat `main.css` as canonical.
4. **CI/CD (B3):** Optional — add a GitHub Actions workflow to validate HTML on push.
5. **Inline script extraction (S6):** Low priority — move TidyTuesday JS to an external file.
