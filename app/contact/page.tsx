import type { Metadata } from "next";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact — Simon Paillassa",
  description:
    "Get in touch with Simon Paillassa. Available for selected freelance opportunities and collaborative inquiries.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <header className="mb-20 text-center md:text-left">
        <h1 className="font-headline font-black text-6xl md:text-8xl text-on-background tracking-tighter mb-4">
          Get in Touch
        </h1>
        <p className="font-body text-lg text-tertiary max-w-2xl leading-relaxed">
          Currently based in Lisbon, Portugal. Available for selected freelance
          opportunities and collaborative architectural inquiries.
        </p>
      </header>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  );
}
