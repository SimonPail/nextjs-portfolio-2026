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
            Specializing in the intersection of design-centric engineering and
            robust back-end systems. With over seven years of professional
            journey, I have evolved from a focused coder to a technical leader.
            My approach is rooted in the philosophy that software should be as
            aesthetically pleasing as it is performant. I focus on creating
            scalable architectures and intuitive user experiences for startups
            and established tech firms alike.
          </p>
        </div>
      </div>
    </section>
  );
}
