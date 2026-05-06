"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { bad:"Raise $5M, burn 3 years, hope for exit", good:"Profit-first from day one" },
  { bad:"18-month enterprise sales cycles", good:"Buyers who have the budget today" },
  { bad:"Viral consumer bets with zero predictability", good:"Narrow niches with clear ROI" },
  { bad:"Generic AI layered on broken processes", good:"Buyer-informed design from the start" },
  { bad:"50-person team before product-market fit", good:"3–5 person teams who own everything" },
  { bad:"Build for valuation", good:"Build for margin" },
];

export default function WhyWeWin() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="section-padding py-section bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>The Difference</motion.span>
          <motion.h2 className="font-display text-display-lg font-400 text-slate-900 mt-5"
            initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
            Why we win.
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Headers */}
          <motion.div className="flex items-center gap-3 pb-4 border-b border-slate-200"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4,delay:0.2}}>
            <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center shrink-0"><X className="w-3.5 h-3.5 text-red-500"/></div>
            <span className="font-mono text-sm tracking-[0.18em] uppercase text-red-500">Conventional playbook</span>
          </motion.div>
          <motion.div className="flex items-center gap-3 pb-4 border-b border-blue-200"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4,delay:0.2}}>
            <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0"><Check className="w-3.5 h-3.5 text-blue-600"/></div>
            <span className="font-mono text-sm tracking-[0.18em] uppercase text-blue-600">Launch Dream approach</span>
          </motion.div>
          {/* Rows */}
          {rows.map((r, i) => (
            <>
              <motion.div key={`b${i}`} className="flex items-start gap-3 py-5 border-b border-slate-100"
                initial={{opacity:0,x:-12}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.4,delay:0.25+i*0.07}}>
                <X className="w-4 h-4 text-red-300 shrink-0 mt-1"/>
                <span className="font-body text-base text-slate-400 line-through decoration-slate-300 leading-relaxed">{r.bad}</span>
              </motion.div>
              <motion.div key={`g${i}`} className="flex items-start gap-3 py-5 border-b border-blue-50 bg-blue-50/30 px-4"
                initial={{opacity:0,x:12}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.4,delay:0.25+i*0.07}}>
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-1"/>
                <span className="font-body text-base text-slate-800 font-500 leading-relaxed">{r.good}</span>
              </motion.div>
            </>
          ))}
        </div>
        <motion.div className="mt-16 p-10 md:p-14 border border-blue-100 bg-blue-50/40 relative overflow-hidden"
          initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.6}}>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-blue-400 to-transparent"/>
          <p className="font-display text-display-sm font-400 italic text-slate-800 leading-tight max-w-3xl">
            &ldquo;We build from the mindset of the buyer — not the seller. That changes everything about how a product gets designed.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-10 h-0.5 bg-blue-600"/>
            <span className="font-mono text-sm tracking-[0.18em] uppercase text-slate-600">Nitin Pradhan, Founder — Launch Dream</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
