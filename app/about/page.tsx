"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Zap, Target, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Globe, title: "Connect with Experts", description: "Access certified football experts worldwide for real-time guidance." },
  { icon: Zap, title: "Expert Analysis", description: "Get real-time expert analysis of your game, skill level, strengths and weaknesses." },
  { icon: Target, title: "Actionable Reports", description: "Receive actionable expert reports and personalized training guidance." },
  { icon: Shield, title: "Career Advancement", description: "Enhance opportunities for team selection, sponsorships, and career advancement." },
];

export default function AboutPage() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bannerRef.current, {
        x: "-30%",
        ease: "none",
        scrollTrigger: { trigger: bannerRef.current, start: "top bottom", end: "bottom top", scrub: 2 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-5">ABOUT US</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(52px,7.5vw,96px)] leading-[0.85] uppercase max-w-4xl mb-8 text-slate-900"
          >
            WHERE FOOTBALL<br />
            <span className="text-primary italic">MEETS EXPERTISE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-600 text-xl leading-relaxed max-w-2xl"
          >
            Outceedo is a UK registered company founded by passionate football fans on a mission to revolutionise how talent is discovered and developed.
          </motion.p>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative overflow-hidden py-5 border-y border-slate-200 bg-slate-50">
        <div ref={bannerRef} className="flex gap-16 whitespace-nowrap will-change-transform">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 text-[clamp(28px,4vw,48px)] font-display font-black uppercase text-slate-200 shrink-0">
              OUTCEEDO — WHERE FOOTBALL MEETS EXPERTISE —
            </span>
          ))}
        </div>
      </div>

      {/* Story */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-slate-600 text-[17px] leading-[1.75] mb-6">
                Outceedo is a UK registered company. Arun Muppana and Karthik Reddy, passionate football fans, co-founded this company in 2026.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.75] mb-6">
                Our mission is to create the best football players for a team by connecting them with worldwide experts for real-time performance assessment and guidance.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.75] mb-6">
                Outceedo is an online platform where football players connect with global experts to get their sports skills and performances assessed. We proudly serve players, managers, coaches, scouts, sponsors, fans and followers, creating a dynamic and supportive football community.
              </p>
              <p className="text-slate-600 text-[17px] leading-[1.75]">
                We know how competitive it is for players to get into the best teams. Expert assessment is essential to understand one&apos;s skills and enter the next level in sports.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card space-y-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { value: "2026", label: "Founded" },
                    { value: "48+", label: "Countries" },
                    { value: "2,400+", label: "Certified Experts" },
                    { value: "38,000+", label: "Players" },
                  ].map((stat) => (
                    <div key={stat.label} className="pb-4 border-b border-slate-100">
                      <div className="font-display font-black text-3xl text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <hr className="divider-red" />
                <p className="text-sm text-slate-500 italic">
                  &ldquo;Outceedo helps elevate every player&apos;s game through professional guidance and expert analysis.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Why */}
      <section className="relative py-24 lg:py-32 bg-slate-50">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="section-label mb-5">01 — OUR VISION</div>
                <h2 className="font-display font-black text-[clamp(36px,4vw,56px)] uppercase leading-[0.9] mb-6 text-slate-900">
                  OUR <span className="text-primary italic">VISION</span>
                </h2>
                <p className="text-slate-600 text-base leading-[1.75] mb-6">
                  To revolutionize the football industry with cutting-edge solutions using technology and a user-centric approach. Outceedo bridges the gap between players and experts, empowering football talents to grow, transform weaknesses into strengths, and excel in their sporting careers.
                </p>
                <p className="text-slate-600 text-base leading-[1.75]">
                  Whether you&apos;re a parent seeking expert training for your child, an aspiring player aiming for professional leagues, or a seasoned footballer looking to refine your skills, Outceedo makes it easier to find the perfect expert to guide you.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="section-label mb-5">02 — WHY OUTCEEDO?</div>
                <h2 className="font-display font-black text-[clamp(36px,4vw,56px)] uppercase leading-[0.9] mb-8 text-slate-900">
                  WHY <span className="text-primary italic">OUTCEEDO?</span>
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                      <v.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{v.title}</h4>
                    <p className="text-slate-600 text-sm leading-[1.75]">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.10) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-black text-[clamp(40px,6vw,80px)] uppercase leading-[0.9] mb-6 text-white">
              OUTCEEDO —<br />
              <span className="text-primary italic">WHERE FOOTBALL</span><br />
              MEETS EXPERTISE
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link href="/signup" className="btn-primary flex items-center gap-2">
                Join the Platform <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 h-[52px] bg-white/10 text-white font-bold text-sm uppercase tracking-[0.05em] rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
