"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { setLocale } from "../actions/locale";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Nav");
  const [, startTransition] = useTransition();

  const navLinks = [
    { label: t("projects"), href: "/#projects" },
    { label: t("about"), href: "/#about" },
    { label: t("experience"), href: "/#experience" },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function handleLocaleChange(newLocale: string) {
    startTransition(async () => {
      await setLocale(newLocale);
      router.refresh();
    });
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link
          href="/"
          className="text-xl font-black font-headline text-stone-800"
        >
          Portfolio
        </Link>
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-headline font-bold uppercase tracking-widest text-xs transition-colors ${
                pathname === link.href
                  ? "text-secondary border-b-2 border-secondary-container pb-1"
                  : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 border-r border-stone-200 pr-6 mr-2">
            <span className="material-symbols-outlined text-stone-400 text-sm">
              language
            </span>
            <div className="flex gap-3">
              <button
                onClick={() => handleLocaleChange("en")}
                className={`font-bold uppercase tracking-widest text-[10px] transition-colors ${
                  locale === "en"
                    ? "text-stone-800"
                    : "text-stone-400 hover:text-stone-800"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange("fr")}
                className={`font-bold uppercase tracking-widest text-[10px] transition-colors ${
                  locale === "fr"
                    ? "text-stone-800"
                    : "text-stone-400 hover:text-stone-800"
                }`}
              >
                FR
              </button>
            </div>
          </div>
          <Link
            href="/contact"
            className="hidden md:inline-flex font-bold uppercase tracking-widest text-xs px-4 py-2 bg-stone-800 text-stone-50 rounded-lg hover:opacity-80 transition-opacity"
          >
            {t("contact")}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-stone-700"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-stone-100">
          <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-headline font-bold uppercase tracking-widest text-sm py-2 transition-colors ${
                  pathname === link.href
                    ? "text-secondary"
                    : "text-stone-600 hover:text-stone-800"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`font-headline font-bold uppercase tracking-widest text-sm py-2 transition-colors ${
                pathname === "/contact"
                  ? "text-secondary"
                  : "text-stone-600 hover:text-stone-800"
              }`}
            >
              {t("contact")}
            </Link>

            <div className="flex gap-4 pt-4 border-t border-stone-100">
              <button
                onClick={() => handleLocaleChange("en")}
                className={`font-bold uppercase tracking-widest text-[10px] ${
                  locale === "en" ? "text-stone-800" : "text-stone-400"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange("fr")}
                className={`font-bold uppercase tracking-widest text-[10px] ${
                  locale === "fr" ? "text-stone-800" : "text-stone-400"
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
