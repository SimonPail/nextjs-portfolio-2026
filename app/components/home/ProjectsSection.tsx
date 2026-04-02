import { getTranslations } from "next-intl/server";
import ProjectCard from "./ProjectCard";

export default async function ProjectsSection() {
  const t = await getTranslations("Projects");

  const projects = [
    {
      title: t("ossauTitle"),
      description: t("ossauDescription"),
      imageUrl: "/ossau.png",
      imageAlt: "Ossau App",
      ctaLabel: t("ossauCta"),
      href: "https://ossau.app/",
      isExternal: true,
      imageBg: "#F8F8FE",
    },
    {
      title: t("bvisionTitle"),
      description: t("bvisionDescription"),
      imageUrl: "/bvsion.png",
      imageAlt: "bVision",
      ctaLabel: t("bvisionCta"),
      href: "https://www.boschung.com/fr/product/bvision/",
      isExternal: true,
    },
    {
      title: t("sarbaTitle"),
      description: t("sarbaDescription"),
      imageUrl: "/sarba-mockup-1.png",
      imageAlt: "Sarba",
      ctaLabel: t("sarbaCta"),
      href: "/projects/sarba",
      imageBg: "#F8F8FE",
    },
  ];

  return (
    <section className="bg-surface-container py-32" id="projects">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
            {t("heading")}
          </h2>
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
