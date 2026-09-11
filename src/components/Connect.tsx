import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, waLink } from "@/lib/site";

const socials = [
  {
    name: "Instagram",
    href: site.social.instagram,
    icon: (
      <path d="M12 2.2c2.7 0 3 .01 4.1.06 1 .05 1.6.2 1.97.35.5.19.85.42 1.22.79.37.37.6.72.79 1.22.15.37.3.97.35 1.97.05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1-.2 1.6-.35 1.97-.19.5-.42.85-.79 1.22-.37.37-.72.6-1.22.79-.37.15-.97.3-1.97.35-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1-.05-1.6-.2-1.97-.35-.5-.19-.85-.42-1.22-.79a3.3 3.3 0 0 1-.79-1.22c-.15-.37-.3-.97-.35-1.97-.05-1.1-.06-1.4-.06-4.1s.01-3 .06-4.1c.05-1 .2-1.6.35-1.97.19-.5.42-.85.79-1.22.37-.37.72-.6 1.22-.79.37-.15.97-.3 1.97-.35 1.1-.05 1.4-.06 4.1-.06ZM12 0C9.25 0 8.9.01 7.8.06c-1.1.05-1.85.23-2.5.48a5.5 5.5 0 0 0-1.99 1.3 5.5 5.5 0 0 0-1.3 1.98c-.25.66-.43 1.4-.48 2.5C1.48 7.1 1.47 7.45 1.47 12s.01 4.9.06 6c.05 1.1.23 1.85.48 2.5.26.68.6 1.26 1.3 1.98.7.7 1.3 1.04 1.98 1.3.66.25 1.4.43 2.5.48 1.1.05 1.45.06 4.2.06s3.1-.01 4.2-.06c1.1-.05 1.85-.23 2.5-.48a5.5 5.5 0 0 0 1.99-1.3 5.5 5.5 0 0 0 1.3-1.98c.25-.66.43-1.4.48-2.5.05-1.1.06-1.45.06-6s-.01-4.9-.06-6c-.05-1.1-.23-1.85-.48-2.5a5.5 5.5 0 0 0-1.3-1.99A5.5 5.5 0 0 0 18.8.54c-.66-.25-1.4-.43-2.5-.48C15.2.01 14.85 0 12 0Zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    ),
  },
  {
    name: "YouTube",
    href: site.social.youtube,
    icon: (
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
    ),
  },
];

export default function Connect() {
  return (
    <section className="bg-surface py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
        <Reveal>
          <SectionHeading eyebrow="Stay Connected" title="Follow the Journey" align="center" />
          <p className="mt-4 text-sm sm:text-base text-muted max-w-xl mx-auto">
            Action reels, competition highlights and dojo updates — follow {site.brand} on social media or message {site.instructor} directly.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-2xl mx-auto">
            {/* Instagram Card */}
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:flex-col justify-center gap-3 rounded-2xl border border-line bg-ink p-4 sm:p-5 transition-all hover:border-[#E1306C] hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#C13584] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  {socials[0].icon}
                </svg>
              </div>
              <div className="text-left sm:text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-paper">Instagram</p>
                <p className="text-[11px] text-muted">@martialmystery</p>
              </div>
            </a>

            {/* YouTube Card */}
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:flex-col justify-center gap-3 rounded-2xl border border-line bg-ink p-4 sm:p-5 transition-all hover:border-[#FF0000] hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#FF0000] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  {socials[1].icon}
                </svg>
              </div>
              <div className="text-left sm:text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-paper">YouTube</p>
                <p className="text-[11px] text-muted">@martialmystery</p>
              </div>
            </a>

            {/* WhatsApp Direct */}
            <a
              href={waLink("Hi Utkarsh! I'd like to connect with Martial Mystery Dojo.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center sm:flex-col justify-center gap-3 rounded-2xl border border-line bg-ink p-4 sm:p-5 transition-all hover:border-[#25D366] hover:shadow-lg hover:-translate-y-1 active:scale-95"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z" />
                </svg>
              </div>
              <div className="text-left sm:text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-paper">WhatsApp</p>
                <p className="text-[11px] text-[#25D366] font-medium">Direct with Utkarsh</p>
              </div>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
