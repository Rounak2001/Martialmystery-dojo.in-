import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function Location() {
  return (
    <section id="location" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Find Us" title="Visit the Dojo" align="center" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-xl border border-line">
              <Image
                src="/media/dojo-banner.jpg"
                alt="Martial Mystery Dojo entrance signage in Indira Nagar, Lucknow"
                width={800}
                height={600}
                className="h-52 w-full object-cover"
              />
            </div>

            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-display uppercase text-paper text-xl leading-none">
                {site.brand}
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {site.address.landmark}
                <br />
                {site.address.line1}
                <br />
                {site.address.line2}
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm bg-crimson px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:bg-crimson-dim"
                >
                  Get Directions
                </a>
                <a
                  href={site.phoneHref}
                  className="rounded-sm border border-line px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  Call {site.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="h-full min-h-[360px] overflow-hidden rounded-xl border border-line">
              <iframe
                title="Martial Mystery Dojo location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  site.mapsQuery
                )}&output=embed`}
                className="h-full w-full min-h-[360px] grayscale invert-[0.92] contrast-[0.9]"
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
