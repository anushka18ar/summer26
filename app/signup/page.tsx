"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Eye, EyeOff } from "lucide-react";

type Role = "Player" | "Expert" | "Team" | "Sponsor" | "Fan" | "Scout";

const roles: { id: Role; label: string; desc: string }[] = [
  { id: "Player", label: "PLAYER", desc: "I want to be assessed and discovered" },
  { id: "Expert", label: "EXPERT", desc: "I want to coach and mentor players" },
  { id: "Team", label: "TEAM", desc: "I want to scout and recruit players" },
  { id: "Sponsor", label: "SPONSOR", desc: "I want to find brand ambassadors" },
  { id: "Fan", label: "FAN", desc: "I want to follow rising talent" },
  { id: "Scout", label: "SCOUT", desc: "I want to identify talent globally" },
];

const STEPS = ["Role", "Account", "Confirm"] as const;

export default function SignupPage() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<Role | null>(null);
  const [form, setForm] = useState({
    firstName: "", lastName: "", username: "", email: "",
    password: "", confirm: "", country: "", mobile: "", referral: "",
    age18: false, terms: false,
  });
  const [showPass, setShowPass] = useState(false);
  const [done, setDone] = useState(false);

  const canProceed = [
    () => role !== null,
    () => !!(form.firstName && form.lastName && form.username && form.email && form.password && form.password === form.confirm && form.age18 && form.terms),
    () => true,
  ];

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#0a0a0b" }}>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-red-500/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
              <Check size={32} className="text-primary" />
            </motion.div>
          </div>
          <h2 className="font-display font-black text-4xl uppercase mb-3 text-primary italic">WELCOME.</h2>
          <p className="text-slate-400 mb-8">Your account has been created. Time to start your journey.</p>
          <Link href="/login" className="btn-primary inline-flex items-center gap-2">
            Login to Outceedo <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-12" style={{ background: "#0a0a0b" }}>
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8 mt-4">
          <ArrowLeft size={14} /> Go Back
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="font-display font-black text-white text-base">O</span>
            </div>
            <span className="font-display font-black text-xl text-white">
              OUT<span className="text-primary">CEEDO</span>
            </span>
          </div>
          <h1 className="font-display font-black text-[clamp(40px,6vw,72px)] uppercase leading-[0.9] mb-3 text-white">
            <span className="text-primary italic">JOIN THE</span><br />ELITE.
          </h1>
          <p className="text-slate-400">An online platform where football players connect with experts to get assessed.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all ${
                i < step ? "bg-primary text-white" : i === step ? "bg-primary text-white" : "bg-white/5 text-slate-500 border border-white/10"
              }`}>
                {i < step ? <Check size={12} /> : i + 1}
              </div>
              <span className={`hidden sm:block ml-2 mr-4 text-xs font-semibold uppercase tracking-wider ${i === step ? "text-white" : "text-slate-500"}`}>{s}</span>
              {i < STEPS.length - 1 && <div className={`h-px w-8 sm:w-12 mx-2 ${i < step ? "bg-primary" : "bg-white/10"}`} />}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <div
                className="rounded-2xl border border-white/8 p-6 sm:p-8 mb-6"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <h3 className="font-display font-black text-xl uppercase text-white mb-2">SELECT YOUR ROLE</h3>
                <p className="text-sm text-slate-500 mb-6">REGISTERING AS:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRole(r.id)}
                      className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                        role === r.id
                          ? "border-primary bg-red-500/10"
                          : "border-white/8 bg-white/3 hover:border-white/15 hover:bg-white/5"
                      }`}
                    >
                      <div className={`font-display font-black text-sm uppercase tracking-wide mb-1 ${role === r.id ? "text-primary" : "text-white"}`}>{r.label}</div>
                      <div className="text-[11px] text-slate-500 leading-snug">{r.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <div
                className="rounded-2xl border border-white/8 p-6 sm:p-8 mb-6 space-y-5"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">FIRST NAME <span className="text-primary">*</span></label>
                    <input className="input-field" placeholder="First name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">LAST NAME <span className="text-primary">*</span></label>
                    <input className="input-field" placeholder="Last name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">USERNAME <span className="text-primary">*</span></label>
                  <input className="input-field" placeholder="Letters, numbers, and underscores only" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">EMAIL ID <span className="text-primary">*</span></label>
                  <input type="email" className="input-field" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">PASSWORD <span className="text-primary">*</span></label>
                  <div className="relative">
                    <input type={showPass ? "text" : "password"} className="input-field pr-12" placeholder="Min 8 chars, 1 uppercase, 1 number, 1 symbol" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                      {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">CONFIRM <span className="text-primary">*</span></label>
                  <input type="password" className="input-field" placeholder="Confirm password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
                  {form.confirm && form.password !== form.confirm && (
                    <p className="text-primary text-xs mt-1">Passwords do not match</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">COUNTRY</label>
                    <input className="input-field" placeholder="Your country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">MOBILE</label>
                    <input className="input-field" placeholder="+44 7000 000000" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">REFERRAL CODE (Optional)</label>
                  <input className="input-field" placeholder="Enter referral code" value={form.referral} onChange={(e) => setForm({ ...form, referral: e.target.value })} />
                </div>
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <button type="button" onClick={() => setForm({ ...form, age18: !form.age18 })}
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 mt-0.5 ${form.age18 ? "bg-primary border-primary" : "border-white/20 bg-white/5"}`}>
                      {form.age18 && <Check size={11} className="text-white" />}
                    </button>
                    <span className="text-xs text-slate-400 leading-snug">
                      I AM 18 YEARS OR OLDER <span className="block text-slate-500">(Under 18: Parent or Guardian must sign up)</span>
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <button type="button" onClick={() => setForm({ ...form, terms: !form.terms })}
                      className={`w-5 h-5 rounded flex items-center justify-center border transition-all shrink-0 mt-0.5 ${form.terms ? "bg-primary border-primary" : "border-white/20 bg-white/5"}`}>
                      {form.terms && <Check size={11} className="text-white" />}
                    </button>
                    <span className="text-xs text-slate-400 leading-snug">
                      I AGREE TO OUTCEEDO{" "}
                      <Link href="/terms" className="text-primary hover:underline">Terms and Conditions</Link>
                      {" "}AND{" "}
                      <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <div
                className="rounded-2xl border border-white/8 p-6 sm:p-8 mb-6"
                style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
              >
                <h3 className="font-display font-black text-xl uppercase text-white mb-6">CONFIRM YOUR DETAILS</h3>
                <div className="space-y-3">
                  {[
                    { label: "Role", value: role },
                    { label: "Name", value: `${form.firstName} ${form.lastName}` },
                    { label: "Username", value: form.username },
                    { label: "Email", value: form.email },
                    { label: "Country", value: form.country || "—" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between py-3 border-b border-white/5">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</span>
                      <span className="text-sm text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4">
          {step > 0 ? (
            <button onClick={() => setStep(step - 1)} className="btn-secondary flex items-center gap-2">
              <ArrowLeft size={14} /> Back
            </button>
          ) : <div />}

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => canProceed[step]() && setStep(step + 1)}
              disabled={!canProceed[step]()}
              className="btn-primary flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Continue <ArrowRight size={14} />
            </button>
          ) : (
            <button onClick={() => setDone(true)} className="btn-primary flex items-center gap-2">
              CREATE ACCOUNT <Check size={14} />
            </button>
          )}
        </div>

        <p className="text-center text-sm text-slate-500 mt-6">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link href="/login" className="text-primary hover:text-red-400 font-semibold transition-colors">Login</Link>
        </p>
      </div>
    </div>
  );
}
