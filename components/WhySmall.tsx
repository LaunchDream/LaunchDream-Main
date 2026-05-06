"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const reasons = [
  { n:"01", title:"Focused niches win", body:"Small markets large companies ignore. Deep expertise generalists can't replicate. Clear budgets and identifiable buyers from day one." },
  { n:"02", title:"Faster path to revenue", body:"No 18-month enterprise sales cycles. No VC runways demanding hypergrowth. First dollar in under 90 days, first million in under 12 months." },
  { n:"03", title:"Less operational complexity", body:"Three people who own the problem beat thirty who manage a process. Small means decisions happen in hours, not quarters." },
  { n:"04", title:"Higher probability of success", body:"Most startups die chasing scale before finding product-market fit. We find fit first, then hold it. Profitable beats fundable — every time." },
];

export default function WhySmall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="section-padding py-section bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-4">
          <motion.div initial={{ opacity:0, x:-20 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.6 }}>
            <span className="section-label">The Thesis</span>
            <h2 className="font-display text-display-md font-400 text-slate-900 italic mt-5 leading-tight">
              Why small is a <span className="text-blue-600">strategy</span>,<br/>not a limitation.
            </h2>
            <div className="mt-6 w-16 h-0.5 bg-blue-600"/>
            <p className="mt-6 font-body text-lg text-slate-600 leading-relaxed max-w-sm">
              The world optimizes for size. We optimize for fit, margin, and durability. Focused beats broad — every time.
            </p>
          </motion.div>
        </div>
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div key={i}
              className="group p-8 border border-slate-200 hover:border-blue-300 bg-white hover:shadow-card transition-all duration-300 relative overflow-hidden"
              initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.5, delay:i*0.1 }}>
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-500"/>
              <span className="font-mono text-sm tracking-[0.2em] uppercase text-slate-400 group-hover:text-blue-600 transition-colors">{r.n}</span>
              <h3 className="font-body text-xl font-700 text-slate-900 mt-4 mb-3">{r.title}</h3>
              <p className="font-body text-base text-slate-600 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
