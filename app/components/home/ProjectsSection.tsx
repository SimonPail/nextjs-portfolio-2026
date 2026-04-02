import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Ossau App",
    description:
      "A hyper-local marketplace platform connecting regional producers with urban consumers. Real-time logistics tracking and secure payment processing.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXguLbUPojPBSwhOxmHlnWfuhHKYxoYLuX3dApYWMOExM1D-NnWfURgtycs5MK5PEnyjBo0Etb64eg2Q8ojt6bX7trnR1G2lQ5PxFQJ2GACkVKTXHOSJK9PCGV9Qcmf0ui9H9glGIQyjRDPBQspAoE__-11A2WqQ6RtXTAx2RGlbj5h_m8iKcUPRE1AoOq1xx1A8tVsUHagRGImMHICgRz2P0N7taUNWHEJZxys_d7VsjfUYQwKNi68cgHdzs8-7ZPJ7tWPIB2UK4",
    imageAlt: "Ossau App",
    ctaLabel: "View Case Study",
  },
  {
    title: "Metrics Core",
    description:
      "High-performance analytics engine capable of processing millions of events per second with sub-millisecond latency. Built for enterprise scale.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzhw2eAoSjMTAhxtSpk_Tha46mqnYNyAkSMDDn87DWPNORkOIxbWp2ld1TOV1C1xu7nHi70vFyHIQ132fQmKpQRTNOvqSAkHKUAmkwd5ovO8brlBG1ZLC4V4kWNuUnw4pQsLCkrmgdiIMMu9cEoXRJFnfvvsoN5NYfBTEqdlvz7iQ-qSWEo4Wykuy6WPE35c2-97FIgoum_eYznLN8yE3_-QReyE2GBWPYehqQlTrOEXdNj_njN4zvr352aDGlKfc-4m4sY6bjPeI",
    imageAlt: "Metrics Core",
    ctaLabel: "View Technical Docs",
  },
  {
    title: "OmniCommerce",
    description:
      "A headless e-commerce framework designed for ultra-fast performance and SEO dominance. Modular components for extreme flexibility.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBlotykcMgMeAvXEzu_YLtMmF_WptHwcnyl2HGw5737BEOm1TA7Iua7bIHoEE4hgWKGfZdheYUoVH2Wn1gCE4g874iKrb6GrAKwRIvNVeEpnAnLH6lps8dpj4metmyZMnwFtaELLV-OHdYkuZ8L1BNF_j5CctkxRM1VXNJHMTzQE1jXDc0j7ZBVLOtaQILREjgyI709IcLV-3AHCvUOT1cUZfqK3TS_DDQ45eYRZqGH20fM7G5GSHFMMQRFfEspYlMeAtC8QOqiY8o",
    imageAlt: "OmniCommerce",
    ctaLabel: "Explore Live Site",
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
