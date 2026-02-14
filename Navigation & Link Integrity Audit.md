# Navigation & Link Integrity Audit

**Site:** https://tjw-benth.github.io
**Audit date:** 2026-02-14
**Last updated:** 2026-02-14 (post-implementation)

---

## Status Summary

| Issue | Status |
|-------|--------|
| CV link non-functional | ✅ Fixed — links to `williams_CV.pdf` on all pages |
| Inconsistent close-menu element | ✅ Fixed — all pages now use `<button>` |
| Missing ARIA on nav (non-index pages) | ✅ Fixed — `role`, `aria-label`, and `aria-label` on menu trigger added to all pages |
| `</main>` mismatched tag in publications.html | ✅ Fixed — changed to `</section>` |
| Nested `<address>` in index.html | ✅ Fixed — outer `<address>` wrapper removed |
| `<section id="footer">` not `<footer>` | ✅ Fixed — projects.html and datascience.html now use `<footer id="footer">` |
| URL shortener in publications.html | ✅ Fixed — replaced with direct Southampton PDF URL |
| Missing `rel="noopener noreferrer"` on external links | ✅ Fixed — all pages standardised |
| `http://` HTML5 UP link | ✅ Fixed — all four pages now use `https://` |
| Footer heading capitalisation | ✅ Fixed — all pages now use "Contact Details and Socials" |
| Twitter `@` prefix missing on non-index pages | ✅ Fixed — all pages now show `@tjw_97` |
| Malformed email `<li>` in datascience.html | ✅ Fixed — correct HTML nesting |

---

## Remaining Issues (Not Yet Actioned)

None from the original audit remain open. All structural and link integrity issues have been resolved.

---

## Notes

- The `datascience.html` filename was intentionally kept as-is (no rename to `data-science.html`) per instruction.
- The `projects.html` footer was moved outside `<section id="wrapper">` and changed to `<footer id="footer">`, resolving the structural nesting issue.
- All four pages now have a consistent, correct navigation block matching `index.html` as the reference implementation.
