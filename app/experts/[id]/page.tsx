"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Globe, Award, Calendar, Users, Video, MessageSquare, Shield } from "lucide-react";
import { experts } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export default function ExpertProfilePage({ params }: Props) {
  const { id } = use(params);
  const expert = experts.find((e) => e.id === id);
  if (!expert) notFound();

  const similar = experts.filter((e) => e.id !== expert.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      {/* Hero cover */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        <Image src={expert.image} alt={expert.name} fill className="object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 lg:-mt-48 relative">
        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {/* Left */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 mb-6 border border-slate-200 shadow-card"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border-2 border-slate-200 shrink-0">
                  <Image src={expert.image} alt={expert.name} fill className="object-cover object-top" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`badge text-[10px] ${expert.license === "UEFA Pro" ? "badge-gold" : "badge-red"}`}>{expert.license}</span>
                    <span className="text-xl">{expert.flag}</span>
                    <span className="text-sm text-slate-500">{expert.nationality}</span>
                  </div>
                  <h1 className="font-bold text-2xl lg:text-3xl text-slate-900 mb-1">{expert.name}</h1>
                  <p className="text-slate-600 text-sm">{expert.title}</p>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Star, value: expert.rating.toString(), label: "Rating" },
                  { icon: Users, value: `${expert.sessions}+`, label: "Sessions" },
                  { icon: Calendar, value: `${expert.experience}yr`, label: "Experience" },
                  { icon: Globe, value: expert.languages.length.toString(), label: "Languages" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200 hover:-translate-y-0.5 transition-transform">
                    <stat.icon size={14} className="text-primary mx-auto mb-1.5" />
                    <div className="font-display font-black text-xl text-primary">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {[
                { title: "SPECIALIZATIONS", content: <div className="flex flex-wrap gap-2">{expert.specializations.map((s) => <span key={s} className="badge badge-red text-[11px]">{s}</span>)}</div> },
                { title: "ABOUT", content: <p className="text-slate-600 text-[15px] leading-[1.75]">{expert.bio}</p> },
                { title: "CLUBS & ACADEMIES", content: <div className="flex flex-wrap gap-2">{expert.clubs.map((c) => <span key={c} className="badge badge-white text-[11px]">{c}</span>)}</div> },
                {
                  title: "ACHIEVEMENTS", content: (
                    <ul className="space-y-2">
                      {expert.achievements.map((a) => (
                        <li key={a} className="flex items-center gap-3 text-sm text-slate-600">
                          <Award size={13} className="text-amber-500 shrink-0" /> {a}
                        </li>
                      ))}
                    </ul>
                  )
                },
                { title: "LANGUAGES", content: <div className="flex flex-wrap gap-2">{expert.languages.map((l) => <span key={l} className="badge badge-white text-[11px]">{l}</span>)}</div> },
              ].map(({ title, content }) => (
                <div key={title} className="mb-6">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mb-4">{title}</h3>
                  {content}
                </div>
              ))}
            </motion.div>

            {/* Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display font-black text-2xl uppercase text-slate-900">REVIEWS</h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill={j < Math.floor(expert.rating) ? "currentColor" : "none"} />)}
                  </div>
                  <span className="font-bold text-slate-900">{expert.rating}</span>
                  <span className="text-slate-500 text-sm">({expert.reviews})</span>
                </div>
              </div>
              <div className="space-y-5">
                {expert.reviewList.map((review, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <Image src={review.avatar} alt={review.author} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-900 text-sm">{review.author}</span>
                          <span className="text-xs text-slate-400">{review.date}</span>
                        </div>
                        <span className="text-xs text-slate-500">{review.country}</span>
                      </div>
                    </div>
                    <div className="flex text-amber-400 mb-2">
                      {[...Array(5)].map((_, j) => <Star key={j} size={11} fill={j < review.rating ? "currentColor" : "none"} />)}
                    </div>
                    <p className="text-slate-600 text-[14px] leading-[1.75]">{review.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: sticky booking */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 mb-6 border-2 border-red-100 shadow-card"
            >
              <div className="mb-5">
                <span className="text-slate-500 text-xs uppercase tracking-widest">From</span>
                <div className="font-display font-black text-5xl text-primary mt-1">£{expert.price}</div>
                <span className="text-slate-500 text-sm">/session</span>
              </div>
              <Link href="/signup" className="btn-primary w-full justify-center mb-3 flex items-center gap-2">
                Book Session <ArrowRight size={14} />
              </Link>
              <button className="w-full py-3.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 mb-6">
                <MessageSquare size={14} /> Free Discovery Call
              </button>
              <div className="space-y-3 border-t border-slate-100 pt-5">
                {[
                  { icon: Shield, text: "Verified & background-checked" },
                  { icon: Video, text: "Remote 1-on-1 sessions" },
                  { icon: Award, text: "Certified professional" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-xs text-slate-600">
                    <Icon size={13} className="text-primary shrink-0" /> {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Similar experts */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-card">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">MORE EXPERTS</h3>
              <div className="space-y-3">
                {similar.map((e) => (
                  <Link key={e.id} href={`/experts/${e.id}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0">
                        <Image src={e.image} alt={e.name} fill className="object-cover object-top" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-slate-900 text-sm truncate">{e.name}</div>
                        <div className="text-xs text-slate-500 truncate">{e.title}</div>
                      </div>
                      <div className="text-xs font-bold text-primary shrink-0">£{e.price}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
