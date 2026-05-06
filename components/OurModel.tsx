"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const roles = [
  { icon:"◈", title:"Domain Operators", desc:"Deep industry expertise, real problems, and customer access. They know what breaks, what gets paid for, and who signs the check.", border:"border-blue-200", bg:"bg-blue-50/50" },
  { icon:"◎", title:"AI Engineers", desc:"Builders who turn workflows into production systems. Engineers who ship fast, iterate relentlessly, and own the technical outcome.", border:"border-sky-200", bg:"bg-sky-50/50" },
  { icon:"◇", title:"Aligned Capital", desc:"Focused funding to reach revenue quickly. Small checks, high conviction. Investors who measure success by profit, not valuation.", border:"border-slate-200", bg:"bg-slate-50" },
  { icon:"◉", title:"Customers & Design Partners", desc:"Early adopters who shape the product and validate real demand. They bring budgets, feedback, and credibility — not just a wishlist.", border:"border-slate-200", bg:"bg-slate-50" },
  { icon:"△", title:"Strategic Partners", desc:"Organizations, universities, and industry groups that accelerate distribution, data access, or credibility. Relationships available from day one.", border:"border-blue-200", bg:"bg-blue-50/50" },
];

export default function OurModel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-padding py-section bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>How We Build</motion.span>
          <motion.h2 className="font-display text-display-lg font-400 text-slate-900 mt-5 leading-tight"
            initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
            The Launch Dream<br/><span className="italic text-slate-500">structure.</span>
          </motion.h2>
        </div>
        <motion.div className="flex items-end" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.2}}>
          <p className="font-body text-lg text-slate-600 leading-relaxed border-l-2 border-blue-400 pl-5">
            Every company is structured differently — ownership and incentives are aligned to contribution and speed to profitability. We build the right team for the right problem.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {roles.map((r, i) => (
          <motion.div key={i}
            className={`group p-8 border ${r.border} ${r.bg} hover:shadow-card hover:border-blue-300 transition-all duration-300 relative overflow-hidden`}
            initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.15+i*0.1}}>
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-500"/>
            <span className="font-mono text-4xl text-slate-300 group-hover:text-blue-400 transition-colors">{r.icon}</span>
            <h3 className="font-body text-lg font-700 text-slate-900 mt-5 mb-3 uppercase tracking-wide">{r.title}</h3>
            <p className="font-body text-base text-slate-600 leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
        <motion.div className="sm:col-span-2 lg:col-span-3 p-8 border border-blue-100 bg-blue-50/40"
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.65}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label:"Contribution-based ownership", desc:"Equity reflects what you bring — expertise, code, capital, or customers." },
              { label:"Speed to profitability", desc:"Every decision is made with revenue in mind. Growth follows profit, not the other way." },
              { label:"Small by design", desc:"We add people only when they unlock revenue or protect margin. Headcount is a cost, not a signal." },
            ].map(p => (
              <div key={p.label}>
                <div className="font-mono text-sm tracking-[0.15em] uppercase text-blue-600 mb-2">{p.label}</div>
                <div className="font-body text-base text-slate-600 leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
