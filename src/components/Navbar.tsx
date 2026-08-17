"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Training" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#enquire", label: "Enquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/media/logo.png"
            alt={`${site.brand} logo`}
            width={480}
            height={439}
            priority
            className="h-9 w-auto"
          />
          <span className="font-display text-lg sm:text-xl uppercase tracking-wide text-paper leading-none">
            Martial Mystery <span className="text-gold">Dojo</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-wide text-muted hover:text-paper transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-paper hover:text-gold transition-colors"
          >
            {site.phoneDisplay}
          </a>
          <a
            href="#enquire"
            className="rounded-sm bg-crimson px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-crimson-dim"
          >
            Free Trial
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid h-10 w-10 place-items-center text-paper"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path
              d={open ? "M1 1L21 15M21 1L1 15" : "M0 1H22M0 8H22M0 15H22"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-line bg-ink px-5 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium uppercase tracking-wide text-muted hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-line">
            <a href={site.phoneHref} className="text-sm font-semibold text-paper">
              {site.phoneDisplay}
            </a>
          </div>
          <a
            href="#enquire"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-sm bg-crimson px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-paper"
          >
            Book Free Trial
          </a>
        </div>
      )}
    </header>
  );
}
