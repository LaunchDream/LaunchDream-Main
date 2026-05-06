"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const contrastRows = [
  { wrong: "Raise $5M, burn 3 years, hope for exit", right: "Profit-first from day one" },
  { wrong: "18-month enterprise sales cycles", right: "Buyers who have the budget today" },
  { wrong: "Viral consumer bets with zero predictability", right: "Narrow niches with clear ROI" },
  { wrong: "Generic AI layered on broken processes", right: "Buyer-informed design from the start" },
  { wrong: "50-person team before product-market fit", right: "3–5 person teams who own everything" },
  { wrong: "Build for valuation", right: "Build for margin" },
];

export default function WhyWeWin() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
          >
            The Difference
          </motion.span>
          <motion.h2
            className="font-display text-display-lg font-400 text-text-primary mt-5"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why we win.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div className="flex items-center gap-3 pb-4 border-b border-border-subtle"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 }}>
            <div className="w-7 h-7 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
              <X className="w-3.5 h-3.5 text-red-400" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-red-400/70">Conventional playbook</span>
          </motion.div>
          <motion.div className="flex items-center gap-3 pb-4 border-b border-gold/30"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.2 }}>
            <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-gold" />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-gold">Launch Dream approach</span>
          </motion.div>

          {contrastRows.map((row, i) => (
            <>
              <motion.div key={`w-${i}`}
                className="flex items-start gap-3 py-5 border-b border-border-subtle"
                initial={{ opacity: 0, x: -12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}>
                <X className="w-4 h-4 text-red-400/40 shrink-0 mt-1" />
                <span className="font-body text-base text-text-muted leading-relaxed line-through decoration-text-muted/30">{row.wrong}</span>
              </motion.div>
              <motion.div key={`r-${i}`}
                className="flex items-start gap-3 py-5 border-b border-gold/10 bg-gold/[0.025] px-4"
                initial={{ opacity: 0, x: 12 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}>
                <Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span className="font-body text-base text-text-primary leading-relaxed">{row.right}</span>
              </motion.div>
            </>
          ))}
        </div>

        <motion.div
          className="mt-16 p-10 md:p-14 border border-gold/25 bg-gradient-to-r from-gold/[0.06] to-transparent relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/60 via-gold/20 to-transparent" />
          <p className="font-display text-display-sm font-400 italic text-text-primary leading-tight max-w-3xl">
            &ldquo;We build from the mindset of the buyer — not the seller. That changes everything about how a product gets designed.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-px bg-gold" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-text-secondary">
              Nitin Pradhan, Founder — Launch Dream
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
