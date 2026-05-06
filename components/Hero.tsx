"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "$1M–$5M", label: "Target ARR" },
  { value: "3–5", label: "Team size" },
  { value: "< 12mo", label: "To revenue" },
  { value: "Profit-first", label: "Always" },
];

function scrollTo(id: string) { document.querySelector(id)?.scrollIntoView({ behavior: "smooth" }); }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20 bg-white">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      {/* Soft gradient zones */}
      <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-sky-50 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      {/* Decorative rings — right side */}
      <div className="absolute top-20 right-8 md:right-20 opacity-[0.07] pointer-events-none hidden lg:block">
        <svg width="380" height="380" viewBox="0 0 380 380" fill="none">
          <circle cx="190" cy="190" r="170" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="8 12"/>
          <circle cx="190" cy="190" r="120" stroke="#2563EB" strokeWidth="1" strokeDasharray="5 9"/>
          <circle cx="190" cy="190" r="70" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 6"/>
          <circle cx="190" cy="190" r="25" fill="#2563EB" opacity="0.4"/>
          <line x1="20" y1="190" x2="360" y2="190" stroke="#2563EB" strokeWidth="0.8" opacity="0.5"/>
          <line x1="190" y1="20" x2="190" y2="360" stroke="#2563EB" strokeWidth="0.8" opacity="0.5"/>
          <circle cx="190" cy="20" r="5" fill="#2563EB"/>
          <circle cx="360" cy="190" r="5" fill="#2563EB"/>
          <circle cx="190" cy="360" r="5" fill="#0891B2"/>
          <circle cx="20" cy="190" r="5" fill="#0891B2"/>
        </svg>
      </div>

      {/* Large faded logo arcs as background motif */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.04] pointer-events-none hidden md:block">
        <svg width="600" height="500" viewBox="0 0 52 54" fill="none" preserveAspectRatio="xMidYMid meet">
          <path d="M2,52 Q2,8 40,2"    stroke="#1565C0" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M6,52 Q6,13 40,8"   stroke="#6A1B9A" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M11,52 Q11,19 40,14" stroke="#2E7D32" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M16,52 Q16,25 40,20" stroke="#E65100" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M21,52 Q21,31 40,26" stroke="#C62828" strokeWidth="7" strokeLinecap="round" fill="none"/>
        </svg>
      </div>

      <div className="section-padding pb-16 md:pb-24 relative z-10">
        {/* Label */}
        <motion.div className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-soft"/>
          <div className="w-8 h-px bg-blue-600"/>
          <span className="section-label">AI Venture Studio</span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1 className="font-display text-display-xl font-400 text-slate-900 leading-[0.93] mb-6"
            initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16,1,0.3,1] }}>
            Most people think
            <br />
            <span className="italic">AI </span><span className="italic shimmer-text">= unicorns.</span>
            <br />
            <span className="text-slate-400 font-300">We build </span>
            <span className="relative">
              profitable
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400"/>
            </span>
            <br />companies.
          </motion.h1>

          <motion.p className="font-body text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-3"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            Small teams. Real revenue. Built for profit — not fundraising.
          </motion.p>
          <motion.p className="font-body text-lg text-slate-500 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            We partner with domain experts and AI engineers to launch focused, high-margin AI businesses in under 12 months.
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <button onClick={() => scrollTo("#apply")}
              className="group flex items-center justify-center gap-3 bg-blue-600 text-white font-body text-sm font-700 tracking-[0.12em] uppercase px-8 py-4 hover:bg-blue-700 transition-all shadow-md w-full sm:w-auto">
              Apply to Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </button>
            <button onClick={() => scrollTo("#model")}
              className="group flex items-center justify-center gap-3 font-body text-sm font-600 tracking-[0.12em] uppercase text-slate-700 border-2 border-slate-200 px-8 py-4 hover:border-blue-400 hover:text-blue-600 transition-all w-full sm:w-auto">
              Explore the Model
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"/>
            </button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.75 }}>
          {stats.map((s, i) => (
            <div key={i} className="group">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-500 italic text-slate-800 group-hover:text-blue-600 transition-colors mb-2">{s.value}</div>
              <div className="font-mono text-sm tracking-[0.18em] uppercase text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-40"
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.2 }}>
        <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce"/>
      </motion.div>
    </section>
  );
}
