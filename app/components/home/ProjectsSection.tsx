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
