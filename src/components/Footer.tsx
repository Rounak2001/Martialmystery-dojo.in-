import Image from "next/image";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#training", label: "Weapon Training" },
  { href: "#programs", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#enquire", label: "Enquire" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/media/logo.png"
              alt={`${site.brand} logo`}
              width={480}
              height={439}
              className="h-9 w-auto"
            />
            <span className="font-display text-lg uppercase tracking-wide text-paper leading-none">
              Martial Mystery <span className="text-gold">Dojo</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
            Taekwondo, self-defense &amp; traditional weapon training in {site.city}, led by{" "}
            {site.instructor}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Quick Links
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-paper/80 hover:text-crimson transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Get In Touch
          </p>
          <div className="mt-4 space-y-2 text-sm text-paper/80">
            <a href={site.phoneHref} className="block hover:text-crimson transition-colors">
              {site.phoneDisplay}
            </a>
            <p className="leading-relaxed text-paper/70">
              {site.address.landmark}
              <br />
              {site.address.line1}, {site.address.line2}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-6">
        <p className="text-center text-xs text-muted px-5">
          © {new Date().getFullYear()} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
