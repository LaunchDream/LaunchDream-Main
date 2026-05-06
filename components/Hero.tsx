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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-20">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-100" />

      {/* Mesh gradients */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Large glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/[0.06] rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-cyan/[0.04] rounded-full blur-[100px] animate-pulse-glow pointer-events-none" style={{animationDelay: '1.5s'}} />

      {/* Decorative geometric lines */}
      <div className="absolute top-24 right-8 md:right-20 opacity-20 pointer-events-none hidden md:block">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="#D4A843" strokeWidth="0.5" strokeDasharray="4 8"/>
          <circle cx="100" cy="100" r="50" stroke="#4DE1C1" strokeWidth="0.5" strokeDasharray="2 6"/>
          <circle cx="100" cy="100" r="20" stroke="#D4A843" strokeWidth="0.5"/>
          <line x1="20" y1="100" x2="180" y2="100" stroke="#D4A843" strokeWidth="0.5" opacity="0.5"/>
          <line x1="100" y1="20" x2="100" y2="180" stroke="#D4A843" strokeWidth="0.5" opacity="0.5"/>
        </svg>
      </div>

      <div className="section-padding pb-16 md:pb-24 relative z-10">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <div className="w-8 h-px bg-gold" />
          </div>
          <span className="font-mono text-xs font-500 tracking-[0.28em] uppercase text-gold">
            AI Venture Studio
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <motion.h1
            className="font-display text-display-xl font-400 text-text-primary leading-[0.93] mb-6"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Most people think
            <br />
            <span className="italic">AI</span>{" "}
            <span className="gold-text-animate italic">= unicorns.</span>
            <br />
            <span className="text-text-secondary font-300">We build</span>{" "}
            <span className="relative">
              profitable
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-gold to-cyan opacity-60" />
            </span>
            <br />
            companies.
          </motion.h1>

          <motion.p
            className="font-body text-xl md:text-2xl font-400 text-text-secondary max-w-2xl leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Small teams. Real revenue. Built for profit — not fundraising.
          </motion.p>
          <motion.p
            className="font-body text-base md:text-lg text-text-muted max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            We partner with domain experts and AI engineers to launch focused,
            high-margin AI businesses in under 12 months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => scrollTo("#apply")}
              className="group flex items-center gap-3 bg-gold text-background font-body text-sm font-700 tracking-[0.12em] uppercase px-8 py-4 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.4)] w-full sm:w-auto justify-center sm:justify-start"
            >
              Apply to Build With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#model")}
              className="group flex items-center gap-3 font-body text-sm font-600 tracking-[0.12em] uppercase text-text-secondary border border-border-medium px-8 py-4 hover:text-text-primary hover:border-gold/40 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
            >
              Explore the Model
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-500 text-text-primary italic group-hover:text-gold transition-colors duration-300 mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-400 tracking-[0.18em] uppercase text-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <ChevronDown className="w-5 h-5 text-text-muted animate-bounce" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
