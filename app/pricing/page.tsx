"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

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

const faqs = [
  {
    q: "Can I switch between Basic and Premium?",
    a: "Yes. You can upgrade to Premium at any time and your data is retained. Downgrading takes effect at the end of your billing period.",
  },
  {
    q: "What happens to my data if I downgrade?",
    a: "Your profile and history remain intact. You'll lose access to Premium-only features, but your stored data is never deleted.",
  },
  {
    q: "Is there a free trial for Premium?",
    a: "We offer a 7-day free trial for new accounts. No credit card required to start.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes, cancel any time. You'll keep Premium access until the end of your current billing cycle.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, debit cards, and PayPal through our secure payment processor.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20" style={{ background: "#0a0a0b" }}>

      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden" style={{ background: "#0a0a0b" }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-5 justify-center">PLAYER SUBSCRIPTIONS</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(48px,7vw,90px)] uppercase leading-none mb-4 text-white"
          >
            CHOOSE YOUR <span className="text-primary italic">LEVEL.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Start your journey for free or unlock the full tactical ecosystem to accelerate your professional career.
          </motion.p>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-6 pt-8 mb-12">
        <span className={`text-sm font-bold ${billing === "monthly" ? "text-white" : "text-slate-500"}`}>Monthly</span>
        <button
          onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
          className={`w-14 h-7 rounded-full transition-colors relative overflow-hidden ${billing === "annual" ? "bg-primary" : "bg-white/10"}`}
        >
          <span className={`absolute top-1 left-0 w-5 h-5 rounded-full bg-white shadow transition-transform ${billing === "annual" ? "translate-x-7" : "translate-x-1"}`} />
        </button>
        <span className={`text-sm font-bold flex items-center gap-2 ${billing === "annual" ? "text-white" : "text-slate-500"}`}>
          Annually <span className="badge badge-red">SAVE 17%</span>
        </span>
      </div>

      {/* Cards */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/8 p-8 flex flex-col"
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
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-400 line-through decoration-white/20">
                    <div
                      className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                    >
                      <Check size={10} className="text-slate-600" />
                    </div>
                    <span className="no-underline text-white/30">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <div className="h-6" />
                <Link href="/signup" className="btn-secondary w-full justify-center flex">Get Started</Link>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="rounded-2xl border-2 border-primary p-8 relative flex flex-col"
              style={{ background: "linear-gradient(135deg, #1a0c0e 0%, #15151a 100%)", boxShadow: "0 0 60px rgba(239,68,68,0.15)" }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display font-black text-2xl uppercase text-white">Premium</h3>
                  <span className="badge badge-red">BEST VALUE</span>
                </div>
                <p className="text-slate-400 text-sm">Unlock Everything</p>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-primary">
                  £{billing === "monthly" ? "10" : "100"}
                </span>
                <span className="text-slate-400 text-sm">/mo</span>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {billing === "monthly" ? "Billed Monthly" : "Billed Annually — Save £20"}
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
              <div className="mt-auto">
                <p className="text-center text-xs text-slate-400 mb-3">Full Access to All Features</p>
                <Link href="/signup" className="btn-primary w-full justify-center flex">Upgrade to Premium</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t py-24 lg:py-32" style={{ background: "#111114", borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mb-5 justify-center">HAVE QUESTIONS?</div>
            <h2 className="font-display font-black text-[clamp(32px,4vw,52px)] uppercase leading-none text-white">
              FREQUENTLY ASKED <span className="text-primary italic">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border overflow-hidden"
                style={{ background: "#15151a", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/3 transition-colors"
                >
                  <span className="font-semibold text-white text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
