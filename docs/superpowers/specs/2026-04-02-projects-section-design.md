# Projects Section Design

## Overview

Update the portfolio's projects section with real project data, images, links, and add a dedicated detail page for the Sarba project.

## Part 1: Homepage Project Cards

Update the existing `ProjectsSection` with 3 real projects. Each card uses the current `ProjectCard` component pattern (image, title, description, CTA) with added link behavior.

### Project Data

**1. Ossau App**
- Image: `/ossau.png`
- Description: "Shared outdoor experience application making mountain activities more accessible in the Pyrenees."
- CTA: "Visit Website"
- Link: `https://ossau.app/` (external, opens in new tab)

**2. bVision**
- Image: `/bvsion.png`
- Description: "Interactive tool designed to help uncover personal values and understand how they influence work performance and satisfaction."
- CTA: "Visit Website"
- Link: `https://www.boschung.com/fr/product/bvision/` (external, opens in new tab)

**3. Sarba**
- Image: `/sarba-mockup-1.png`
- Description: "Expense Management Application designed to help employees and administration to manage expenses incurred during working days."
- CTA: "View Case Study"
- Link: `/projects/sarba` (internal link)

### Card Changes

- Add `href` (and optional `isExternal` flag) to `ProjectCard` props
- Wrap each card in an `<a>` tag (or Next.js `<Link>`)
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Internal links: Next.js `<Link>` for client-side navigation
- Replace placeholder Google-hosted images with local images from `/public`

## Part 2: Sarba Detail Page (`/projects/sarba`)

A new page at `app/projects/sarba/page.tsx` using the faithful recreation approach.

### Page Structure (top to bottom)

1. **Back link** — "← Back to projects" linking to `/#projects`
2. **Title** — "Sarba" (large heading, `font-headline`)
3. **Description** — "This application simplifies expense tracking and report management for companies. Employees can log expenses in multiple currencies, sign monthly reports, and receive notifications for approvals. Administrators can generate reports, request signatures, and download finalized documents — all in a seamless, digital workflow."
4. **Mockup image 1** — `/sarba-mockup-1.png` (full width, rounded corners)
5. **Features grid** — Two-column layout (responsive, stacks on mobile):
   - **User Features:**
     - Create expenses, attach receipts, and manage past transactions
     - Receive notifications for pending signatures
     - Sign monthly reports and review previous ones
   - **Admin Features:**
     - Generate monthly reports for all employees
     - Request and track signature statuses
     - Download signed reports
     - Multi-currency expense support
6. **Mockup image 2** — `/sarba-mockup-2.png` (full width, rounded corners)

### Styling

- Uses existing design tokens from `globals.css` (on-surface, on-surface-variant, secondary, surface-container, etc.)
- Same `max-w-7xl mx-auto px-8` container as other sections
- Consistent typography: `font-headline` for headings, `font-body` for text
- Responsive: features grid collapses to single column on mobile

### Routing

- New route: `app/projects/sarba/page.tsx`
- Shared layout via existing `app/layout.tsx` (Nav + Footer persist)
- No new layout file needed

## Language

English for now. French translation planned for later.

## Assets

All images already in `/public`:
- `ossau.png`
- `bvsion.png`
- `sarba-mockup-1.png`
- `sarba-mockup-2.png`
