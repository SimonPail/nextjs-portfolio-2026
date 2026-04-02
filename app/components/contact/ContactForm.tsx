export default function ContactForm() {
  return (
    <section className="lg:col-span-7">
      <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project Inquiry / General Question"
              className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none font-body"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label text-[10px] uppercase tracking-[0.2em] font-bold text-outline">
              Message
            </label>
            <textarea
              placeholder="Briefly describe your vision..."
              rows={4}
              className="bg-transparent border-b border-outline-variant focus:border-secondary py-3 transition-colors placeholder:text-neutral-400 outline-none resize-none font-body"
            />
          </div>
          <div className="pt-6">
            <button
              type="submit"
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg font-headline font-extrabold uppercase tracking-widest text-xs hover:brightness-95 transition-all flex items-center gap-3"
            >
              Send Message
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
