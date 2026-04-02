import { getTranslations } from "next-intl/server";
import ExperienceItem from "./ExperienceItem";

export default async function ExperienceSection() {
  const t = await getTranslations("Experience");

  const jobs = [
    {
      title: t("ossauTitle"),
      company: t("ossauCompany"),
      period: t("ossauPeriod"),
      description: t("ossauDescription"),
      tags: ["React Native", "Expo", "NestJS", "PostgreSQL", "N8N", "Socket.IO"],
      isCurrent: true,
    },
    {
      title: t("freelanceTitle"),
      company: t("freelanceCompany"),
      period: t("freelancePeriod"),
      description: t("freelanceDescription"),
      tags: ["React.js", "Next.js", "TypeScript", "NestJS", "Git CI/CD", "VPS"],
      isCurrent: true,
    },
    {
      title: t("itafTitle"),
      company: t("itafCompany"),
      period: t("itafPeriod"),
      description: t("itafDescription"),
      tags: ["Vue.js", "JavaScript", "Express.js", "Node.js", "MongoDB", "Git"],
    },
    {
      title: t("addeoTitle"),
      company: t("addeoCompany"),
      period: t("addeoPeriod"),
      description: t("addeoDescription"),
      tags: ["Vue.js", "JavaScript", "CakePHP", "PHP", "MySQL", "Git"],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32" id="experience">
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
          {t("heading")}
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold text-sm uppercase tracking-widest hover:brightness-95 transition-all font-headline"
        >
          <span className="material-symbols-outlined text-lg">download</span>
          {t("downloadResume")}
        </a>
      </div>
      <div className="space-y-24 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-outline-variant opacity-20 ml-[7px] hidden md:block" />
        {jobs.map((job) => (
          <ExperienceItem key={job.period} {...job} />
        ))}
      </div>
    </section>
  );
}
