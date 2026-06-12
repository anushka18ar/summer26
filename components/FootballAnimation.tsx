"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const BRAND = "OUTCEEDO";

export default function FootballAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLDivElement>(null);
  const headline2Ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stageRef.current) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.set(stageRef.current, { clipPath: "inset(0% 0% 0% 0% round 0px)" });

      // ── Entrance (plays once on load) ──
      if (!reduceMotion) {
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .from(".fa-letter", { yPercent: 110, opacity: 0, stagger: 0.055, duration: 0.9 }, 0.2)
          .fromTo(lineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power3.inOut" }, 0.7)
          .from(taglineRef.current, { y: 24, opacity: 0, duration: 0.7 }, 0.95)
          .from(hintRef.current, { opacity: 0, duration: 0.6 }, 1.2)
          .from(imgWrapRef.current, { scale: 1.35, duration: 1.6, ease: "power2.out" }, 0);
      }

      // ── Scroll-driven sequence ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      // Slow Ken Burns drift across the whole scroll
      tl.fromTo(
        imgWrapRef.current,
        { scale: 1.18, yPercent: 0 },
        { scale: 1.0, yPercent: -3, ease: "none", duration: 1 },
        0,
      );

      // Scroll hint fades as soon as the user moves
      tl.to(hintRef.current, { opacity: 0, duration: 0.06 }, 0.04);

      // Act 1 → 2: brand block lifts away, second line takes the stage
      tl.to(headline1Ref.current, { yPercent: -90, opacity: 0, ease: "power1.in", duration: 0.22 }, 0.16)
        .fromTo(
          headline2Ref.current,
          { opacity: 0, yPercent: 50 },
          { opacity: 1, yPercent: 0, ease: "power2.out", duration: 0.2 },
          0.34,
        )
        .to(glowRef.current, { opacity: 1, duration: 0.2 }, 0.34)
        .to(headline2Ref.current, { opacity: 0, yPercent: -50, ease: "power1.in", duration: 0.16 }, 0.6);

      // Act 3: the photo clips into a rounded frame, handing off to the white hero
      tl.to(
        stageRef.current,
        { clipPath: "inset(8% 5% 8% 5% round 32px)", ease: "power2.inOut", duration: 0.28 },
        0.7,
      ).to(glowRef.current, { opacity: 0, duration: 0.2 }, 0.78);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    /* 280vh of scroll space; the stage stays pinned for its duration */
    <div ref={containerRef} className="relative" style={{ height: "280vh", background: "#0a0a0b" }}>
      <div
        ref={stageRef}
        className="sticky top-0 h-screen overflow-hidden bg-[#050505] flex items-center justify-center"
      >
        {/* Stadium photo — Ken Burns layer */}
        <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/football.png"
            alt="Footballer with his boot on the ball under stadium floodlights"
            fill
            sizes="100vw"
            className="object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Cinematic grade: darken edges, keep the boot-on-ball readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, transparent 35%, rgba(0,0,0,0.55) 100%)" }}
        />

        {/* Brand-red glow that breathes in during act 2 */}
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none opacity-0"
          style={{ background: "radial-gradient(ellipse at 50% 80%, rgba(239,68,68,0.28) 0%, transparent 55%)" }}
        />

        {/* Act 1 — brand reveal */}
        <div ref={headline1Ref} className="relative z-10 text-center px-4">
          <div
            className="font-display font-black uppercase text-white leading-none overflow-hidden"
            style={{ fontSize: "clamp(64px, 13vw, 180px)", letterSpacing: "0.02em" }}
          >
            {BRAND.split("").map((letter, i) => (
              <span key={i} className="fa-letter inline-block">
                {letter}
              </span>
            ))}
          </div>
          <div ref={lineRef} className="h-[3px] w-40 sm:w-64 mx-auto mt-5 bg-primary origin-left" />
          <p
            ref={taglineRef}
            className="mt-6 text-white/80 text-sm sm:text-base font-bold uppercase tracking-[0.35em]"
          >
            Outdo Your Sport to Succeed
          </p>
        </div>

        {/* Act 2 — second line */}
        <div
          ref={headline2Ref}
          className="absolute z-10 text-center px-4 opacity-0"
        >
          <h2
            className="font-display font-black uppercase text-white leading-[0.9]"
            style={{ fontSize: "clamp(48px, 9vw, 130px)" }}
          >
            EVERY LEGEND
            <br />
            <span className="text-primary italic">STARTS HERE.</span>
          </h2>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/70"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="block w-px h-10 bg-white/40 overflow-hidden relative">
            <span className="absolute inset-x-0 top-0 h-4 bg-primary animate-[fa-drop_1.6s_ease-in-out_infinite]" />
          </span>
        </div>

        {/* Scroll progress — thin red line along the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10 z-20">
          <div
            ref={progressBarRef}
            className="h-full w-0 bg-gradient-to-r from-primary to-red-700"
          />
        </div>
      </div>

      <style>{`
        @keyframes fa-drop {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>
    </div>
  );
}
