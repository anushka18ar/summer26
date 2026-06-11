"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [gateReleased, setGateReleased] = useState(false);

  // ── Scroll: hero-relative progress (0→1) for the 720° scroll rotation ──
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // ── Scroll: global pixels for velocity (formula needs px/s, not 0-1) ──
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 20 });

  // ── Rotation: baseRotation (continuous) + scrollRotation (scroll-driven) ──
  const baseRotation = useMotionValue(0);
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);

  // Combine both without React re-renders (MotionValue only)
  const totalRotation = useTransform(
    [baseRotation, scrollRotation] as MotionValue<number>[],
    ([base, scroll]: number[]) => base + scroll,
  );

  useAnimationFrame((_, delta) => {
    const velocityFactor = Math.abs(smoothVelocity.get());
    const speed = Math.max(1, Math.min(5, 1 + velocityFactor * 0.01));
    baseRotation.set(baseRotation.get() + speed * (delta / 16.67));
  });

  // ── Gate: release once user has scrolled far enough for 2 full rotations ──
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      if (v >= 0.99) setGateReleased(true);
    });
  }, [scrollYProgress]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, rgba(239,68,68,0.08) 0%, transparent 60%), linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* ── Left column ── */}
          <div className="relative text-center lg:text-left">

            {/* Badge pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <span className="border border-gray-200 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-gray-500 inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                OUTDO YOUR SPORT TO SUCCEED
              </span>
            </motion.div>

            {/* H1 — three individually animated lines */}
            <h1
              className="font-display font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(44px, 6vw, 84px)", lineHeight: "0.95" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-slate-900"
              >
                FROM GRASSROOTS
              </motion.div>

              {/* Shimmer line needs its own line-height + overflow-visible so
                  background-clip: text is never cut off at the container edge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-shimmer"
                style={{ lineHeight: "1.1", paddingBottom: "0.04em" }}
              >
                TO PROFESSIONAL
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-slate-900"
              >
                FOOTBALL.
              </motion.div>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-500 leading-relaxed max-w-lg mt-6 mx-auto lg:mx-0"
            >
              The premier ecosystem connecting rising football stars with world-class coaches, scouts, and performance experts.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex gap-4 flex-wrap justify-center lg:justify-start"
            >
              <Link
                href="/signup"
                className="bg-red-500 text-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                Book an Assessment
              </Link>
              <button className="bg-white border-2 border-gray-200 rounded-full px-8 py-4 text-sm font-semibold hover:border-gray-400 transition-all">
                Watch Story
              </button>
            </motion.div>
          </div>

          {/* ── Right column — 3D ball ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col items-end justify-center pr-0 lg:pr-8"
          >
            <div className="relative flex flex-col items-center">

              {/* Red ambient glow */}
              <div
                className="absolute rounded-full blur-3xl z-0 pointer-events-none"
                style={{
                  width: 420,
                  height: 420,
                  background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Floating wrapper — y oscillation synced with ground shadow */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Rotation wrapper — rotateZ only, directional shadow (no halo) */}
                <motion.div
                  style={{
                    rotateZ: totalRotation,
                    backfaceVisibility: "hidden",
                    filter: "drop-shadow(8px 16px 12px rgba(0,0,0,0.28)) drop-shadow(0px 4px 6px rgba(0,0,0,0.18))",
                  }}
                  className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px]"
                >
                  <Image
                    src="/ba.png"
                    alt="Soccer ball"
                    width={420}
                    height={420}
                    className="w-full h-full object-contain select-none"
                    draggable={false}
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Ground shadow — scale/opacity inverse to float (ball up → shadow shrinks) */}
              <motion.div
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-3/4 h-6 mx-auto rounded-full bg-black/20 blur-xl"
                style={{ marginTop: "-10px" }}
              />
            </div>

            {/* Scroll-to-continue hint — desktop only, fades when gate releases */}
            <motion.div
              animate={{ opacity: gateReleased ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:flex flex-col items-center gap-2 mt-8"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Scroll to Continue
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-gray-400"
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
