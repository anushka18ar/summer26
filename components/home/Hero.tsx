"use client";

import { useRef, useEffect } from "react";
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
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { stiffness: 100, damping: 20 });

  const baseRotation = useMotionValue(0);
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 720]);

  const totalRotation = useTransform(
    [baseRotation, scrollRotation] as MotionValue<number>[],
    ([base, scroll]: number[]) => base + scroll,
  );

  useAnimationFrame((_, delta) => {
    const velocityFactor = Math.abs(smoothVelocity.get());
    const speed = Math.max(1, Math.min(5, 1 + velocityFactor * 0.01));
    baseRotation.set(baseRotation.get() + speed * (delta / 16.67));
  });


  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        background:
          "radial-gradient(ellipse at 60% 50%, rgba(239,68,68,0.15) 0%, transparent 60%), linear-gradient(180deg, #0a0a0b 0%, #111114 100%)",
      }}
    >
      {/* Subtle noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
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
              <span className="border border-white/10 rounded-full px-4 py-2 text-xs uppercase tracking-widest text-slate-500 inline-flex items-center gap-2 bg-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                OUTDO YOUR SPORT TO SUCCEED
              </span>
            </motion.div>

            {/* H1 */}
            <h1
              className="font-display font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(44px, 6vw, 84px)", lineHeight: "0.95" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-white"
              >
                FROM GRASSROOTS
              </motion.div>

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
                className="text-white"
              >
                FOOTBALL.
              </motion.div>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-400 leading-relaxed max-w-lg mt-6 mx-auto lg:mx-0"
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
                className="bg-red-500 text-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/40 transition-all focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0b]"
              >
                Book an Assessment
              </Link>
              <button className="bg-white/5 border border-white/20 text-white rounded-full px-8 py-4 text-sm font-semibold hover:bg-white/10 hover:border-white/30 transition-all">
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
                  background: "radial-gradient(circle, rgba(239,68,68,0.2) 0%, transparent 70%)",
                }}
              />

              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Rotation wrapper — rotateZ only, directional + red glow shadow */}
                <motion.div
                  style={{
                    rotateZ: totalRotation,
                    backfaceVisibility: "hidden",
                    filter:
                      "drop-shadow(0px 40px 80px rgba(239,68,68,0.2)) drop-shadow(0px 20px 40px rgba(0,0,0,0.6)) drop-shadow(8px 16px 12px rgba(0,0,0,0.35))",
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

              {/* Ground shadow */}
              <motion.div
                animate={{ scale: [0.8, 1, 0.8], opacity: [0.4, 0.7, 0.4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-3/4 h-6 mx-auto rounded-full bg-black/40 blur-xl"
                style={{ marginTop: "-10px" }}
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
