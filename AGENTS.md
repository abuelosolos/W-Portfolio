# W-Portfolio

React (Vite, .jsx) portfolio being updated to match the Figma design and gain animations.
Figma: https://www.figma.com/design/H60wCfY8hFlaRKhQZgEKUJ/Portfolio (fileKey `H60wCfY8hFlaRKhQZgEKUJ`)
- Page 1 "Portfolio": components, Home frame, CaseStudy frame, sections.
- Page 2 "CompFrames": plain frames of the original components (fallback).

## Rules
- NEVER run `git push` (or force push, or open PRs) unless the user explicitly asks. Local commits only if the user asks too.
- Figma MCP is on a free plan with very limited calls. **Budget: max 6 calls total.** Never re-fetch anything already saved in `docs/figma-cache/`. Before any extra Figma call, stop and ask the user.
- Keep the "Progress log" below up to date so a fresh session can resume from this file alone.
- Analyze existing .jsx before changing it. Prefer existing dependencies; ask before adding a new one.
- Respect `prefers-reduced-motion` for all animations.

## Design tokens (verified against Figma, see docs/figma-cache/variables.json)
- Background `#111111` (Figma; user mentioned #1E1E1E, pending confirmation), Text Primary `#F6F5F0`, Text Secondary `#5F5E59`, Text Muted `#8A8881`, Border `#D8D6CE`, Surface Alt `#ECEAE3`, Surface `#252425` (pills/cards; unnamed in Figma). About section is white `#FFF` with `#111` emphasis.
- Actual usage: headers = Text Primary, body copy = Text **Secondary**, nav/footer/hero bio/pill text = Text Muted, nav link hover and icon hover = Surface Alt.
- Fonts: Poppins (main), Inter (nav, pills), Space Grotesk (nav logo), Instrument Sans (footer logo), Inclusive Sans (footer links).
- Figma has desktop (1440) frames only. No mobile design.

## Figma cache (docs/figma-cache/), read these instead of calling Figma
`summary.md` (tokens, type, layout, components, copy), `gap-analysis.md` (code vs design, per file), `*-design-context.*` (raw code per frame), `metadata-node-map.md` (node IDs), `assets/` (SVG/PNG + manifest).

## Code layout
- `src/App.jsx`, `src/main.jsx`
- `src/components/`: Nav, Hero, About, Projects, Art, Connect, Footer
- `src/hooks/`: useMobileNav, useReveal, useSlider
- `src/styles/index.css` (single stylesheet), assets in `src/assets/images/`
- Commands: `npm run dev`, `npm run build`

## Progress log
- [Phase 1] CLAUDE.md created.
- [Phase 1] DONE: Figma extraction. Calls used: 5/6 (metadata 0:1, variables, Home 2:2, CaseStudy 83:282, Menu Items 89:850). 1 reserve call left; ask before using it. Screenshots skipped.
- [Phase 1] DONE: cache saved in docs/figma-cache/ (summary.md, gap-analysis.md, raw contexts, variables.json, node map, assets/ 49MB).
- [Phase 1] DONE: gap analysis written. NO component code has been edited yet.
- Not fetched (inferred): Footer-Link/Icon hover, CaseStudyBtn Variant2, CaretLeft hover, Carousel Hovering, any prototype/animation data.
- Open decisions (see end of gap-analysis.md): Experience section fate, router vs no new dep for case study page, bg #111 vs #1E1E1E, use of reserve call, data for 5 new projects, assets folder commit/gitignore, mobile layout.
- [Phase 2] DONE (no Figma calls, reserve call unspent, nothing committed/pushed): react-router-dom installed (user-approved); routes `/` and `/project/:slug` (vercel.json rewrite added); src/data/projects.js + socials.js; src/assets/icons/index.js + src/assets/images/index.js registries; Icon (CSS-mask) / Img (placeholder fallback) components; Nav, Hero (typing, carousel marquee, floaters), About (white band, tool hover), Experience (restyled), Projects grid + ProductCard, Art mosaic, Connect, Footer, pages/CaseStudy; CSS fully rewritten around Figma tokens; all motion behind prefers-reduced-motion; docs/figma-cache/assets/ gitignored.
- [Phase 2] Inferred (not in Figma cache): Footer-Link hover, Icon hover, CaseStudyBtn Variant2, CaretLeft hover, Carousel Hovering, pill hover states, disabled View Code/Live pills, mobile layout.
- [Art] Gallery uses src/assets/images/art-{sasha,lulu,abuelo,morse}.webp (grid order: sasha, lulu, abuelo top-right, morse bottom-right; sasha = green swimsuit art, abuelo = glasses self-portrait, morse = grey alien). Old Jersey/Wizzo/ArtCover files are now unused.
- [Experience] Section removed at user request (component, CSS and Home entry deleted).
- [Polish pass] DONE (no Figma calls, nothing committed/pushed): project card image is 16/10 (grid cards only); footer: desktop = copyright + links + giant wordmark, mobile = small brand + icons + left-aligned copyright (CSS only, one component); mobile (<=768px, `MOBILE_QUERY` in hooks/useMediaQuery.js) type/icon/button scale-down via clamp() and `--icon-scale`/`--tool-scale` vars, 40px touch targets, no overflow at 360px; mobile projects show `MOBILE_INITIAL_PROJECTS` (=3, in data/projects.js) with See more / Show less (collapse scrolls grid top into view); mobile hero does not render the desktop marquee (hook-based conditional); it shows scaled floating icons, then `HeroFling` (infinite deck of 4 cards slanted left; each card is on top 2s per cycle, flung off left, pile moves up, new card appears at the back, nothing re-enters from the side; same 15 slides as desktop; reduced-motion = plain swap), then the "you might wanna scroll" hint (bob animation, reduced-motion safe).
- [Tweaks] Hero is now min-height 100svh (content vertically centered, About starts below the fold); See more/Show less are text-only (icon removed); CaseStudyBtn hover = text slides 7px toward the arrow, arrow stays still (applies everywhere the button is used, incl. mobile; disabled under reduced motion).
- [About, mobile] More space between the tools row and the "I design more than I build" paragraph: total clamp(36px, 10vw, 56px) via margin-top on .about-copy-right (<=768px only).
- [About, mobile spacing v2] One spacing unit --about-gap = clamp(28px, 8vw, 44px) drives heading->dashes->copy->tools->last paragraph->bottom dashes; line-height 1.7; forced <br> hidden on mobile so text flows (JSX has a space before each <br>). Desktop unchanged.
- [Hero, mobile] Content stays vertically centered as before; "you might wanna scroll" is absolutely positioned 24px above the bottom of the hero (hero-top has padding-bottom 18px so the content did not shift); replaced mobile `HeroFling` deck with the same auto-scrolling `.hero-carousel` marquee used on desktop (cards scaled to `clamp(260px, 76vw, 360px)` with `16px` gap on `<=768px`).
- [CaseStudy, carousel] Auto-advances to the next image every 5s (`AUTO_SWIPE_MS = 5000`); clicking prev/next, keyboard arrows, or touch swipe resets the 5s timer; disabled under `prefers-reduced-motion`.
- [Art, lightbox] Clicking any `/collection.` gallery image opens a full-size (`object-fit: contain`) lightbox modal with a close (`×`) button above to the right (also closes on backdrop click or `Escape`).
- Unused now: src/hooks/useSlider.js (old slider), src/components/HeroFling.jsx, src/hooks/useMobileNav.js still used.
- Fake content marked `// TODO: replace` in src/data/projects.js and src/data/socials.js (grep TODO).
