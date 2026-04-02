import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("sarbaTitle"),
    description: t("sarbaDescription"),
  };
}

export default async function SarbaPage() {
  const t = await getTranslations("Sarba");

  const userFeatures = [
    t("userFeature1"),
    t("userFeature2"),
    t("userFeature3"),
  ];

  const adminFeatures = [
    t("adminFeature1"),
    t("adminFeature2"),
    t("adminFeature3"),
    t("adminFeature4"),
  ];

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-secondary hover:underline mb-12 font-body"
        >
          <span className="material-symbols-outlined text-sm mr-1">
            arrow_back
          </span>
          {t("back")}
        </Link>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-on-surface font-headline mb-6">
          {t("title")}
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-3xl mb-16 font-body">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              {t("userFeatures")}
            </h2>
            <ul className="space-y-4">
              {userFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline mb-6">
              {t("adminFeatures")}
            </h2>
            <ul className="space-y-4">
              {adminFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-on-surface-variant font-body"
                >
                  <span className="material-symbols-outlined text-secondary mt-0.5 text-lg">
                    check_circle
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image
            src="/sarba-mockup-1.png"
            alt={t("mockup1Alt")}
            width={1920}
            height={1080}
            className="w-full rounded-xl"
          />
          <Image
            src="/sarba-mockup-2.png"
            alt={t("mockup2Alt")}
            width={400}
            height={1080}
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
