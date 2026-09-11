import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="bg-ink py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Find Us" title="Visit the Dojo" align="center" />
          <p className="mt-3 text-center text-sm sm:text-base text-muted max-w-xl mx-auto">
            Centrally located in Indira Nagar, Lucknow inside the secure New ABC Montessori School campus with dedicated matted training floors.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5 items-stretch">
          <Reveal className="lg:col-span-2 flex flex-col gap-5">
            <div className="relative overflow-hidden rounded-2xl border border-line">
              <Image
                src="/media/dojo-banner.jpg"
                alt="Martial Mystery Dojo entrance signage in Indira Nagar, Lucknow"
                width={800}
                height={600}
                className="h-48 sm:h-56 w-full object-cover"
              />
              <div className="absolute top-3 left-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-line">
                📍 Indira Nagar, Sector 9
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-line bg-surface p-6">
              <div>
                <p className="font-display uppercase text-paper text-2xl leading-none">
                  {site.brand}
                </p>
                <p className="mt-3 text-sm text-paper/85 leading-relaxed">
                  <strong className="text-gold font-medium">{site.address.landmark}</strong>
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>

                {/* Batch Hours Info */}
                <div className="mt-4 rounded-xl border border-line/60 bg-ink/50 p-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-gold">Training Days</span>
                    <span className="text-paper/90 font-medium">Mon — Sat</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-muted">
                    <span>Morning &amp; Evening Batches</span>
                    <span className="text-gold">Trial by Booking</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-crimson px-5 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-paper transition-all hover:bg-crimson-dim active:scale-95 shadow-lg shadow-crimson/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Open in Google Maps
                </a>
                <a
                  href={site.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg border border-line bg-surface-2 px-5 py-3 text-center text-xs sm:text-sm font-bold uppercase tracking-wider text-paper transition-all hover:border-gold hover:text-gold active:scale-95"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.66.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.58 3.66 1 1 0 01-.24 1.02l-2.22 2.11z" />
                  </svg>
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="h-full min-h-[340px] sm:min-h-[420px] overflow-hidden rounded-2xl border border-line relative shadow-xl">
              <iframe
                title="Martial Mystery Dojo location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapsQuery
                )}&output=embed`}
                className="h-full w-full min-h-[340px] sm:min-h-[420px] grayscale invert-[0.92] contrast-[0.9] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
