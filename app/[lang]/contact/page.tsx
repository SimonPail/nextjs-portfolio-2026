import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      <header className="mb-20 text-center md:text-left">
        <h1 className="font-headline font-black text-6xl md:text-8xl text-on-background tracking-tighter mb-4">
          {t("heading")}
        </h1>
        <p className="font-body text-lg text-tertiary max-w-2xl leading-relaxed">
          {t("description")}
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}
