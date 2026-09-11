import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-ink py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-14 px-4 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionHeading eyebrow="Meet Your Instructor" title={site.instructor} />

          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <span>🥇</span>
            <span>Black Belt Champion &amp; Lead Coach</span>
          </div>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
            <span className="text-paper font-semibold">{site.instructor}</span> is the founder and lead instructor at {site.brand} in{" "}
            {site.city}. He trains students across all ages in Olympic Taekwondo, real-world street self-defense, and traditional weapon forms — including katana swords, wooden bo staffs, and nunchaku work.
          </p>
          <p className="mt-3.5 text-base sm:text-lg text-muted leading-relaxed">
            Affiliated with the Lucknow District Taekwondo Association (LDTA) and Uttar Pradesh Taekwondo Association (UPTA), his students regularly compete and win medals at district and state championships — developing unshakeable mental discipline, high agility, and practical defense mastery.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 max-w-md">
            {[
              ["Taekwondo", "Belt-graded curriculum", "🥋"],
              ["Weapon Forms", "Staff, Katana & Bow", "⚔️"],
              ["Self-Defense", "Practical, street-ready", "🛡️"],
              ["All Batches", "Kids (5+) to Adults", "⚡"],
            ].map(([title, desc, icon]) => (
              <div key={title} className="rounded-xl border border-line bg-surface p-3.5 sm:p-4 transition-all hover:border-gold/50">
                <span className="text-lg">{icon}</span>
                <p className="font-display uppercase text-paper text-base sm:text-lg leading-tight mt-1">
                  {title}
                </p>
                <p className="mt-1 text-xs text-muted leading-snug">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#enquire"
              className="rounded-lg bg-crimson px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-paper transition-all hover:bg-crimson-dim active:scale-95"
            >
              Train With Utkarsh
            </a>
            <a
              href={site.phoneHref}
              className="rounded-lg border border-line bg-surface px-5 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-2xl border-2 border-line bg-surface shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/media/champions-gold.jpg"
                alt={`${site.instructor} — Black Belt Gold Medalist at Martial Mystery Dojo, Lucknow`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/60 to-transparent p-5 sm:p-6">
                <span className="inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  Gold Medalist &amp; Black Belt
                </span>
                <p className="mt-2 font-display text-xl sm:text-2xl uppercase tracking-wide text-paper leading-none">
                  {site.instructor}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Founder &amp; Head Coach • Martial Mystery Dojo
                </p>
              </div>
            </div>
          </div>

          {/* Affiliation floating badge */}
          <div className="absolute -bottom-4 -right-2 sm:-right-4 rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur-md flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-crimson text-paper font-display text-base">
              TKD
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-paper leading-none">
                LDTA &amp; UPTA
              </p>
              <p className="text-[10px] uppercase tracking-wider text-gold mt-0.5">
                Recognized Affiliation
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
