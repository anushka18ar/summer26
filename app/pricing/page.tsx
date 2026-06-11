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
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative py-24 lg:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-5 justify-center">PLAYER SUBSCRIPTIONS</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] mb-4 text-slate-900"
          >
            CHOOSE YOUR <span className="text-primary italic">LEVEL.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-slate-600 text-lg max-w-xl mx-auto"
          >
            Start your journey for free or unlock the full tactical ecosystem to accelerate your professional career.
          </motion.p>
        </div>
      </section>

      {/* Toggle */}
      <div className="flex items-center justify-center gap-4 mb-12 -mt-4">
        <span className={`text-sm font-bold ${billing === "monthly" ? "text-slate-900" : "text-slate-400"}`}>Monthly</span>
        <button
          onClick={() => setBilling(billing === "monthly" ? "annual" : "monthly")}
          className={`w-12 h-6 rounded-full transition-colors relative ${billing === "annual" ? "bg-primary" : "bg-slate-200"}`}
        >
          <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${billing === "annual" ? "translate-x-7" : "translate-x-1"}`} />
        </button>
        <span className={`text-sm font-bold flex items-center gap-2 ${billing === "annual" ? "text-slate-900" : "text-slate-400"}`}>
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
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-card"
            >
              <div className="mb-6">
                <h3 className="font-display font-black text-2xl uppercase text-slate-900">Basic</h3>
                <p className="text-slate-500 text-sm">Get Started Free</p>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-slate-900">£0</span>
                <span className="text-slate-500 text-sm">/mo</span>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">Free Forever</div>
              </div>
              <ul className="space-y-3 mb-8">
                {basicFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-slate-400" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn-secondary w-full justify-center flex">Get Started</Link>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border-2 border-primary p-8 relative"
              style={{ boxShadow: "var(--shadow-red-glow)" }}
            >
              <div className="absolute -top-3 right-6">
                <span className="badge badge-red">BEST VALUE</span>
              </div>
              <div className="mb-6">
                <h3 className="font-display font-black text-2xl uppercase text-slate-900">Premium</h3>
                <p className="text-slate-500 text-sm">Unlock Everything</p>
              </div>
              <div className="mb-6">
                <span className="font-display font-black text-5xl text-primary">
                  £{billing === "monthly" ? "10" : "100"}
                </span>
                <span className="text-slate-500 text-sm">/mo</span>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                  {billing === "monthly" ? "Billed Monthly" : "Billed Annually — Save £20"}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="btn-primary w-full justify-center flex">Upgrade to Premium</Link>
              <p className="text-center text-xs text-slate-400 mt-3">Full Access to All Features</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 border-t border-slate-200 py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label mb-5 justify-center">HAVE QUESTIONS?</div>
            <h2 className="font-display font-black text-[clamp(32px,4vw,52px)] uppercase leading-[0.9] text-slate-900">
              FREQUENTLY ASKED <span className="text-primary italic">QUESTIONS</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-slate-900 text-sm pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-slate-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
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
                      <p className="px-6 pb-6 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
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
