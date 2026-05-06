"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roles = [
  { icon: "◈", title: "Domain Operators", description: "Deep industry expertise, real problems, and customer access. They know what breaks, what gets paid for, and who signs the check.", color: "from-amber-500/8" },
  { icon: "◎", title: "AI Engineers", description: "Builders who turn workflows into production systems. Engineers who ship fast, iterate relentlessly, and own the technical outcome.", color: "from-cyan/8" },
  { icon: "◇", title: "Aligned Capital", description: "Focused funding to reach revenue quickly. Small checks, high conviction. Investors who measure success by profit, not valuation.", color: "from-emerald-500/8" },
  { icon: "◉", title: "Customers & Design Partners", description: "Early adopters who shape the product and validate real demand. They bring budgets, feedback, and credibility — not just a wishlist.", color: "from-purple-500/8" },
  { icon: "△", title: "Strategic Partners", description: "Organizations, universities, and industry groups that accelerate distribution, data access, or credibility. Relationships available from day one.", color: "from-gold/8" },
];

export default function OurModel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-cyan/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative z-10">
        <div>
          <motion.span className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}>
            How We Build
          </motion.span>
          <motion.h2 className="font-display text-display-lg font-400 text-text-primary mt-5 leading-tight"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            The Launch Dream<br /><span className="italic text-text-secondary">structure.</span>
          </motion.h2>
        </div>
        <motion.div className="flex items-end"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="font-body text-base text-text-secondary leading-relaxed border-l-2 border-gold/35 pl-5">
            Every company is structured differently — ownership and incentives are aligned to contribution and speed to profitability. We build the right team for the right problem.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {roles.map((role, i) => (
          <motion.div
            key={i}
            className={`group relative p-8 border border-border-subtle hover:border-gold/30 bg-gradient-to-br ${role.color} to-transparent hover:scale-[1.02] transition-all duration-400`}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
          >
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold to-transparent transition-all duration-500" />
            <span className="font-mono text-4xl text-text-muted group-hover:text-gold/50 transition-colors duration-300">{role.icon}</span>
            <h3 className="font-body text-base font-700 text-text-primary mt-5 mb-3 uppercase tracking-wider">{role.title}</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{role.description}</p>
          </motion.div>
        ))}

        <motion.div
          className="sm:col-span-2 lg:col-span-3 p-8 border border-gold/20 bg-gradient-to-r from-gold/[0.06] to-transparent"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.65 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Contribution-based ownership", desc: "Equity reflects what you bring — expertise, code, capital, or customers." },
              { label: "Speed to profitability", desc: "Every decision is made with revenue in mind. Growth follows profit, not the other way." },
              { label: "Small by design", desc: "We add people only when they unlock revenue or protect margin. Headcount is a cost, not a signal." },
            ].map((p) => (
              <div key={p.label}>
                <div className="font-mono text-xs tracking-[0.18em] uppercase text-gold mb-2">{p.label}</div>
                <div className="font-body text-base text-text-secondary leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
