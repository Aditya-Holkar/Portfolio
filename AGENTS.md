# AGENTS.md — Shangrila

> **Generated:** 2026-05-10T00:00:00+05:30  
> **Last change:** Initial scan

---

## Project Overview

| Key | Value |
|---|---|
| Name | `shangrila` |
| Version | `0.0.0` |
| Type | Vite + React 19 SPA |
| Description | Personal portfolio site |
| Entry | `index.html` → `src/main.jsx` |
| Router | `react-router` v7 (BrowserRouter) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Animation | GSAP v3 + Lenis v1 |
| State | Zustand v5 |
| Icons | react-icons v5 |

---

## Dependencies (`package.json`)

### Runtime

| Package | Version |
|---|---|
| `react` | ^19.2.4 |
| `react-dom` | ^19.2.4 |
| `react-router` | ^7.14.0 |
| `react-icons` | ^5.6.0 |
| `gsap` | ^3.15.0 |
| `lenis` | ^1.3.23 |
| `tailwindcss` | ^4.2.2 |
| `@tailwindcss/vite` | ^4.2.2 |
| `zustand` | ^5.0.12 |

### Dev Dependencies

| Package | Version |
|---|---|
| `vite` | ^8.0.1 |
| `@vitejs/plugin-react` | ^6.0.1 |
| `eslint` | ^9.39.4 |
| `@eslint/js` | ^9.39.4 |
| `eslint-plugin-react-hooks` | ^7.0.1 |
| `eslint-plugin-react-refresh` | ^0.5.2 |
| `globals` | ^17.4.0 |
| `@types/react` | ^19.2.14 |
| `@types/react-dom` | ^19.2.3 |
| `daisyui` | ^5.5.19 |

---

## Scripts

| Script | Command |
|---|---|
| `dev` | `vite ` |
| `build` | `vite build` |
| `lint` | `eslint .` |
| `preview` | `vite preview` |

---

## File Tree

```
.
├── index.html                  Entry HTML
├── package.json                Dependencies & scripts
├── vite.config.js              Vite + React + Tailwind plugin config
├── eslint.config.js            ESLint flat config (React hooks, refresh)
├── .gitignore                  Ignores node_modules, dist, agent, .vscode
├── .vscode/settings.json       Format-on-save, Tailwind class sorter
├── README.md                   Vite template readme
│
├── src/
│   ├── main.jsx                App bootstrap (BrowserRouter, StrictMode)
│   ├── App.jsx                 Root component (Lenis, Navbar, Routes)
│   ├── App.css                 Empty
│   ├── index.css               Tailwind directives, DaisyUI, Lenis CSS
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── Component/
│   │   ├── Navbar.jsx          Fixed sidebar + mobile top bar + live clock
│   │   ├── Home.jsx            Page composer (First → Second → Sixth → Third → Fourth → Fifth)
│   │   ├── First.jsx           Hero (image, intro, email, Chess.com link)
│   │   ├── Second.jsx          Social links (GitHub, LinkedIn, LeetCode)
│   │   ├── Third.jsx           Tech stack / skills (React, Tailwind, GSAP, etc.)
│   │   ├── Fourth.jsx          Work experience (Capslock Studio)
│   │   ├── Fifth.jsx           Key projects (Design System, Data Studio, Maintenance)
│   │   ├── Sixth.jsx           Education (BSc Comp Sci, Pune)
│   │   ├── Footer.jsx          *Placeholder — not wired in*
│   │   ├── Projects.jsx        *Placeholder — not wired in*
│   │   └── Button.jsx          Reusable styled <button>
│   └── Zu-Store/
│       └── Store.js            Zustand store (empty shell)
│
├── public/
│   ├── Aditya Holkar.pdf       Resume PDF
│   ├── favicon.svg
│   └── icons.svg
│
├── docs/                       Built output (vite build)
├── agent/                      Agent configs (gitignored)
└── node_modules/               (gitignored)
```

---

## Component Dependencies

```
main.jsx
  └── App.jsx
        ├── Navbar.jsx
        ├── Home.jsx
        │   ├── First.jsx ───── Button.jsx
        │   ├── Second.jsx
        │   ├── Sixth.jsx
        │   ├── Third.jsx ───── Button.jsx
        │   ├── Fourth.jsx
        │   └── Fifth.jsx ───── Button.jsx
        ├── Footer.jsx (unused)
        └── Projects.jsx (unused)
```

---

## Route Map

| Path | Component | Description |
|---|---|---|
| `/` | `Home` | Full portfolio landing page |

---

## Change Log

### 2026-05-10 — Initial project scan
- Created AGENTS.md with full project inventory
- Scanned all 14 source files + configs
- Documented all components, dependencies, scripts, and routes

### 2026-05-10 — Added TradeIntel project to Fifth.jsx
- Added new project entry "TradeIntel" to Fifth.jsx (Import/Export Intelligence Platform)
- Role: Frontend Developer — built React + Vite SPA with dark/light theme, Tailwind CSS v4
- Link: https://tradeintels.netlify.app/
- Updated AGENTS.md change log

### 2026-05-10 — Generated TradeIntel OG brand image
- Created `public/tradeintel-og.svg` — sober, minimal product-brand SVG image for TradeIntel
- Theme: dark slate gradient background with indigo accent, globe wireframe motif
- Updated Fifth.jsx to reference `/tradeintel-og.svg` instead of capslock logo for TradeIntel entry
- Updated AGENTS.md change log

### 2026-05-10 — Major UI/UX overhaul: theme, animations, navbar, progress bar
- **Store.js**: Added Zustand theme store (`useThemeStore`) with dark/light toggle, persisted to localStorage
- **index.css**: Added CSS custom properties (`--bg`, `--text`, `--text-muted`, `--border`, `--accent`) for both themes; added `.progress-bar` styles
- **Navbar.jsx**: Complete redesign — glass morphism sidebar with backdrop-blur, GSAP entrance animations (brand, links, clock stagger), animated hamburger menu (morphs to X), theme toggle (sun/moon icons), responsive mobile overlay
- **App.jsx**: Added fixed scroll progress bar at top (GSAP-driven width), Lenis smooth scroll retained, theme initialization from store on mount
- **Home.jsx**: Added GSAP ScrollTrigger entrance animations — each section fades up (opacity 0→1, y 60→0) when scrolling into view, with proper cleanup
- **Fifth.jsx**: Converted to horizontal scroll slider — GSAP ScrollTrigger pins the section, translates card track horizontally on vertical scroll with `scrub: 1`, cards fade+scale in during scroll; mobile fallback uses vertical fade-up stagger
- All components updated to use CSS custom properties for theme-aware colors
- Updated AGENTS.md change log

### 2026-05-11 — DaisyUI removal, GSAP scroll fixes, skill cleanup
- **index.css**: Removed `@plugin "daisyui"` and DaisyUI overrides; added `.section-label` custom class
- **Third.jsx**: Removed Firebase and DaisyUI skill entries; cleaned up unused icon imports; replaced `badge` classes with custom Tailwind; added Vite, NPM, Node.js skills; replaced DaisyUI icon containers with custom styled divs
- **Second.jsx / Fourth.jsx / Sixth.jsx**: Replaced DaisyUI `badge` classes with `section-label` custom style
- **Button.jsx**: Replaced DaisyUI `btn` class with custom Tailwind border + hover styling
- **Navbar.jsx**: Replaced DaisyUI `btn btn-square btn-ghost btn-sm` with custom flex buttons
- **Fifth.jsx**: Removed border, rounded-2xl, and background from project cards; removed all GSAP horizontal scroll effect, restored original vertical list layout with proper 2-column lst/proj structure
- **Home.jsx**: Changed all sections to `min-h-screen` with `flex items-center` for full-viewport section covering, then reverted to natural height with `gap-10` spacing
- Updated AGENTS.md change log
