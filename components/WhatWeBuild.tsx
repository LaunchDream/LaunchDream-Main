"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const types = [
  {
    icon: "◈",
    title: "Domain-Specific AI Agents",
    subtitle: "Systems that execute real workflows — not chatbots",
    description: "Autonomous systems that handle end-to-end workflows in a single vertical. They replace headcount, reduce error rates, and work 24/7. Built around process knowledge that generalist AI can't replicate.",
    tag: "Workflow Automation",
    color: "gold",
  },
  {
    icon: "⚙",
    title: "Workflow-to-Product Systems",
    subtitle: "We turn repetitive processes into scalable software",
    description: "Every expert has workflows they repeat hundreds of times. We productize them. What took hours becomes seconds. What required expertise becomes accessible. What was manual becomes margin.",
    tag: "Process Automation",
    color: "cyan",
  },
  {
    icon: "◉",
    title: "Private / Controlled AI",
    subtitle: "Secure, cost-efficient AI for sensitive environments",
    description: "Healthcare, legal, finance, and government can't put sensitive data through public APIs. We build contained, auditable AI systems for regulated and compliance-driven industries.",
    tag: "Secure AI",
    color: "gold",
  },
  {
    icon: "▦",
    title: "Vertical AI Platforms",
    subtitle: "Deep solutions built for a single industry",
    description: "A single industry, fully owned. We go deeper than any horizontal platform can afford. The moat is specificity: data models, workflows, and terminology only insiders understand.",
    tag: "Vertical Depth",
    color: "cyan",
  },
  {
    icon: "◆",
    title: "Revenue-First Products",
    subtitle: "Every product tied to clear ROI",
    description: "We don't build features. We build measurable outcomes. Every product is designed around a budget line that already exists — replacing something worse, not creating new spend.",
    tag: "ROI-Tied",
    color: "gold",
  },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="model" ref={ref} className="section-padding py-section border-t border-border-subtle bg-surface/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-cyan/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mb-14 relative z-10">
        <motion.span
          className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
        >
          What We Build
        </motion.span>
        <motion.h2
          className="font-display text-display-lg font-400 text-text-primary mt-5 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Five types of companies.
          <br />
          <span className="italic text-text-secondary">One standard.</span>
        </motion.h2>
        <motion.p
          className="mt-6 font-body text-lg text-text-secondary max-w-xl leading-relaxed border-l-2 border-gold/40 pl-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We&apos;re not building demos. We&apos;re building systems that replace workflows, budgets, and manual operations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        <div className="lg:col-span-5 space-y-2">
          {types.map((type, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full text-left p-5 border transition-all duration-300 relative ${
                active === i
                  ? "border-gold/50 bg-surface-2"
                  : "border-border-subtle hover:border-border-medium bg-transparent hover:bg-surface/50"
              }`}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            >
              {active === i && (
                <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold" layoutId="activeBar" />
              )}
              <div className="flex items-start gap-4">
                <span className={`font-mono text-2xl mt-0.5 transition-colors duration-300 ${active === i ? "text-gold" : "text-text-muted"}`}>
                  {type.icon}
                </span>
                <div>
                  <div className={`font-body text-base font-600 transition-colors duration-300 ${active === i ? "text-text-primary" : "text-text-secondary"}`}>
                    {type.title}
                  </div>
                  <div className="font-body text-sm text-text-muted mt-1 leading-relaxed">{type.subtitle}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="lg:col-span-7">
          <motion.div
            key={active}
            className="sticky top-24 p-10 border border-gold/20 bg-gradient-to-br from-surface-2 to-background glow-gold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-6xl text-gold/25">{types[active].icon}</span>
              <span className={`font-mono text-xs tracking-[0.2em] uppercase border px-3 py-1.5 ${
                types[active].color === "cyan"
                  ? "text-cyan border-cyan/30 bg-cyan/5"
                  : "text-gold border-gold/30 bg-gold/5"
              }`}>
                {types[active].tag}
              </span>
            </div>
            <h3 className="font-display text-display-sm font-400 text-text-primary italic mb-4">
              {types[active].title}
            </h3>
            <p className="font-body text-base text-text-secondary leading-relaxed">
              {types[active].description}
            </p>
            <div className="mt-10 pt-6 border-t border-border-subtle">
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-text-muted">Target ARR range</p>
              <p className="font-display text-4xl font-500 text-gold italic mt-2">$1M — $5M</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
