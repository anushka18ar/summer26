"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 pt-16"
      style={{ background: "#0a0a0b" }}
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8">
          <ArrowLeft size={14} /> Go Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="font-display font-black text-white text-base">O</span>
            </div>
            <span className="font-display font-black text-xl text-white">
              OUT<span className="text-primary">CEEDO</span>
            </span>
          </div>

          <h1 className="font-display font-black text-[clamp(40px,6vw,68px)] uppercase leading-[0.9] mb-3 text-white">
            <span className="text-primary italic">WELCOME</span><br />
            BACK.
          </h1>
          <p className="text-slate-400 text-[15px] leading-[1.7] mb-8">
            Connect with experts to get your sports skills and performances assessed at an elite level.
          </p>

          <div
            className="rounded-2xl border border-white/8 p-6 sm:p-8"
            style={{ background: "#15151a", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  className="input-field"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">PASSWORD</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    className="input-field pr-12"
                    placeholder="Your password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, remember: !form.remember })}
                    className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                      form.remember ? "bg-primary border-primary" : "border-white/20 bg-white/5"
                    }`}
                  >
                    {form.remember && <span className="text-white text-[10px]">✓</span>}
                  </button>
                  <span className="text-xs text-slate-500">REMEMBER ME</span>
                </label>
                <button type="button" className="text-xs text-primary hover:text-red-400 font-semibold transition-colors">FORGOT PASSWORD?</button>
              </div>

              <button
                type="submit"
                disabled={!form.email || !form.password || loading}
                className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loading ? (
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <>LOGIN <ArrowRight size={14} /></>
                )}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            NOT A MEMBER YET?{" "}
            <Link href="/signup" className="text-primary hover:text-red-400 font-semibold transition-colors">Sign Up</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
