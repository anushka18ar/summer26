"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { boardMembers } from "@/lib/data";

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-5">THE TEAM</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(52px,7.5vw,96px)] leading-[0.85] uppercase max-w-3xl mb-6 text-slate-900"
          >
            MEET THE<br />
            <span className="text-primary italic">BOARD.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-600 text-[17px] leading-[1.75] max-w-lg"
          >
            The visionaries building the world&apos;s premier football ecosystem.
          </motion.p>
        </div>
      </section>

      {/* Board members */}
      <section className="relative py-16 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative h-72 overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{member.name}</h3>
                        <p className="text-primary text-sm font-semibold">{member.role}</p>
                      </div>
                      <div className="w-9 h-9 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
                        <ExternalLink size={15} />
                      </div>
                    </div>
                    <p className="text-slate-600 text-base leading-[1.75]">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company info card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-12 bg-white rounded-2xl p-8 border-2 border-red-100 max-w-3xl mx-auto"
          >
            <h3 className="font-display font-black text-2xl text-slate-900 mb-5">OUTCEEDO LIMITED</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Registration</span>
                SC853014 — Scotland, UK
              </div>
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Incorporated</span>
                2026
              </div>
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Headquarters</span>
                82 Berryden Gardens, Aberdeen, AB25 3RW
              </div>
              <div>
                <span className="text-slate-400 text-xs uppercase tracking-widest block mb-1">Contact</span>
                info@outceedo.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
