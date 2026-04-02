export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 mb-24 md:mb-32">
      <div className="lg:w-3/4">
        <p className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-semibold mb-4">
          Available for new opportunities
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.9] mb-8 font-headline">
          Simon Paillassa
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-xl md:text-2xl text-primary font-medium">
          <span className="flex items-center gap-2 font-headline">
            Full-stack Developer
          </span>
          <span className="hidden md:block text-outline-variant opacity-30">
            |
          </span>
          <span className="text-on-surface-variant italic font-body">
            7 years experience building intuitive applications
          </span>
        </div>
      </div>
    </section>
  );
}
