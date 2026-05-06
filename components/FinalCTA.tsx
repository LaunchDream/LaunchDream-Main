"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-padding py-section bg-slate-900 relative overflow-hidden">
      {/* Subtle dot grid on dark */}
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle, #94a3b8 1px, transparent 1px)", backgroundSize:"28px 28px"}}/>
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"/>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.span className="font-mono text-sm tracking-[0.25em] uppercase text-blue-400"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>The Next Wave</motion.span>
        <motion.h2 className="font-display text-display-xl font-400 text-white mt-6 mb-8 leading-[0.93]"
          initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.1,ease:[0.16,1,0.3,1]}}>
          The next wave of AI value<br/>won&apos;t be loud.<br/>
          <span className="italic text-blue-400">It will be profitable.</span>
        </motion.h2>
        <motion.p className="font-body text-xl text-slate-400 max-w-xl mx-auto leading-relaxed mb-12"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.25}}>
          While everyone chases the next unicorn, we&apos;re building companies that generate real revenue, real margins, and real staying power.
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.4,delay:0.35}}>
          <button onClick={() => document.querySelector("#apply")?.scrollIntoView({behavior:"smooth"})}
            className="group inline-flex items-center gap-3 bg-blue-600 text-white font-body text-sm font-700 tracking-[0.15em] uppercase px-12 py-5 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-600/30">
            Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
          </button>
        </motion.div>
        <motion.div className="mt-16 flex items-center justify-center gap-4"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4,delay:0.5}}>
          <div className="w-16 h-px bg-slate-700"/>
          <span className="font-mono text-xs tracking-[0.22em] uppercase text-slate-600">Launch Dream LLC · Washington DC Metro Area</span>
          <div className="w-16 h-px bg-slate-700"/>
        </motion.div>
      </div>
    </section>
  );
}
