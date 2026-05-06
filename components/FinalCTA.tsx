"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold/[0.05] rounded-full blur-[100px] animate-pulse-glow pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
          The Next Wave
        </motion.span>

        <motion.h2
          className="font-display text-display-xl font-400 text-text-primary mt-6 mb-8 leading-[0.93]"
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          The next wave of AI value<br />won&apos;t be loud.<br />
          <span className="italic gold-text-animate">It will be profitable.</span>
        </motion.h2>

        <motion.p
          className="font-body text-xl text-text-secondary max-w-xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.25 }}>
          While everyone chases the next unicorn, we&apos;re building companies that generate real revenue, real margins, and real staying power.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.35 }}>
          <button
            onClick={() => { const el = document.querySelector("#apply"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
            className="group inline-flex items-center gap-3 bg-gold text-background font-body text-sm font-700 tracking-[0.15em] uppercase px-12 py-5 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,67,0.5)]">
            Apply Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 }}>
          <div className="w-16 h-px bg-gold/25" />
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-text-muted">
            Launch Dream LLC · Washington DC Metro Area
          </span>
          <div className="w-16 h-px bg-gold/25" />
        </motion.div>
      </div>
    </section>
  );
}
