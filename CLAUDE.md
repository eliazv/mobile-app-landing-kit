# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start dev server (Turbopack) at localhost:3000
- `pnpm build` — production build (also runs TypeScript type-checking)
- `pnpm start` — run the production build
- `pnpm lint` — run ESLint (`eslint-config-next`)

There is no test suite configured.

## Architecture

This is a Next.js (App Router, TypeScript, Tailwind CSS v3) landing-page template (`finwise`), forked/adapted from a public iOS-app-landing-page starter into a "mobile app landing kit". It is content-driven: almost all copy, links and images live in `src/data/*.ts(x)` files typed against interfaces in `src/types.ts`, and components just render that data. When changing on-page text, prefer editing the data file over the component.

### Two parallel component sets: `components/` vs `components/mobile-kit/`

The repo carries **two variants** of several core sections (Hero, Footer, AppBanner, etc.):
- `src/components/Hero.tsx`, `src/components/Footer.tsx` — original "ios-app-landing-page" variants (kept for reference, not wired up).
- `src/components/mobile-kit/Hero.tsx`, `src/components/mobile-kit/Footer.tsx` — the **active** "mobile-app-landing-template" variants (animated headline, scroll-stack iPhone screenshots, wave footer), imported from `src/app/layout.tsx` and `src/app/page.tsx`.

Comments at the top of `layout.tsx`/`page.tsx` document this and explain how to swap back to the original variant by changing the import. When asked to redesign/restyle Hero or Footer, check which variant is active before editing, and keep both in sync only if explicitly asked — otherwise edit the active (`mobile-kit`) one.

Corresponding data: `src/data/hero.ts` (original Hero) vs `src/data/heroAlt.ts` (active mobile-kit Hero — `heroAltDetails`).

### Page composition

`src/app/page.tsx` assembles the homepage from section components in order: Hero → Logos → Benefits → Pricing → Testimonials → FAQ → Stats → CTA, wrapping most of them in the shared `Section`/`Container`/`SectionTitle` primitives. Section anchors (`id="features"`, `id="pricing"`, `id="testimonials"`, `id="cta"`, etc.) are the targets of in-page nav links.

### Cross-page anchor navigation

`menuItems` (`src/data/menuItems.ts`) and the header CTA in `src/components/Header.tsx` use **`/#section-id`** (not bare `#section-id`) hrefs so that Next.js's App Router navigates to the homepage and scrolls to the target section even when the user is on another route (blog, contact, etc.). Keep this `/#…` convention for any new anchor links to homepage sections.

### Blog

`src/data/blogPosts.ts` defines posts (with `sections` arrays used both for rendering and the `TableOfContents`). `src/app/blog/[slug]/page.tsx` is the dynamic post template (`generateStaticParams` pre-renders all posts). Every post ends with `<BlogCTACard />` (`src/components/BlogCTACard.tsx`), a compact card linking to `/#cta`.

### Analytics

`src/app/layout.tsx` wires up three optional/parallel analytics integrations, each gated on config so they're no-ops when unconfigured:
- Google Analytics via `@next/third-parties/google`, gated on `siteDetails.googleAnalyticsId`.
- Umami, injected as a `next/script` tag gated on `process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID` (script URL configurable via `NEXT_PUBLIC_UMAMI_SCRIPT_URL`, defaults to Umami Cloud). Document new env vars in `.env.example`.
- Vercel Analytics via `@vercel/analytics/react`'s `<Analytics />`, always mounted.

### Localization

Real (non-placeholder) on-page copy is in Italian (e.g. `heroAltDetails`, `Section` titles/descriptions in `page.tsx`, `stats`, `FAQ` labels, header CTA buttons). Placeholder strings shaped like `"feature1 [title]"` are intentional template placeholders meant to be replaced by whoever reuses this kit — do not "translate" them, just replace with real content when customizing.
