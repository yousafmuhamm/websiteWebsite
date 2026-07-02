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

## Scope change: properties page removed

- Removed the `/properties` route, `Properties.jsx`, the `PropertyCard`
  component, and `src/data/properties.js` (the hardcoded per-property list).
- Removed the "Featured Properties" section from the Home page.
- Repointed every button that used to link to `/properties` ("Find a
  Property", "Learn More" on the Properties service card, "View Our
  Properties") to `/contact` instead, or removed the button where a
  duplicate CTA already pointed to `/contact`.
- Deleted the 3 stock photos that were only used by the removed property
  cards; updated `MEDIA-CREDITS.md` accordingly.
- Reason: no per-property listing/portfolio was requested in the client's
  plan, and maintaining individual property cards (add/remove as homes are
  bought or sold) isn't worth the upkeep for this site. The general West
  Pine Properties service is still described on the Home page.

Original build complete — see git log for full history.
