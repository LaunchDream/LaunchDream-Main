"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const types = [
  { icon:"◈", title:"Domain-Specific AI Agents", sub:"Systems that execute real workflows — not chatbots", desc:"Autonomous systems handling end-to-end workflows in a single vertical. They replace headcount, reduce errors, and work 24/7. Built on process knowledge generalist AI can't replicate.", tag:"Workflow Automation" },
  { icon:"⚙", title:"Workflow-to-Product Systems", sub:"Turning repetitive processes into scalable software", desc:"Every expert has workflows they repeat hundreds of times. We productize them. What took hours becomes seconds. What required expertise becomes accessible. What was manual becomes margin.", tag:"Process Automation" },
  { icon:"◉", title:"Private / Controlled AI", sub:"Secure, cost-efficient AI for sensitive environments", desc:"Healthcare, legal, finance, and government can't use public APIs for sensitive data. We build contained, auditable AI systems for regulated industries.", tag:"Secure AI" },
  { icon:"▦", title:"Vertical AI Platforms", sub:"Deep solutions built for a single industry", desc:"A single industry, fully owned. We go deeper than any horizontal platform. The moat is specificity: data models, workflows, and terminology only insiders understand.", tag:"Vertical Depth" },
  { icon:"◆", title:"Revenue-First Products", sub:"Every product tied to clear ROI", desc:"We don't build features. We build measurable outcomes. Every product is designed around a budget line that already exists — replacing something worse, not creating new spend.", tag:"ROI-Tied" },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  return (
    <section id="model" ref={ref} className="section-padding py-section bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mb-14">
        <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>What We Build</motion.span>
        <motion.h2 className="font-display text-display-lg font-400 text-slate-900 mt-5 leading-tight"
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
          Five types of companies.<br/><span className="italic text-slate-500">One standard.</span>
        </motion.h2>
        <motion.p className="mt-6 font-body text-lg text-slate-600 max-w-xl leading-relaxed border-l-2 border-blue-400 pl-5"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.2}}>
          We&apos;re not building demos. We&apos;re building systems that replace workflows, budgets, and manual operations.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-2">
          {types.map((t, i) => (
            <motion.button key={i} onClick={() => setActive(i)}
              className={`w-full text-left p-5 border transition-all duration-300 relative ${active===i ? "border-blue-300 bg-white shadow-card" : "border-slate-200 bg-white hover:border-slate-300"}`}
              initial={{opacity:0,x:-16}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.4,delay:0.1+i*0.08}}>
              {active===i && <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600" layoutId="bar"/>}
              <div className="flex items-start gap-4">
                <span className={`font-mono text-2xl mt-0.5 transition-colors ${active===i?"text-blue-600":"text-slate-400"}`}>{t.icon}</span>
                <div>
                  <div className={`font-body text-base font-700 transition-colors ${active===i?"text-slate-900":"text-slate-700"}`}>{t.title}</div>
                  <div className="font-body text-sm text-slate-500 mt-1">{t.sub}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        <div className="lg:col-span-7">
          <motion.div key={active} className="sticky top-24 p-10 border border-slate-200 bg-white shadow-card"
            initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.3}}>
            <div className="flex items-start justify-between mb-8">
              <span className="font-mono text-6xl text-slate-200">{types[active].icon}</span>
              <span className="font-mono text-xs tracking-[0.18em] uppercase text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5">{types[active].tag}</span>
            </div>
            <h3 className="font-display text-display-sm font-400 text-slate-900 italic mb-4">{types[active].title}</h3>
            <p className="font-body text-lg text-slate-600 leading-relaxed">{types[active].desc}</p>
            <div className="mt-10 pt-6 border-t border-slate-100">
              <p className="font-mono text-sm tracking-[0.15em] uppercase text-slate-500">Target ARR range</p>
              <p className="font-display text-4xl font-500 text-blue-600 italic mt-2">$1M — $5M</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
