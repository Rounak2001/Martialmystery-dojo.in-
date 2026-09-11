"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, waLink } from "@/lib/site";

const programs = ["Taekwondo", "Weapon Training", "Self-Defense", "Kids Classes", "Not sure yet"];

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState(programs[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `New enquiry — ${site.brand}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${program}`,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="enquire" className="relative bg-ink py-20 sm:py-28 overflow-hidden">
      <div className="absolute -bottom-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Get Started"
            title="Book Your Free Trial"
            align="center"
          />
          <p className="mt-5 text-center text-base sm:text-lg text-muted max-w-xl mx-auto">
            Fill this in and it opens WhatsApp with your details ready to send straight to{" "}
            {site.instructor}. No spam, just a quick reply about class timings.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-4 sm:gap-5 rounded-2xl border border-line bg-surface p-5 sm:p-9 shadow-xl"
          >
            <Field label="Full Name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                autoComplete="name"
                placeholder="Student / Parent name"
                className="input"
              />
            </Field>

            <Field label="Phone Number">
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                pattern="[0-9+\s-]{7,15}"
                className="input"
              />
            </Field>

            <Field label="Interested In" className="sm:col-span-2">
              <select
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                className="input cursor-pointer"
              >
                {programs.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message or Questions (optional)" className="sm:col-span-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                placeholder="Student age, preferred morning or evening batch, prior experience..."
                className="input resize-none"
              />
            </Field>

            <button
              type="submit"
              className="sm:col-span-2 mt-2 flex items-center justify-center gap-2.5 rounded-lg bg-crimson px-7 py-4 text-sm font-bold uppercase tracking-wider text-paper shadow-lg shadow-crimson/30 transition-all hover:bg-crimson-dim active:scale-[0.98]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z" />
              </svg>
              Send Enquiry via WhatsApp
            </button>

            {sent && (
              <div className="sm:col-span-2 rounded-lg border border-gold/40 bg-gold/10 p-3 text-center text-xs sm:text-sm text-gold">
                WhatsApp is opening with your details — hit send in WhatsApp to reach {site.instructor} immediately.
              </div>
            )}

            <p className="sm:col-span-2 text-center text-xs text-muted pt-1">
              Prefer to talk on the phone?{" "}
              <a href={site.phoneHref} className="text-paper font-semibold underline underline-offset-2 hover:text-gold">
                Call {site.phoneDisplay}
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}
