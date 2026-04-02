export default function AboutSection() {
  return (
    <section className="bg-surface-container-low py-24" id="about">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
            About Me
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl leading-relaxed text-on-surface-variant font-body">
            Full-stack developer with 7 years of experience building web and
            mobile applications. I work mainly with React, Next.js, NestJS and
            TypeScript. I&apos;m comfortable taking a project from architecture
            to deployment. Outside of client work, I co-founded Ossau, a mobile
            app for the hiking community, built from scratch and now used by
            2,000+ people.
          </p>
        </div>
      </div>
    </section>
  );
}
