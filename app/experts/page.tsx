"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Star, ArrowRight, X } from "lucide-react";
import { experts } from "@/lib/data";

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
    <div className="min-h-screen bg-white pt-20">

      {/* Hero */}
      <section className="relative py-20 lg:py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="section-label mb-4">MENTORSHIP</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black text-[clamp(48px,7vw,90px)] uppercase leading-[0.9] mb-4 text-slate-900"
          >
            FIND YOUR<br />
            <span className="text-primary italic">EXPERT.</span>
          </motion.h1>
          <p className="text-slate-600 text-[17px] leading-[1.75] max-w-lg">
            Browse our curated directory of certified coaches, analysts, and performance experts worldwide.
          </p>
        </div>
      </section>

      {/* Sticky search & filters */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 items-center">
            <div className="relative flex-1 max-w-lg">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                className="input-field pl-11 !py-3"
                placeholder="Search experts, specializations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                  <X size={14} />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                showFilters ? "border-primary bg-red-50 text-primary" : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
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
              className="input-field !py-3 !w-auto min-w-[160px] appearance-none bg-white"
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
                    <span className="text-xs text-slate-400 self-center font-semibold uppercase tracking-wider">License:</span>
                    {licenses.map((l) => (
                      <button key={l} onClick={() => setLicense(l)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${license === l ? "border-primary bg-red-50 text-primary" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>
                        {l}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs text-slate-400 self-center font-semibold uppercase tracking-wider">Specialization:</span>
                    {specs.map((s) => (
                      <button key={s} onClick={() => setSpec(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${spec === s ? "border-primary bg-red-50 text-primary" : "border-slate-200 text-slate-600 hover:border-slate-300"}`}>
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
            <span className="text-slate-900 font-bold">{filtered.length}</span> expert{filtered.length !== 1 && "s"} found
          </p>
          {activeFilters.length > 0 && (
            <button onClick={() => { setLicense("All"); setSpec("All"); }} className="text-xs text-primary hover:text-red-700 transition-colors flex items-center gap-1">
              <X size={11} /> Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-slate-400" />
            </div>
            <h3 className="font-display font-black text-2xl text-slate-900 mb-3">NO RESULTS FOUND</h3>
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
                  <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300">
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <Image src={expert.image} alt={expert.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`badge text-[10px] ${expert.license === "UEFA Pro" ? "badge-gold" : "badge-red"}`}>{expert.license}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(5)].map((_, j) => <Star key={j} size={10} fill={j < Math.floor(expert.rating) ? "currentColor" : "none"} />)}
                          <span className="text-[11px] text-white/80 ml-1">{expert.rating} ({expert.reviews})</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base">{expert.flag}</span>
                        <h3 className="font-bold text-slate-900">{expert.name}</h3>
                      </div>
                      <p className="text-[13px] text-slate-600 mb-3 leading-relaxed">{expert.title}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {expert.specializations.slice(0, 2).map((s) => (
                          <span key={s} className="badge badge-white text-[10px]">{s}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                        <div>
                          <span className="text-xs text-slate-400">From </span>
                          <span className="font-display font-black text-xl text-slate-900">£{expert.price}</span>
                          <span className="text-xs text-slate-400">/session</span>
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
    </div>
  );
}
