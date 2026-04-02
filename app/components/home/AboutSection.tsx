import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("About");

  return (
    <section className="bg-surface-container-low py-24" id="about">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold tracking-tight text-on-surface font-headline">
            {t("heading")}
          </h2>
        </div>
        <div className="md:w-2/3">
          <p className="text-xl leading-relaxed text-on-surface-variant font-body">
            {t("bio")}
          </p>
        </div>
      </div>
    </section>
  );
}
