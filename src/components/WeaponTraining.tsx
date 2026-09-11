"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { waLink } from "@/lib/site";

interface Reel {
  id: string;
  title: string;
  tag: string;
  src: string;
  poster: string;
  desc: string;
}

const reels: Reel[] = [
  {
    id: "kicks",
    title: "Acrobatic Kicks & Flips",
    tag: "Dojo Acrobatics",
    src: "/media/kicks-acrobatics.mp4",
    poster: "/media/poster-kicks.jpg",
    desc: "540 kicks, high aerial maneuvers and gymnastics on safety mats.",
  },
  {
    id: "sword",
    title: "Katana & Sword Mastery",
    tag: "Traditional Katana",
    src: "/media/sword-katana-coastal.mp4",
    poster: "/media/poster-sword.jpg",
    desc: "Precision sword kata and balance inspired by warrior heritage.",
  },
  {
    id: "defense",
    title: "Real Combat Self-Defense",
    tag: "Street Defense",
    src: "/media/self-defense-sparring.mp4",
    poster: "/media/poster-defense.jpg",
    desc: "Knife disarms, close-quarters control, and practical reaction drills.",
  },
  {
    id: "dojo-weapon",
    title: "Dojo Staff & Weapon Forms",
    tag: "Staff & Bow",
    src: "/media/weapon-training.mp4",
    poster: "/media/weapon-poster.jpg",
    desc: "Traditional wooden staff, bow and nunchaku work on matted training floors.",
  },
  {
    id: "mindset",
    title: "Warrior Mindset Coaching",
    tag: "Mental Discipline",
    src: "/media/warrior-mindset.mp4",
    poster: "/media/poster-mindset.jpg",
    desc: "Mindset before muscle — mental fortitude, discipline, and poise.",
  },
];

export default function WeaponTraining() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const activeReel = reels[activeIdx];

  const handleSelectReel = (idx: number) => {
    setActiveIdx(idx);
    setIsPlaying(false);
    if (mainVideoRef.current) {
      mainVideoRef.current.pause();
      mainVideoRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (!mainVideoRef.current) return;
    if (isPlaying) {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      mainVideoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="training" className="relative bg-surface py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-crimson/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[350px] w-[400px] rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <SectionHeading
                eyebrow="Training in Motion"
                title="Action Reels & Weapon Training"
              />
              <p className="mt-3 text-sm sm:text-base text-muted max-w-xl">
                Experience the raw intensity, agility, and precision inside and outside the dojo.
                Explore traditional weapon forms, high-flying kicks, and street self-defense.
              </p>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-muted">
                {activeIdx + 1} / {reels.length} Reels
              </span>
            </div>
          </div>
        </Reveal>

        {/* Featured Video Player + Details Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Main Reel Frame (Mobile & Desktop) */}
          <Reveal className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Phone-like bezel styling */}
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-line bg-ink shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] group">
                <video
                  ref={mainVideoRef}
                  key={activeReel.src}
                  src={activeReel.src}
                  poster={activeReel.poster}
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="aspect-[9/16] w-full bg-ink object-cover"
                />

                {/* Big play button overlay when paused */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={`Play ${activeReel.title}`}
                    className="absolute inset-0 grid place-items-center bg-black/30 backdrop-blur-[2px] transition-all group-hover:bg-black/40"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-crimson text-paper shadow-2xl transition-transform group-hover:scale-110 active:scale-95">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </button>
                )}

                {/* Top Badge */}
                <div className="pointer-events-none absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-line">
                    {activeReel.tag}
                  </span>
                  <span className="rounded-full bg-crimson/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-paper backdrop-blur-md">
                    HD
                  </span>
                </div>
              </div>

              {/* Status pill beneath */}
              <div className="mt-3 flex items-center justify-between px-2">
                <p className="text-xs font-semibold text-paper truncate">
                  {activeReel.title}
                </p>
                <span className="text-[11px] text-gold uppercase tracking-wider font-mono">
                  Martial Mystery
                </span>
              </div>
            </div>
          </Reveal>

          {/* Reel Selector and Curriculum Highlights */}
          <Reveal delay={100} className="lg:col-span-7 flex flex-col justify-center">
            {/* Horizontal reel picker (Snap swipeable on mobile) */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gold mb-3 flex items-center gap-2">
                <span>⚡</span> Tap to Watch Dojo Clips
              </p>

              <div className="flex gap-3 overflow-x-auto pb-3 pt-1 no-scrollbar snap-x snap-mandatory">
                {reels.map((reel, i) => {
                  const isSelected = i === activeIdx;
                  return (
                    <button
                      key={reel.id}
                      type="button"
                      onClick={() => handleSelectReel(i)}
                      className={`relative flex-shrink-0 w-36 sm:w-40 rounded-xl border text-left overflow-hidden transition-all snap-start p-2 ${
                        isSelected
                          ? "border-crimson bg-ink ring-2 ring-crimson/50 shadow-lg"
                          : "border-line bg-surface-2/60 hover:border-gold/60 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <div className="relative aspect-[9/12] w-full rounded-lg overflow-hidden bg-ink">
                        <Image
                          src={reel.poster}
                          alt={reel.title}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                        <div className="absolute bottom-1.5 left-1.5 right-1.5">
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-gold leading-none truncate">
                            {reel.tag}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 grid h-5 w-5 place-items-center rounded-full bg-crimson text-[10px] text-paper">
                            ▶
                          </div>
                        )}
                      </div>
                      <p className="mt-2 text-xs font-semibold text-paper line-clamp-1 leading-tight">
                        {reel.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Reel Information Box */}
            <div className="mt-6 rounded-xl border border-line bg-ink/70 p-5 sm:p-6 backdrop-blur-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold">
                Featured Program Insight
              </span>
              <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-paper">
                {activeReel.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {activeReel.desc}
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-line/60">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-crimson shrink-0" />
                  <span className="text-xs text-paper/90">
                    Progressive weapon kata (bo staff, katana &amp; bow)
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-crimson shrink-0" />
                  <span className="text-xs text-paper/90">
                    High-impact kicking precision &amp; safety-matted acrobatics
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-crimson shrink-0" />
                  <span className="text-xs text-paper/90">
                    Realistic street self-defense &amp; knife disarms
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-crimson shrink-0" />
                  <span className="text-xs text-paper/90">
                    All levels coached directly by Utkarsh Tiwari
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#enquire"
                  className="rounded-lg bg-crimson px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-paper hover:bg-crimson-dim active:scale-95 transition-all"
                >
                  Join Weapon Classes
                </a>
                <a
                  href={waLink(`Hi Utkarsh! I watched the ${activeReel.title} video and want to learn this at Martial Mystery Dojo.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-paper hover:border-gold hover:text-gold transition-colors"
                >
                  Ask on WhatsApp →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
