"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, User, ArrowRight } from "lucide-react";
import { boardMembers, eliteExperts } from "@/lib/data";

const corporateSponsors = [
  { name: "Sri Sri International", type: "Company",  location: "UK",    bg: "#ffffff" },
  { name: "Space Kreators",        type: "Business",  location: "India", bg: "#0d1420" },
  { name: "Sonavision",            type: "Company",   location: "UK",    bg: "#ffffff" },
  { name: "SSD",                   type: "Business",  location: "India", bg: "#ffffff" },
];

const individualBackers = [
  { name: "RAMCHANDER P", profession: "IT Consultant",              location: "UK", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" },
  { name: "KIRAN V",      profession: "Mech Chartered Engineer",    location: "UK", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80" },
  { name: "SUDHIR P",     profession: "Senior Electrical Engineer", location: "UK", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
];

export default function BoardPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: "#0a0a0b" }}>

      {/* ── Hero ── */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: label + heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-label mb-6">THE BOARD OF EXCELLENCE</div>
              <h1
                className="font-display font-black uppercase italic leading-[0.88]"
                style={{ fontSize: "clamp(52px,8vw,110px)" }}
              >
                <span className="text-white block">OUTCEEDO</span>
                <span className="text-primary block">ADVISORS.</span>
              </h1>
            </motion.div>

            {/* Right: ghost watermark + description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div
                className="absolute -top-12 right-0 font-display font-black uppercase italic select-none pointer-events-none"
                style={{
                  fontSize: "clamp(80px,13vw,170px)",
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.04)",
                  letterSpacing: "-0.02em",
                }}
              >
                BOARD
              </div>
              <div className="relative border-l-2 border-primary pl-6 max-w-xs ml-auto">
                <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                  Industry leaders and strategic experts guiding the future of the organization.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  background: "#0d1420",
                  aspectRatio: "3 / 4",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Photo */}
                <div className="absolute inset-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain object-bottom group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Permanent gradient + name overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-24 pb-5 px-5">
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-tight mb-1.5">
                    {member.role}
                  </p>
                  <h3
                    className="font-display font-black uppercase italic text-white leading-[0.9]"
                    style={{ fontSize: "clamp(24px,3vw,38px)" }}
                  >
                    {member.name.split(" ").map((word, j) => (
                      <span key={j} className="block">{word}</span>
                    ))}
                  </h3>
                </div>

                {/* Hover overlay — strategic profile slides up from bottom */}
                <div
                  className="absolute inset-0 z-20 flex flex-col justify-end p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  style={{ background: "rgba(8,10,16,0.94)" }}
                >
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest leading-tight mb-2">
                    {member.role}
                  </p>
                  <h3
                    className="font-display font-black uppercase italic text-white leading-[0.9] mb-4"
                    style={{ fontSize: "clamp(22px,2.6vw,32px)" }}
                  >
                    {member.name.split(" ").map((word, j) => (
                      <span key={j} className="block">{word}</span>
                    ))}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {member.strategicProfile}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Elite Experts ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#111114" }}>
        {/* Ghost watermark */}
        <div
          className="absolute -top-4 left-0 font-display font-black uppercase italic select-none pointer-events-none"
          style={{
            fontSize: "clamp(80px,16vw,220px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.02em",
          }}
        >
          COACH
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="section-label mb-4">PROFESSIONAL NETWORK</div>
              <h2
                className="font-display font-black uppercase italic leading-[0.88]"
                style={{ fontSize: "clamp(44px,7vw,90px)" }}
              >
                <span className="text-white">ELITE </span>
                <span style={{ color: "rgba(255,255,255,0.18)" }}>EXPERTS.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-l-2 border-primary pl-6 max-w-xs ml-auto"
            >
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                World-class coaches and football professionals bringing decades of on-pitch experience.
              </p>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {eliteExperts.map((expert, i) => (
              <motion.div
                key={expert.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden"
                style={{
                  background: "#0d1420",
                  aspectRatio: "3 / 4",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Photo */}
                <div className="absolute inset-0">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Years exp badge */}
                <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {expert.experience}
                </div>

                {/* Bottom gradient + name overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent pt-24 pb-5 px-5">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Building2 size={10} className="text-primary shrink-0" />
                    <span className="text-white/55 text-[10px] font-black uppercase tracking-widest leading-none">
                      {expert.role}
                    </span>
                  </div>
                  <h3
                    className="font-display font-black uppercase italic text-white leading-[0.9]"
                    style={{ fontSize: "clamp(26px,3vw,38px)" }}
                  >
                    {expert.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Talent Sponsors ── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "#0a0a0b" }}>
        {/* Ghost watermark — bottom right */}
        <div
          className="absolute bottom-0 right-0 font-display font-black uppercase italic select-none pointer-events-none"
          style={{
            fontSize: "clamp(60px,13vw,190px)",
            lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.02em",
          }}
        >
          SPONSORS
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="section-label mb-4">SUPPORTING THE ATHLETES</div>
              <h2
                className="font-display font-black uppercase italic leading-[0.88]"
                style={{ fontSize: "clamp(44px,7vw,90px)" }}
              >
                <span className="text-white">TALENT </span>
                <span className="text-primary">SPONSORS.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="border-l-2 border-primary pl-6 max-w-xs ml-auto"
            >
              <p className="text-slate-400 text-base lg:text-lg leading-relaxed">
                The organizations and individuals directly funding and supporting the players and teams across our platform.
              </p>
            </motion.div>
          </div>

          {/* Corporate Sponsors */}
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-8">
              <Building2 size={15} className="text-primary" />
              <h3 className="font-display font-black uppercase text-white tracking-[0.18em] text-sm">CORPORATE SPONSORS</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {corporateSponsors.map((sponsor, i) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative rounded-2xl overflow-hidden"
                  style={{ aspectRatio: "1 / 1", background: "#15151a", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)" }}
                >
                  {/* Logo area */}
                  <div
                    className="absolute inset-3 rounded-xl flex items-center justify-center"
                    style={{ background: sponsor.bg }}
                  >
                    <span
                      className="font-display font-black uppercase text-center px-2 leading-tight"
                      style={{
                        fontSize: "clamp(11px,1.4vw,15px)",
                        color: sponsor.bg === "#ffffff" ? "#111" : "#fff",
                      }}
                    >
                      {sponsor.name}
                    </span>
                  </div>
                  {/* Badge */}
                  <div className="absolute top-2 right-2 z-10 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full">
                    {sponsor.type}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Individual Backers */}
          <div className="mb-16">
            <div className="flex items-center gap-2.5 mb-8">
              <User size={15} className="text-primary" />
              <h3 className="font-display font-black uppercase text-white tracking-[0.18em] text-sm">INDIVIDUAL BACKERS</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
              {individualBackers.map((backer, i) => (
                <motion.div
                  key={backer.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl overflow-hidden"
                  style={{
                    background: "#0d1420",
                    aspectRatio: "3 / 4",
                    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={backer.image}
                      alt={backer.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  {/* Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10 bg-black/70 backdrop-blur-sm text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                    BACKER
                  </div>
                  {/* Name overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-4 px-4">
                    <h3
                      className="font-display font-black uppercase italic text-white leading-[0.9]"
                      style={{ fontSize: "clamp(18px,2.2vw,26px)" }}
                    >
                      {backer.name}
                    </h3>
                    <p className="text-slate-400 text-[11px] mt-1">{backer.profession}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA bar */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t pt-8"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-slate-500 text-xs uppercase tracking-widest">
              Interested in partnership opportunities?
            </p>
            <Link
              href="/contact"
              className="text-primary text-xs font-black uppercase tracking-widest flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
            >
              CONTACT BOARD <ArrowRight size={12} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
