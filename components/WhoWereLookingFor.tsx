"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const profiles = [
  {
    title: "Domain Experts",
    tag: "Operators",
    criteria: ["10+ years in a specific industry or function", "Direct access to potential customers", "A clear problem you've lived with for years", "Credibility that opens doors"],
    note: "You bring the problem. We bring the solution.",
    equity: "40–45%",
  },
  {
    title: "Founding AI Engineers",
    tag: "Builders",
    criteria: ["Production AI/ML experience — not just fine-tuning", "Ability to own the full technical stack", "Bias for shipping over perfecting", "Interested in equity, not just a salary"],
    note: "You build the system. We find the market.",
    equity: "25–30%",
  },
  {
    title: "Angel Investors",
    tag: "Capital",
    criteria: ["Patient, long-term capital orientation", "Understand the $1M–$5M ARR model", "Value profit over paper valuations", "Able to contribute more than money"],
    note: "We are selective. We return capital, not just stories.",
    equity: "10–20%",
  },
  {
    title: "Strategic & University Partners",
    tag: "Ecosystem",
    criteria: ["Relevant data access or distribution", "Credibility in a specific vertical", "Interest in applied AI commercialization", "Long-term relationship orientation"],
    note: "We build ventures, not pilots. Partners must be serious.",
    equity: "Case by case",
  },
];

export default function WhoWereLookingFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle bg-surface/15 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-3xl mb-16 relative z-10">
        <motion.span className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
          Who We Work With
        </motion.span>
        <motion.h2 className="font-display text-display-lg font-400 text-text-primary mt-5 leading-tight"
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
          We are selective.<br /><span className="italic text-text-secondary">By design.</span>
        </motion.h2>
        <motion.p className="mt-5 font-body text-lg text-text-secondary leading-relaxed max-w-lg"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          We work with a small number of highly qualified contributors per venture. If you don&apos;t meet the criteria, we won&apos;t waste your time.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 relative z-10">
        {profiles.map((profile, i) => (
          <motion.div
            key={i}
            className="group p-8 border border-border-subtle hover:border-gold/35 transition-all duration-500 relative overflow-hidden bg-surface/40"
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-gold/[0.05] to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-gold to-transparent transition-all duration-500" />

            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold border border-gold/30 px-2.5 py-1.5">{profile.tag}</span>
                <h3 className="font-body text-xl font-700 text-text-primary mt-3">{profile.title}</h3>
              </div>
              <div className="text-right">
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-text-muted">Equity range</div>
                <div className="font-display text-2xl font-500 text-gold italic mt-1">{profile.equity}</div>
              </div>
            </div>
            <div className="gold-line mb-6" />
            <ul className="space-y-3 mb-6">
              {profile.criteria.map((item, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gold rounded-full shrink-0 mt-2.5" />
                  <span className="font-body text-base text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border-subtle">
              <p className="font-mono text-xs tracking-[0.12em] text-text-muted italic">{profile.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 border border-gold/25 bg-gradient-to-r from-gold/[0.07] to-transparent relative z-10"
        initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.6 }}>
        <div>
          <p className="font-body text-lg font-600 text-text-primary">Think you qualify?</p>
          <p className="font-body text-base text-text-secondary mt-1">Applications reviewed personally. Response time: 1–2 weeks.</p>
        </div>
        <button onClick={() => { const el = document.querySelector("#apply"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
          className="group flex items-center gap-2 mt-5 sm:mt-0 bg-gold text-background font-body text-sm font-700 tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,67,0.35)] shrink-0 w-full sm:w-auto justify-center">
          Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
