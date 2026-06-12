"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, ArrowRight, X, Building2 } from "lucide-react";
import { experts, eliteExperts } from "@/lib/data";

const licenses = ["All", "UEFA Pro", "UEFA A", "UEFA B", "CAF A", "FA Licensed", "AFC Licensed"];
const specs = ["All", "Tactical Analysis", "Striker Development", "Technical Dribbling", "Youth Development", "Athletic Development", "Speed Training", "Goalkeeping", "Midfield Play", "Video Analysis", "Data Analytics"];
const sortOptions = [
  { value: "rating", label: "Top Rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "sessions", label: "Most Sessions" },
];

export default function ExpertsPage() {
  const [search, setSearch] = useState("");
  const [license, setLicense] = useState("All");
  const [spec, setSpec] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = [...experts];
    if (search) list = list.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.specializations.some((s) => s.toLowerCase().includes(search.toLowerCase())));
    if (license !== "All") list = list.filter((e) => e.license === license);
    if (spec !== "All") list = list.filter((e) => e.specializations.includes(spec));
    list.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "sessions") return b.sessions - a.sessions;
      return 0;
    });
    return list;
  }, [search, license, spec, sortBy]);

  const activeFilters = [license !== "All" && license, spec !== "All" && spec].filter(Boolean);

  return (
    <div className="min-h-screen pt-20" style={{ background: "#0a0a0b" }}>

      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: "#0a0a0b" }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-4">MENTORSHIP</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] mb-4 text-white"
          >
            FIND YOUR<br />
            <span className="text-primary italic">EXPERT.</span>
          </motion.h1>
          <p className="text-slate-400 text-[17px] leading-[1.75] max-w-lg">
            Browse our curated directory of certified coaches, analysts, and performance experts worldwide.
          </p>
        </div>
      </section>

      {/* Sticky search & filters */}
      <div
        className="sticky top-16 lg:top-20 z-30 backdrop-blur-xl border-b py-4"
        style={{ background: "rgba(10,10,11,0.95)", borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                className="input-field pl-11 !py-3"
                placeholder="Search experts, specializations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white">
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                showFilters ? "border-primary bg-red-500/10 text-primary" : "border-white/10 text-slate-400 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <SlidersHorizontal size={15} />
              Filters
              {activeFilters.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">{activeFilters.length}</span>
              )}
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field !py-3 !w-auto min-w-[160px] appearance-none"
            >
              {sortOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-500 self-center font-semibold uppercase tracking-wider">License:</span>
                    {licenses.map((l) => (
                      <button key={l} onClick={() => setLicense(l)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${license === l ? "border-primary bg-red-500/10 text-primary" : "border-white/10 text-slate-400 hover:border-white/20"}`}>
                        {l}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-500 self-center font-semibold uppercase tracking-wider">Specialization:</span>
                    {specs.map((s) => (
                      <button key={s} onClick={() => setSpec(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${spec === s ? "border-primary bg-red-500/10 text-primary" : "border-white/10 text-slate-400 hover:border-white/20"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-slate-500">
            <span className="text-white font-bold">{filtered.length}</span> expert{filtered.length !== 1 && "s"} found
          </p>
          {activeFilters.length > 0 && (
            <button onClick={() => { setLicense("All"); setSpec("All"); }} className="text-xs text-primary hover:text-red-400 transition-colors flex items-center gap-1">
              <X size={11} /> Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-4"
              style={{ background: "#15151a", borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Search size={24} className="text-slate-500" />
            </div>
            <h3 className="font-display font-black text-2xl text-white mb-3">NO RESULTS FOUND</h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">Try adjusting your filters or search terms to find more experts.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((expert, i) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <Link href={`/experts/${expert.id}`}>
                  <div
                    className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/15 hover:-translate-y-1.5 transition-all duration-300"
                    style={{ background: "#15151a" }}
                  >
                    <div className="relative h-52 overflow-hidden" style={{ background: "#1c1c22" }}>
                      <Image src={expert.image} alt={expert.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`badge text-[10px] ${expert.license === "UEFA Pro" ? "badge-gold" : "badge-red"}`}>{expert.license}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, j) => <Star key={j} size={10} fill={j < Math.floor(expert.rating) ? "currentColor" : "none"} />)}
                          <span className="text-[11px] text-white/60 ml-1">{expert.rating} ({expert.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{expert.flag}</span>
                        <h3 className="font-bold text-white">{expert.name}</h3>
                      </div>
                      <p className="text-[13px] text-slate-400 mb-3 leading-relaxed">{expert.title}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {expert.specializations.slice(0, 2).map((s) => (
                          <span key={s} className="badge badge-red text-[10px]">{s}</span>
                        ))}
                      </div>
                      <div
                        className="flex items-center justify-between border-t pt-4"
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                      >
                        <div>
                          <span className="text-xs text-slate-500">From </span>
                          <span className="font-display font-black text-xl text-white">£{expert.price}</span>
                          <span className="text-xs text-slate-500">/session</span>
                        </div>
                        <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          Book <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

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
    </div>
  );
}
