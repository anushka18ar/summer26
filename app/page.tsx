"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import FootballAnimation from "@/components/FootballAnimation";
import Hero from "@/components/home/Hero";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Users,
  User, Handshake, Eye, Heart, ChevronRight, Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const ecosystem = [
  {
    num: "01", category: "Talent", title: "Players", icon: User,
    desc: "Build a professional profile, undergo elite assessments, and broadcast your highlights to a global network of decision-makers.",
  },
  {
    num: "02", category: "Mentorship", title: "Experts", icon: Star,
    desc: "Monetize your professional expertise. Conduct skill reviews, generate technical reports, and mentor the next generation.",
  },
  {
    num: "03", category: "Squad", title: "Teams", icon: Users,
    desc: "Streamline your scouting. Access verified player data, expert technical reports, and direct communication channels.",
  },
  {
    num: "04", category: "Partnership", title: "Sponsors", icon: Handshake,
    desc: "Identify brand ambassadors early. Partner with rising stars and track their performance growth through real data.",
  },
  {
    num: "05", category: "Talent Discovery", title: "Scouts", icon: Eye,
    desc: "Find and recruit the next generation of talent. Discover verified player profiles, track performance data, and connect directly with prospects across the globe.",
  },
  {
    num: "06", category: "Support", title: "Fans", icon: Heart,
    desc: "Follow your favourite players, stay updated on their journey, and support rising talent as they pursue their professional dreams.",
  },
];

const steps = [
  {
    num: "01", title: "Identity Build",
    desc: "Construct your digital scouting pass. Upload match performances, get yourself evaluated by experts and add technical highlights.",
    badge: "TECHNICAL SCORE 92/100",
  },
  {
    num: "02", title: "Elite Marketplace",
    desc: "Browse a curated directory of top coaches, top-tier sponsors, and the best scouts.",
    badge: "PRO",
  },
  {
    num: "03", title: "Data Insights",
    desc: "Receive comprehensive coach feedbacks and assessment reports with actionable metrics.",
    badge: null,
  },
  {
    num: "04", title: "The Breakout",
    desc: "Connect directly with coaches and sponsors who leverage our data to fund talent.",
    badge: "Contract Ready",
  },
];

const basicFeatures = [
  "Limited Use",
  "2 Photos & 2 Videos Storage",
  "Reports Access (7 Days)",
  "Local Experts Search",
  "Recorded Video Assessment Bookings",
  "Video Conference Recordings (7 Days)",
  "Reports Download & Share",
  "Building Fans/Followers",
  "Promotions & Sponsorship Applications",
  "AI Features (Coming Soon)",
];

const premiumFeatures = [
  "Unlimited Use",
  "10 Photos & 5 Videos Storage",
  "Unlimited Reports Access",
  "Worldwide Experts Search",
  "All Expert Services & Bookings",
  "Reports Download & Share",
  "Building Fans/Followers",
  "Promotions & Sponsorship Applications",
  "AI Features (Coming Soon)",
];

const tickerItems = [
  "Elite Scouts", "Worldwide Followers", "Worldwide Sponsors",
  "Pro Coaches", "Player Performance Assessment",
];

export default function HomePage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const counterRef = useRef<HTMLDivElement>(null);

  const trackCardGlow = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  useEffect(() => {
    if (!counterRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: counterRef.current, start: "top 85%", once: true },
      });
      tl.from(".stat-num", { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power2.out" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "#0a0a0b" }}>

      {/* ── Football Strike Animation ── */}
      <FootballAnimation />

      {/* ── Hero ── */}
      <Hero />

      {/* ── Ticker ── */}
      <div className="py-4 overflow-hidden" style={{ background: "#0a0a0b" }}>
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-white/30 shrink-0 px-8">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div ref={counterRef} className="py-12" style={{ background: "#0a0a0b" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "2,400+", label: "Certified Experts" },
              { value: "38,000+", label: "Players" },
              { value: "48+", label: "Countries" },
              { value: "120K+", label: "Followers" },
            ].map((s) => (
              <div key={s.label} className="stat-num text-center">
                <div className="font-display font-black text-4xl text-white mb-1">{s.value}</div>
                <div className="text-xs text-primary font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ecosystem ── */}
      <section className="relative py-24 lg:py-32" style={{ background: "#111114" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="section-label mb-5"
              >
                THE GLOBAL NETWORK
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.9] text-white"
              >
                BUILT FOR THE<br />
                <span className="text-primary italic">ENTIRE ECOSYSTEM.</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed lg:pb-2"
            >
              Outceedo connects every stakeholder in the modern game through a unified, data-driven professional platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((card, i) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                onMouseMove={trackCardGlow}
                className="card-futuristic group rounded-2xl border border-white/5 p-8 flex flex-col"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black text-white/20 tracking-widest group-hover:text-primary/50 transition-colors">{card.num}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">{card.category}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:bg-red-500/20 group-hover:border-red-500/30 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(239,68,68,0.2)] transition-all duration-300">
                  <card.icon size={18} className="text-primary transition-colors" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{card.desc}</p>
                <Link href="/signup" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors mt-auto">
                  Discover More <ChevronRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0a0a0b" }}>
        <div className="absolute inset-0 grid-bg opacity-100" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5 justify-center"
            >
              THE PROCESS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.9] text-white mb-4"
            >
              PATH TO THE <span className="text-primary italic">PROS.</span>
            </motion.h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A simplified, data-driven journey from the local pitch to the international stage.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-white/8 z-0" />
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center"
              >
                <div
                  className="w-20 h-20 rounded-2xl border-2 border-primary/30 flex items-center justify-center mx-auto mb-6 group hover:bg-primary hover:border-primary transition-all duration-300 cursor-default"
                  style={{ background: "#15151a" }}
                >
                  <span className="font-display font-black text-2xl text-primary group-hover:text-white transition-colors">{step.num}</span>
                </div>
                <h3 className="font-display font-black text-xl uppercase text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                {step.badge && <span className="badge badge-red text-[10px]">{step.badge}</span>}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link href="/signup" className="btn-primary inline-flex items-center gap-2">
              Start Your Journey Now <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="relative py-24 lg:py-32" style={{ background: "#111114" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-5 justify-center"
            >
              PLAYER SUBSCRIPTIONS
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-[clamp(40px,5.5vw,72px)] uppercase leading-[0.9] text-white mb-4"
            >
              CHOOSE YOUR <span className="text-primary italic">LEVEL.</span>
            </motion.h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Start your journey for free or unlock the full tactical ecosystem to accelerate your professional career.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className={`text-sm font-bold transition-colors ${billing === "monthly" ? "text-white" : "text-slate-500"}`}>Monthly</span>
            <button
              onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
              aria-checked={billing === "annual"}
              role="switch"
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 overflow-hidden shrink-0 ${billing === "annual" ? "bg-primary" : "bg-white/10 border border-white/15"}`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${billing === "annual" ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 transition-colors ${billing === "annual" ? "text-white" : "text-slate-500"}`}>
              Annually <span className="badge badge-red">SAVE 17%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {/* Basic */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 p-8 flex flex-col"
              style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
            >
              <div className="mb-6">
                <h3 className="font-display font-black text-2xl uppercase text-white">Basic</h3>
                <p className="text-slate-500 text-sm">Get Started Free</p>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-white">£0</span>
                <span className="text-slate-500 text-sm">/mo</span>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Free Forever</div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/30 line-through">
                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white/30" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              {/* Spacer to match Premium's helper text height */}
              <p className="text-center text-xs text-transparent mt-0 mb-3 select-none">placeholder</p>
              <Link href="/signup" className="btn-secondary w-full justify-center flex">Get Started</Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border-2 border-primary/50 p-8 flex flex-col"
              style={{
                background: "linear-gradient(135deg, #1a0c0e 0%, #15151a 100%)",
                boxShadow: "0 0 60px rgba(239,68,68,0.1), 0 24px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* BEST VALUE inside the card */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display font-black text-2xl uppercase text-white">Premium</h3>
                  <p className="text-slate-500 text-sm">Unlock Everything</p>
                </div>
                <span className="badge badge-red shrink-0">BEST VALUE</span>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-primary">
                  £{billing === "monthly" ? "10" : "100"}
                </span>
                <span className="text-slate-500 text-sm">/mo</span>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {billing === "monthly" ? "Billed Monthly" : "Billed Annually"}
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-center text-xs text-slate-500 mb-3">Full Access to All Features</p>
              <Link href="/signup" className="btn-primary w-full justify-center flex">Upgrade to Premium</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="relative py-24 lg:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #c0392b 0%, #EF4444 50%, #e05252 100%)",
          boxShadow: "0 -20px 60px rgba(239,68,68,0.3)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.15) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display font-black text-[clamp(40px,6vw,80px)] uppercase leading-[0.9] mb-6 text-white">
              OUTCEEDO —<br />
              <span className="text-shimmer-dark italic">WHERE FOOTBALL</span><br />
              MEETS EXPERTISE
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-7 h-[52px] bg-white text-red-500 font-bold text-sm uppercase tracking-[0.05em] rounded-xl hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200"
              >
                Join the Platform <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 h-[52px] bg-white/10 text-white font-bold text-sm uppercase tracking-[0.05em] rounded-xl border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-200">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
