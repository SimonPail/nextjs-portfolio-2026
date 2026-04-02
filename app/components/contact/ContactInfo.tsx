import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function ContactInfo() {
  const t = await getTranslations("ContactInfo");

  return (
    <aside className="lg:col-span-5 space-y-12">
      <div className="space-y-10">
        <div>
          <h3 className="font-headline font-extrabold text-2xl mb-4">
            {t("directContact")}
          </h3>
          <div className="space-y-4">
            <Link
              href="mailto:simon.paillassa@gmail.com"
              className="group flex items-center gap-4 text-tertiary hover:text-on-background transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">mail</span>
              </span>
              <span className="font-body font-medium">
                simon.paillassa@gmail.com
              </span>
            </Link>
            <Link
              href="https://linkedin.com/in/simon-paillassa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-tertiary hover:text-on-background transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">share</span>
              </span>
              <span className="font-body font-medium">
                linkedin.com/in/simon-paillassa
              </span>
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-headline font-extrabold text-2xl mb-4">
            {t("location")}
          </h3>
          <div className="flex items-center gap-4 text-tertiary">
            <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">location_on</span>
            </span>
            <div>
              <p className="font-body font-bold text-on-background">{t("city")}</p>
              <p className="font-body text-sm">{t("country")}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-headline font-extrabold text-2xl mb-4">
            {t("timezone")}
          </h3>
          <div className="flex items-center gap-4 text-tertiary">
            <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined">schedule</span>
            </span>
            <div>
              <p className="font-body font-bold text-on-background">
                {t("timezoneValue")}
              </p>
              <p className="font-body text-sm">{t("timezoneDetail")}</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
