"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black font-headline text-stone-800"
        >
          Portfolio
        </Link>

        {/* Desktop nav links — centered */}
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

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          {/* Language switcher — desktop only */}
          <div className="hidden lg:flex items-center gap-4 border-r border-stone-200 pr-6 mr-2">
            <span className="material-symbols-outlined text-stone-400 text-sm">
              language
            </span>
            <div className="flex gap-3">
              <button className="font-bold uppercase tracking-widest text-[10px] text-stone-800">
                EN
              </button>
              <button className="font-bold uppercase tracking-widest text-[10px] text-stone-400 hover:text-stone-800 transition-colors">
                FR
              </button>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex font-bold uppercase tracking-widest text-xs px-4 py-2 bg-stone-800 text-stone-50 rounded-lg hover:opacity-80 transition-opacity"
          >
            Contact
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-stone-700"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
            <div className="flex gap-4 pt-4 border-t border-stone-100">
              <button className="font-bold uppercase tracking-widest text-[10px] text-stone-800">
                EN
              </button>
              <button className="font-bold uppercase tracking-widest text-[10px] text-stone-400">
                FR
              </button>
              <button className="font-bold uppercase tracking-widest text-[10px] text-stone-400">
                PT
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
