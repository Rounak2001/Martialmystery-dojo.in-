"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Action Reels" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery & Medals" },
  { href: "#location", label: "Location" },
  { href: "#enquire", label: "Book Free Trial" },
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <header
      className={`fixed z-50 transition-colors duration-200 ${
        open
          ? "inset-0 h-[100dvh] w-full bg-[#0a0a0c] flex flex-col overflow-hidden"
          : `inset-x-0 top-0 ${
              scrolled
                ? "bg-[#0a0a0c]/95 backdrop-blur-md border-b border-line shadow-lg"
                : "bg-gradient-to-b from-[#0a0a0c]/95 via-[#0a0a0c]/70 to-transparent"
            }`
      }`}
    >
      {/* Top Navbar Row */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 shrink-0 border-b border-line/40">
        <a
          href="#top"
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-gold/40 transition-transform group-hover:scale-105">
            <Image
              src="/media/logo.png"
              alt={`${site.brand} logo`}
              width={36}
              height={36}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl uppercase tracking-wide text-paper leading-none">
              Martial Mystery <span className="text-gold">Dojo</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-muted sm:hidden">
              Lucknow • Taekwondo
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-paper hover:text-gold transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="text-xs font-semibold uppercase tracking-wider text-paper hover:text-gold transition-colors flex items-center gap-1.5 py-2 px-3 rounded-lg border border-line/60 bg-surface/50"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1.02l-2.22 2.11z" />
            </svg>
            {site.phoneDisplay}
          </a>
          <a
            href="#enquire"
            className="rounded-lg bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-paper transition-all hover:bg-crimson-dim hover:shadow-[0_0_15px_rgba(225,29,46,0.5)] active:scale-95"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile Header Quick Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          {!open && (
            <a
              href={site.phoneHref}
              aria-label={`Call ${site.phoneDisplay}`}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-gold transition-colors active:bg-surface-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1.02l-2.22 2.11z" />
              </svg>
            </a>
          )}

          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-paper focus:outline-none active:bg-surface-2"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path
                  d="M1 2H19M1 8H19M1 14H19"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Solid Mobile Menu */}
      {open && (
        <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between bg-[#0a0a0c] lg:hidden">
          <div className="flex flex-col gap-1">
            {/* Instructor badge */}
            <div className="mb-4 flex items-center justify-between rounded-xl border border-line bg-surface px-4 py-3">
              <span className="text-xs uppercase font-semibold text-muted tracking-wider">
                Head Coach &amp; Founder
              </span>
              <span className="text-xs uppercase font-bold text-gold tracking-wider">
                {site.instructor}
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold uppercase tracking-wider text-paper hover:bg-surface hover:text-gold transition-colors active:bg-surface-2"
                >
                  <span>{l.label}</span>
                  <span className="text-gold text-lg">›</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick contact and trial booking */}
          <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={site.phoneHref}
                className="flex items-center justify-center gap-2 rounded-xl border border-line bg-surface py-3.5 text-xs font-bold uppercase tracking-wider text-paper active:bg-surface-2"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1.02l-2.22 2.11z" />
                </svg>
                Call Dojo
              </a>
              <a
                href={waLink("Hi Utkarsh! I want to enquire about classes at Martial Mystery Dojo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 bg-[#25D366]/15 py-3.5 text-xs font-bold uppercase tracking-wider text-[#25D366] active:bg-[#25D366]/25"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z" />
                </svg>
                WhatsApp
              </a>
            </div>

            <a
              href="#enquire"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-crimson py-4 text-center text-sm font-bold uppercase tracking-wider text-paper shadow-lg shadow-crimson/30 active:scale-[0.98] transition-transform"
            >
              Book Free Trial Class
            </a>

            <p className="text-center text-[11px] text-muted">
              📍 {site.address.landmark}, Sector 9, Indira Nagar, Lucknow
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
