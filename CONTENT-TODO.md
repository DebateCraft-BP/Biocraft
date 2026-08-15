# Content to fill in

Everything below is a placeholder because it isn't in either source PDF. Replace before launch.

- `app/about/page.tsx` — mission statement (currently `[TODO: mission statement]`)
- Application deadline / dates for the Fall 2026 cohort (not shown anywhere yet — add to
  `app/page.tsx` CTA section once known)
- Tuition (not mentioned anywhere; add if the program charges one)
- The pptx roster (slide 2) lists a 4th person, Emmanuel Zhang (Phillips Exeter Academy), not
  currently on the About team list — add via `content/team.ts` if he should be included
- `lib/site.ts` — `SITE_URL` is a placeholder domain (`https://biocraft.example`); replace with the
  real domain once one exists. Drives `metadataBase`, `robots.txt`, and `sitemap.xml` — one edit
  fixes all three.

## Legal (Terms of Service / Privacy Policy)

`app/terms/page.tsx` reproduces DebateCraft Academy's *Student and Family Agreement* (from
`~/Downloads/DebateCraft Academy Student Agreement.md`), lightly cleaned up for the web (a handful of
source typos fixed — "the Aca is demy" → "the Academy", "Andy" → "and", "singing this agreement" →
"signing this agreement", a garbled Section 10.4.1 sentence clarified without changing its meaning).
No substantive term was changed. `app/privacy/page.tsx` is a new document, not present in any source
file — see below.

**Before either page goes live, get both reviewed by a licensed attorney.** Specific open items:

- Privacy Policy §5.2 — the video conferencing platform used for sessions isn't named anywhere in the
  source materials; the policy currently has a `[to confirm]` placeholder instead of guessing a vendor
  (Zoom, Google Meet, etc.)
- Privacy Policy §11 — international operations note is deliberately generic (DebateCraft's own
  materials reference Hong Kong elsewhere); if HK's Personal Data (Privacy) Ordinance or another
  jurisdiction's law applies to any part of the operation, that needs its own dedicated review — this
  policy only covers the US frameworks you asked for
- No US state of organization or governing law was provided anywhere in the source materials, so
  neither legal page names one — add if/when incorporated
- Terms page assumes families receive a **signed copy** of the Agreement as part of enrollment
  (Section "Acceptance"), since the source document's physical signature block doesn't translate to a
  static web page and no e-signature flow exists yet — confirm the actual delivery mechanism and wire
  it in if it needs to be different
- Both pages assume the contracting party is **DebateCraft Academy** (your choice) — if that changes,
  both documents need re-drafting, not just a find-and-replace, since obligations (e.g., who volunteers
  answer to, whose register it is) are written around that entity
