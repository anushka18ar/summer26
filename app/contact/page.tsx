"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, MessageSquare, Users } from "lucide-react";

const reasons = [
  { id: "Player", title: "Player inquiry", description: "Questions about signing up or finding an expert" },
  { id: "Expert", title: "Expert application", description: "Apply to join as a verified expert" },
  { id: "Club", title: "Club / Scout partnership", description: "Scouting partnerships and club integrations" },
  { id: "Other", title: "General inquiry", description: "Press, partnerships, anything else" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen pt-20" style={{ background: "#0a0a0b" }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="section-label mb-5">GET IN TOUCH</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(52px,7.5vw,96px)] leading-[0.85] uppercase mb-4 text-white"
          >
            <span className="text-primary italic">LET&apos;S</span><br />
            TALK.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="text-slate-400 text-lg max-w-lg">
            Whether you&apos;re a player, expert, club, or journalist — we&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div
                  className="rounded-2xl p-6 border border-white/8 space-y-5"
                  style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
                >
                  {[
                    { icon: Mail, label: "Email", value: "info@outceedo.com", href: "mailto:info@outceedo.com" },
                    { icon: Phone, label: "Phone", value: "+44 7707 201236", href: "tel:+447707201236" },
                    { icon: MapPin, label: "HQ", value: "Aberdeen, UK — 82 Berryden Gardens, AB25 3RW", href: undefined },
                    { icon: MessageSquare, label: "Response time", value: "Within 24 hours", href: undefined },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={15} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-0.5">{label}</div>
                        {href ? (
                          <a href={href} className="text-white text-sm font-medium hover:text-primary transition-colors">{value}</a>
                        ) : (
                          <div className="text-white text-sm font-medium">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
                <div
                  className="rounded-2xl p-6 border border-white/8"
                  style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
                >
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-4">WHAT CAN WE HELP WITH?</h3>
                  <div className="space-y-4">
                    {reasons.map(({ title, description }) => (
                      <div key={title} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Users size={12} className="text-primary" />
                        </div>
                        <div>
                          <div className="text-white text-xs font-bold">{title}</div>
                          <div className="text-slate-500 text-xs mt-0.5 leading-snug">{description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div
                className="rounded-2xl p-7 sm:p-8 border border-white/8"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                {sent ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={28} className="text-primary" />
                    </div>
                    <h3 className="font-display font-black text-2xl uppercase text-white mb-2">MESSAGE SENT!</h3>
                    <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSent(false)} className="mt-6 text-primary text-sm hover:text-red-400 transition-colors font-semibold">
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">NAME <span className="text-primary">*</span></label>
                        <input type="text" required className="input-field" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">EMAIL <span className="text-primary">*</span></label>
                        <input type="email" required className="input-field" placeholder="you@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">I AM A... <span className="text-primary">*</span></label>
                      <div className="grid grid-cols-2 gap-2">
                        {reasons.map((r) => (
                          <button
                            key={r.id}
                            type="button"
                            onClick={() => setForm({ ...form, reason: r.id })}
                            className={`p-3 rounded-xl text-sm font-semibold transition-all text-left border ${
                              form.reason === r.id
                                ? "bg-red-500/10 border-primary text-primary"
                                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20 bg-white/3"
                            }`}
                          >
                            {r.title}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">MESSAGE <span className="text-primary">*</span></label>
                      <textarea
                        required
                        rows={5}
                        className="input-field resize-none"
                        placeholder="Tell us how we can help..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!form.name || !form.email || !form.reason || !form.message}
                      className="btn-primary w-full justify-center flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Send size={14} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
