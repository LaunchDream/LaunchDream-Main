"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { value: "$1M–$5M", label: "Target ARR" },
  { value: "3–5", label: "Team size" },
  { value: "< 12mo", label: "To revenue" },
  { value: "Profit-first", label: "Always" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20 bg-white">

      {/* Hero background: subtle dot grid + gradient zones */}
      <div className="absolute inset-0 hero-pattern opacity-60" />

      {/* Soft blue glow zones */}
      <div className="absolute top-20 right-0 w-[600px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[80px] pointer-events-none" />

      {/* Decorative abstract SVG — right side */}
      <div className="absolute top-24 right-8 md:right-16 opacity-10 pointer-events-none hidden lg:block">
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          {/* Concentric rings */}
          <circle cx="160" cy="160" r="140" stroke="#2563EB" strokeWidth="1" strokeDasharray="6 10"/>
          <circle cx="160" cy="160" r="100" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 8"/>
          <circle cx="160" cy="160" r="60" stroke="#0891B2" strokeWidth="1" strokeDasharray="3 6"/>
          <circle cx="160" cy="160" r="20" fill="#2563EB" opacity="0.3"/>
          {/* Axis lines */}
          <line x1="20" y1="160" x2="300" y2="160" stroke="#2563EB" strokeWidth="0.75" opacity="0.6"/>
          <line x1="160" y1="20" x2="160" y2="300" stroke="#2563EB" strokeWidth="0.75" opacity="0.6"/>
          {/* Diagonal */}
          <line x1="60" y1="60" x2="260" y2="260" stroke="#0891B2" strokeWidth="0.5" opacity="0.4"/>
          <line x1="260" y1="60" x2="60" y2="260" stroke="#0891B2" strokeWidth="0.5" opacity="0.4"/>
          {/* Nodes */}
          <circle cx="160" cy="20" r="4" fill="#2563EB"/>
          <circle cx="300" cy="160" r="4" fill="#2563EB"/>
          <circle cx="160" cy="300" r="4" fill="#0891B2"/>
          <circle cx="20" cy="160" r="4" fill="#0891B2"/>
        </svg>
      </div>

      {/* Decorative bottom-left nodes */}
      <div className="absolute bottom-32 left-4 md:left-12 opacity-8 pointer-events-none hidden md:block">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <circle cx="20" cy="80" r="4" fill="#2563EB" opacity="0.4"/>
          <circle cx="80" cy="20" r="4" fill="#2563EB" opacity="0.4"/>
          <circle cx="140" cy="80" r="4" fill="#0891B2" opacity="0.4"/>
          <circle cx="80" cy="140" r="4" fill="#0891B2" opacity="0.4"/>
          <line x1="20" y1="80" x2="80" y2="20" stroke="#2563EB" strokeWidth="1" opacity="0.3"/>
          <line x1="80" y1="20" x2="140" y2="80" stroke="#2563EB" strokeWidth="1" opacity="0.3"/>
          <line x1="140" y1="80" x2="80" y2="140" stroke="#0891B2" strokeWidth="1" opacity="0.3"/>
          <line x1="80" y1="140" x2="20" y2="80" stroke="#0891B2" strokeWidth="1" opacity="0.3"/>
        </svg>
      </div>

      <div className="section-padding pb-16 md:pb-24 relative z-10">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse-soft" />
            <div className="w-8 h-px bg-blue-600" />
          </div>
          <span className="font-mono text-sm font-500 tracking-[0.25em] uppercase text-blue-600">
            AI Venture Studio
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            className="font-display text-display-xl font-400 text-slate-900 leading-[0.93] mb-6"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Most people think
            <br />
            <span className="italic">AI </span>
            <span className="italic gold-text-animate">= unicorns.</span>
            <br />
            <span className="text-slate-400 font-300">We build </span>
            <span className="relative text-slate-900">
              profitable
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400" />
            </span>
            <br />
            <span className="text-slate-900">companies.</span>
          </motion.h1>

          <motion.p
            className="font-body text-xl md:text-2xl font-400 text-slate-500 max-w-2xl leading-relaxed mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Small teams. Real revenue. Built for profit — not fundraising.
          </motion.p>
          <motion.p
            className="font-body text-lg text-slate-400 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We partner with domain experts and AI engineers to launch focused,
            high-margin AI businesses in under 12 months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => scrollTo("#apply")}
              className="group flex items-center justify-center gap-3 bg-blue-600 text-white font-body text-sm font-700 tracking-[0.12em] uppercase px-8 py-4 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-blue-glow w-full sm:w-auto"
            >
              Apply to Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#model")}
              className="group flex items-center justify-center gap-3 font-body text-sm font-600 tracking-[0.12em] uppercase text-slate-600 border-2 border-slate-200 px-8 py-4 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 w-full sm:w-auto"
            >
              Explore the Model
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-500 italic text-slate-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
