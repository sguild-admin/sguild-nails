## Quick orientation for AI coding agents

This repository is a small marketing/site app built with Next.js (App Router in `src/app`) + TypeScript and Tailwind CSS. Use these notes to be immediately productive.

- Project roots and entry points
  - Pages and layouts live under `src/app/` (App Router). Key files: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/oahu/page.tsx`, `src/app/dallas/page.tsx`.
  - Reusable UI pieces are under `src/components/` (example: `FeaturableReviews.tsx`). Global styles: `src/app/globals.css`.

- Build / dev / lint commands
  - Development: `npm run dev` (script is `next dev --turbopack`).
  - Build: `npm run build` (uses Turbopack flag in package.json). Production start: `npm start`.
  - Lint: `npm run lint` (uses eslint).

- Framework & dependencies
  - Next.js v15 (App Router), React 19, TypeScript. Tailwind v4 and PostCSS are configured in `tailwind.config.ts` and `postcss.config.*`.
  - Small UI libs: `framer-motion`, `lucide-react`.

- Important codebase patterns & conventions (do not deviate unless necessary)
  - Client components: Files that use browser APIs or hooks are explicit `use client` modules (see top of `src/app/page.tsx`, `src/components/FeaturableReviews.tsx`, and location pages). When adding code that uses document/window or React hooks, add `use client` at the top.
  - External scripts: `FeaturableReviews.tsx` implements a single-load pattern: check for an existing <script src="...">, wait for its load, set a `data-loaded` marker, and re-initialize on client navigation. Follow this pattern when adding other third-party widgets to avoid duplicate loads and race conditions.
  - Avoid arbitrary Tailwind utilities: The repo intentionally avoids Tailwind arbitrary classes (see header comment in `src/app/oahu/page.tsx`). Prefer stable utility classes or inline styles (the project sometimes uses `style={{ aspectRatio: '4 / 3' }}` instead of `aspect-[4/3]`).
  - Images and static assets: Place images in `public/assets/` and reference them as `/assets/<name>.jpg`. Many components include `onError` handlers that set fallback remote images—follow that practice for robust rendering in tests.
  - Navigation: Use `next/link` for internal links; the codebase sometimes includes trailing slashes in hrefs (e.g., `/oahu/`). Keep paths consistent with existing files.

- Accessibility & micro-patterns
  - Header/logo: use `aria-label="Sguild Swim Instruction home"` and `sr-only` where appropriate (see `src/app/page.tsx` Header). Keep these accessible attributes when changing header markup.
  - Contact constants: `PHONE` and `EMAIL` are declared in pages (e.g., `src/app/oahu/page.tsx`) for easy editing—do not change them without owner confirmation.

- Client-side state & effects
  - Wrap browser-only code in `useEffect` and guard with `if (typeof window !== 'undefined')` when necessary. See `FeaturableReviews.tsx` for an example that defers initialization and cleans up on unmount.

- Testing / sandbox friendliness
  - Several pages were stabilized to avoid class-parsing crashes in sandboxes. If you refactor styles, prefer non-arbitrary classes and avoid build-tool-specific hacks.

- Where to look for examples
  - Reusable external-script loader: `src/components/FeaturableReviews.tsx`.
  - Page layout, head metadata, and font preconnects: `src/app/layout.tsx`.
  - Location-specific structure (hero, CTAs, pricing): `src/app/oahu/page.tsx` and `src/app/dallas/page.tsx`.
  - Location selector and header component patterns: `src/app/page.tsx`.

If something is ambiguous (for example, the canonical booking phone/email to use, or whether to introduce arbitrary Tailwind utilities), stop and ask the repo owner—do not change live contact info or introduce classes that previously caused test-toolchain issues.

-- End of file
