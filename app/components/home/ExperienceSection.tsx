import ExperienceItem from "./ExperienceItem";

const jobs = [
  {
    title: "Co-founder & Lead Developer",
    company: "Ossau App",
    period: "2021 — Present",
    description:
      "Architected and launched a comprehensive ecosystem for local commerce. Leading technical strategy, managing cross-functional teams, and implementing scalable cloud infrastructure.",
    tags: ["React Native", "Node.js", "AWS", "TypeScript"],
    isCurrent: true,
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    period: "2019 — 2021",
    description:
      "Delivered high-end digital solutions for international clients. Focused on performance optimization, SEO strategy, and custom e-commerce integrations using headless architectures.",
    tags: ["Next.js", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Full-Stack Developer",
    company: "ITAF.TECH",
    period: "2017 — 2019",
    description:
      "Core developer for enterprise-level ERP systems. Contributed to the migration of legacy monoliths to modern microservices architectures.",
    tags: ["React", "Express", "MongoDB"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-32" id="experience">
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
