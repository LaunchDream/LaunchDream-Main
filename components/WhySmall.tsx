"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Focused niches win",
    body: "Small markets that large companies ignore. Deep expertise generalists can't replicate. Clear budgets and identifiable buyers from day one.",
  },
  {
    number: "02",
    title: "Faster path to revenue",
    body: "No 18-month enterprise sales cycles. No VC runways demanding hypergrowth. First dollar in under 90 days, first million in under 12 months.",
  },
  {
    number: "03",
    title: "Less operational complexity",
    body: "Three people who own the problem beat thirty who manage a process. Small means decisions happen in hours, not quarters.",
  },
  {
    number: "04",
    title: "Higher probability of success",
    body: "Most startups die chasing scale before finding product-market fit. We find fit first. Profitable beats fundable — every time.",
  },
];

export default function WhySmall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs tracking-[0.28em] uppercase text-gold">The Thesis</span>
            <h2 className="font-display text-display-md font-400 text-text-primary italic mt-5 leading-tight">
              Why small is a{" "}
              <span className="gold-text">strategy</span>,
              <br />not a limitation.
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-gold to-transparent" />
            <p className="mt-6 font-body text-base text-text-secondary leading-relaxed max-w-sm">
              The world optimizes for size. We optimize for fit, margin, and
              durability. Focused beats broad — every time.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              className="group p-8 border border-border-subtle hover:border-gold/40 bg-surface/60 hover:bg-surface-2 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/[0.06] to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold to-transparent transition-all duration-500" />

              <span className="font-mono text-xs tracking-[0.22em] uppercase text-text-muted group-hover:text-gold transition-colors duration-300">
                {item.number}
              </span>
              <h3 className="font-body text-lg font-700 text-text-primary mt-4 mb-3">
                {item.title}
              </h3>
              <p className="font-body text-base text-text-secondary leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
