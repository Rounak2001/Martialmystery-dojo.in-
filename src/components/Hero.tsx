import Image from "next/image";
import { site, waLink } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-crimson/20 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Indira Nagar, Lucknow
          </div>

          <h1 className="mt-6 font-display uppercase leading-[0.92] text-paper text-5xl sm:text-6xl md:text-7xl">
            Discipline.
            <br />
            Defense.
            <br />
            <span className="text-crimson">Mastery.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted">
            Taekwondo, self-defense &amp; traditional weapon training under{" "}
            <span className="text-paper font-semibold">{site.instructor}</span> at{" "}
            {site.brand} — Lucknow&rsquo;s home for serious martial artists, from first-timers to
            competition belts.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
            <a
              href="#enquire"
              className="rounded-sm bg-crimson px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-paper shadow-[0_10px_30px_-8px_rgba(225,29,46,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Book a Free Trial Class
            </a>
            <a
              href={waLink("Hi Harshit! I'd like to book a free trial class.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm border border-line bg-surface px-7 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-paper transition-colors hover:border-gold hover:text-gold"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm uppercase tracking-wide text-muted">
            <span className="flex items-center gap-2">
              <DotIcon /> Kids &amp; Adults
            </span>
            <span className="flex items-center gap-2">
              <DotIcon /> LDTA / UPTA Affiliated
            </span>
            <span className="flex items-center gap-2">
              <DotIcon /> Traditional Weapon Training
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-2xl border border-line/80" />
          <div className="relative overflow-hidden rounded-xl border border-line shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]">
            <Image
              src="/media/hero-group.jpg"
              alt={`${site.instructor} with Taekwondo students at ${site.brand}, Lucknow`}
              width={1000}
              height={1050}
              priority
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/40 to-transparent p-6">
              <p className="font-display uppercase text-paper text-xl leading-none">
                {site.instructor}
              </p>
              <p className="text-xs uppercase tracking-wider text-gold mt-1">
                Lead Instructor &amp; Founder
              </p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 hidden sm:block rounded-lg border border-line bg-surface px-5 py-4 shadow-xl">
            <p className="font-display text-3xl text-gold leading-none">TKD</p>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
              + Weapon Forms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DotIcon() {
  return <span className="h-1 w-1 rounded-full bg-crimson" />;
}
