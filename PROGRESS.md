# West Pine Strategies — Build Progress

- [x] Scaffold Vite + React + React Router project
- [x] Global design system (CSS variables, fonts, base styles)
- [x] Shared components: Header/Nav, Footer, PlaceholderImage, Button
- [x] Home page — all sections
- [x] Properties page (West Pine Properties)
- [x] Partners page (West Pine Partners)
- [x] About page
- [x] Contact page (with working client-side form validation)
- [x] Testimonial carousel component (shared, reusable)
- [x] Responsive pass (mobile nav, grid collapse) on all 5 pages
- [x] Final QA: every internal link works, npm run build succeeds, no console errors

## Refinement Pass — OWO-inspired polish

- [x] Transparent-over-hero header (no bg until scrolled) — was already gated on scrollY > 40; added stronger top scrim
- [x] Looping muted background video on homepage hero
- [x] Sticky-image scroll-story section — piloted on Home "For Property Owners"; extend to other sections only after client sign-off
- [x] Full-bleed imagery pass (SiteImage component + frameless placeholders; borders kept on small grid cards)
- [x] Hover polish on cards, buttons, and nav links (hover-capable pointers only)
- [x] Typography scale-up + tighter tracking on display headings
- [x] Full-screen mobile nav takeover
- [x] Wire in real placeholder photography (Mixkit video + Pexels/Unsplash stills; founders portrait and map stay labeled placeholders on purpose)
- [x] Final cross-browser/responsive QA of the refinement pass

Note on item 1: the header was already transparent until scrollY > 40 (the
`.header--scrolled` class gates background/shadow/padding from one scroll
listener). What reads as a "solid bar" at the top is the dark hero behind it.
The refinement adds a stronger top scrim so nav text stays legible over
bright video frames.

## Refinement notes

- Scroll-story pilot shipped on Home "For Property Owners" only. It reads
  well at desktop; extend to Properties/Partners sections only after client
  sign-off.
- Reduced-motion video pause is implemented (matchMedia + change/playing
  listeners) but browser emulation of prefers-reduced-motion was not
  available in the QA harness, so that path is verified by code review, not
  end-to-end. Worth one manual check in macOS System Settings before launch.
- Hero video is Mixkit #4196 at 720p (5.5 MB). If launch performance audits
  flag it, re-encode to ~2 MB H.264 or swap to a poster-only hero on mobile.

## Known issues

(none)

Original build complete — see git log for full history.
