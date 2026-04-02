import ExperienceItem from "./ExperienceItem";

const jobs = [
  {
    title: "Co-founder & Lead Developer",
    company: "Ossau App",
    period: "2025 — Present",
    description:
      "Co-founded Ossau, a mobile app for the Pyrénées hiking community with 2,000+ active users. Sole developer working alongside a product co-founder and a UX designer. Built the full stack from scratch: NestJS backend on VPS, PostgreSQL via Neon, Expo/React Native frontend. Core features include trail maps, group social features, real-time notifications, and deep linking for iOS & Android.",
    tags: ["React Native", "Expo", "NestJS", "PostgreSQL", "N8N", "Socket.IO"],
    isCurrent: true,
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Independent · Remote",
    period: "2023 — Present",
    description:
      "Working independently with European clients on varied projects from internal tooling to enterprise applications. STEF (2024–present): Built a React/Next.js monorepo framework as the technical foundation for all internal web apps, shared component library, RBAC authorization. Boschung (2024): Frontend development on Boschung Web. Extia (2023–2024): React/PWA interfaces, REST APIs, VPS infrastructure, CI/CD with GitHub Actions.",
    tags: ["React.js", "Next.js", "TypeScript", "NestJS", "Git CI/CD", "VPS"],
    isCurrent: true,
  },
  {
    title: "Full-Stack Developer",
    company: "ITAF.TECH · Bordeaux, France",
    period: "2022 — 2023",
    description:
      "Full-stack developer on a healthcare ERP serving 70,000+ patients. Feature development and integration across the application, multi-tenant architecture to support multiple international client deployments, i18n implementation, and architectural refactoring with test automation.",
    tags: ["Vue.js", "JavaScript", "Express.js", "Node.js", "MongoDB", "Git"],
  },
  {
    title: "Full-Stack Developer",
    company: "Addeo · Bordeaux, France",
    period: "2019 — 2021",
    description:
      "Full-stack developer in an e-learning agency, working on a SaaS career development platform. Rewrote the legacy codebase with clean architecture principles, performance optimization and unit testing. Close collaboration with the design team on feature feasibility.",
    tags: ["Vue.js", "JavaScript", "CakePHP", "PHP", "MySQL", "Git"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32" id="experience">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
          Professional Journey
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm uppercase tracking-widest hover:brightness-95 transition-all font-headline"
        >
          <span className="material-symbols-outlined text-lg">download</span>
          Download Resume
        </a>
      </div>
      <div className="space-y-24 relative">
        {/* Vertical timeline guide */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant opacity-20 ml-[7px] hidden md:block" />
        {jobs.map((job) => (
          <ExperienceItem key={job.period} {...job} />
        ))}
      </div>
    </section>
  );
}
