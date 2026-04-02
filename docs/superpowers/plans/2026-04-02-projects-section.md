# Projects Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the homepage projects section with real data/images/links and create a dedicated `/projects/sarba` detail page.

**Architecture:** Extend the existing `ProjectCard` component to support links (internal via Next.js `Link`, external via `<a target="_blank">`). Update `ProjectsSection` data with real project info. Create a new `app/projects/sarba/page.tsx` for the Sarba case study page. Clean up `next.config.ts` since we no longer need remote image patterns.

**Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, `next/image`, `next/link`

---

## File Structure

- **Modify:** `app/components/home/ProjectCard.tsx` — add `href` and `isExternal` props, wrap in link
- **Modify:** `app/components/home/ProjectsSection.tsx` — replace placeholder data with real projects
- **Modify:** `next.config.ts` — remove unused `lh3.googleusercontent.com` remote pattern
- **Create:** `app/projects/sarba/page.tsx` — Sarba case study detail page

---

### Task 1: Update ProjectCard to support links

**Files:**
- Modify: `app/components/home/ProjectCard.tsx`

- [ ] **Step 1: Update ProjectCard props and implementation**

Add `href` and `isExternal` props. Wrap the card in a link element — `<a target="_blank" rel="noopener noreferrer">` for external, Next.js `<Link>` for internal.

```tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
  isExternal?: boolean;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  ctaLabel,
  href,
  isExternal,
}: ProjectCardProps) {
  const card = (
    <div className="group bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-500">
      <div className="aspect-video overflow-hidden bg-surface-container-high">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={600}
          height={338}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
        <p className="text-on-surface-variant text-sm mb-6 line-clamp-3 font-body">
          {description}
        </p>
        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-secondary group-hover:gap-4 transition-all font-headline">
          {ctaLabel}
          <span className="material-symbols-outlined text-sm ml-2">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    );
  }

  return <Link href={href}>{card}</Link>;
}
```

- [ ] **Step 2: Verify the dev server runs without errors**

Run: `npx next dev --turbopack`
Expected: No TypeScript errors. The homepage still renders (cards will break in next task when we update the data).

- [ ] **Step 3: Commit**

```bash
git add app/components/home/ProjectCard.tsx
git commit -m "feat: add link support to ProjectCard (href + isExternal)"
```

---

### Task 2: Update ProjectsSection with real project data

**Files:**
- Modify: `app/components/home/ProjectsSection.tsx`

- [ ] **Step 1: Replace placeholder projects data**

Replace the entire `projects` array and update the component to pass link props:

```tsx
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Ossau App",
    description:
      "Shared outdoor experience application making mountain activities more accessible in the Pyrenees.",
    imageUrl: "/ossau.png",
    imageAlt: "Ossau App",
    ctaLabel: "Visit Website",
    href: "https://ossau.app/",
    isExternal: true,
  },
  {
    title: "bVision",
    description:
      "Interactive tool designed to help uncover personal values and understand how they influence work performance and satisfaction.",
    imageUrl: "/bvsion.png",
    imageAlt: "bVision",
    ctaLabel: "Visit Website",
    href: "https://www.boschung.com/fr/product/bvision/",
    isExternal: true,
  },
  {
    title: "Sarba",
    description:
      "Expense Management Application designed to help employees and administration to manage expenses incurred during working days.",
    imageUrl: "/sarba-mockup-1.png",
    imageAlt: "Sarba",
    ctaLabel: "View Case Study",
    href: "/projects/sarba",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-surface-container py-32" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
            Selected Works
          </h2>
          <p className="text-primary font-medium italic font-body hidden sm:block">
            Hand-picked engineering highlights
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Clean up next.config.ts**

Remove the `lh3.googleusercontent.com` remote pattern since we no longer use external images:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

- [ ] **Step 3: Verify in the browser**

Run: `npx next dev --turbopack`
Expected: Homepage shows 3 cards with local images. Clicking Ossau opens `ossau.app` in a new tab. Clicking bVision opens Boschung in a new tab. Clicking Sarba navigates to `/projects/sarba` (will 404 until Task 3).

- [ ] **Step 4: Commit**

```bash
git add app/components/home/ProjectsSection.tsx next.config.ts
git commit -m "feat: update projects with real data, images, and links"
```

---

### Task 3: Create Sarba detail page

**Files:**
- Create: `app/projects/sarba/page.tsx`

- [ ] **Step 1: Create the Sarba page**

Create `app/projects/sarba/page.tsx`:

```tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarba — Expense Management App",
  description:
    "Expense Management Application designed to help employees and administration to manage expenses incurred during working days.",
};

const userFeatures = [
  "Create expenses, attach receipts, and manage past transactions",
  "Receive notifications for pending signatures",
  "Sign monthly reports and review previous ones",
];

const adminFeatures = [
  "Generate monthly reports for all employees",
  "Request and track signature statuses",
  "Download signed reports",
  "Multi-currency expense support",
];

export default function SarbaPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-secondary hover:underline mb-12 font-body"
        >
          <span className="material-symbols-outlined text-sm mr-1">
            arrow_back
          </span>
          Back to projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface font-headline mb-6">
          Sarba
        </h1>

        {/* Description */}
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-16 font-body">
          This application simplifies expense tracking and report management for
          companies. Employees can log expenses in multiple currencies, sign
          monthly reports, and receive notifications for approvals.
          Administrators can generate reports, request signatures, and download
          finalized documents — all in a seamless, digital workflow.
        </p>

        {/* Mockup 1 */}
        <div className="mb-16">
          <Image
            src="/sarba-mockup-1.png"
            alt="Sarba application mockup showing expense management interface"
            width={1920}
            height={1080}
            className="w-full rounded-xl"
          />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              User Features
            </h2>
            <ul className="space-y-4">
              {userFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              Admin Features
            </h2>
            <ul className="space-y-4">
              {adminFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mockup 2 */}
        <div>
          <Image
            src="/sarba-mockup-2.png"
            alt="Sarba application mockup showing report management"
            width={1080}
            height={1080}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Verify in the browser**

Run: `npx next dev --turbopack`
Expected: Navigate to `/projects/sarba` — page renders with back link, title, description, mockup images, and feature lists. Nav and Footer are present (inherited from root layout). Back link navigates to homepage `#projects` section.

- [ ] **Step 3: Commit**

```bash
git add app/projects/sarba/page.tsx
git commit -m "feat: add Sarba project detail page"
```
