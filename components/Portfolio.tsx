"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  { name:"Zoneium", type:"Portfolio Company", status:"Active", statusColor:"text-emerald-700 border-emerald-300 bg-emerald-50",
    desc:"Intelligent infrastructure platform leveraging IoT sensors and predictive analytics for smart city applications. Targeting municipal and enterprise deployments with AI-driven operational intelligence.",
    tags:["Smart Cities","IoT","B2G / B2B"], url:"https://www.zoneium.com", meta:"AI Infrastructure · Smart Cities" },
  { name:"ScaleUP USA", type:"Portfolio Company", status:"Active", statusColor:"text-blue-700 border-blue-300 bg-blue-50",
    desc:"Federal business acceleration program guiding technology innovators into the $7+ trillion U.S. federal government marketplace through strategic policy frameworks and AI-enhanced tooling.",
    tags:["GovCon","Accelerator","B2G"], url:"https://www.scaleupus.com", meta:"10+ years · $7T+ market addressed" },
  { name:"New Second Homes", type:"Active Venture", status:"Building", statusColor:"text-violet-700 border-violet-300 bg-violet-50",
    desc:"AI-powered platform transforming international real estate discovery for global second-home ownership. Generative AI and predictive analytics connecting buyers, developers, and lifestyle partners.",
    tags:["Real Estate","GenAI","B2C / B2B"], url:"https://newsecondhomes.com", meta:"Launch Dream Venture #1" },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="portfolio" ref={ref} className="section-padding py-section bg-white border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>Portfolio</motion.span>
          <motion.h2 className="font-display text-display-lg font-400 text-slate-900 mt-5 leading-tight"
            initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
            Ventures in motion.
          </motion.h2>
        </div>
        <motion.p className="font-body text-base text-slate-500 max-w-xs" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.2}}>
          Each company is designed around a specific problem, team, and path to profit.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ventures.map((v, i) => (
          <motion.div key={i}
            className="group flex flex-col p-8 border border-slate-200 bg-white hover:border-blue-300 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
            initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.15+i*0.12}}>
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-500"/>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs tracking-[0.15em] uppercase text-slate-500">{v.type}</span>
              <span className={`font-mono text-xs tracking-[0.12em] uppercase border px-2 py-1 ${v.statusColor}`}>{v.status}</span>
            </div>
            <h3 className="font-display text-display-sm font-400 text-slate-900 italic mb-4">{v.name}</h3>
            <div className="w-8 h-0.5 bg-blue-600 mb-5"/>
            <p className="font-body text-base text-slate-600 leading-relaxed flex-1 mb-6">{v.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {v.tags.map(t => <span key={t} className="font-mono text-xs tracking-[0.1em] uppercase text-slate-500 bg-slate-100 px-2 py-1">{t}</span>)}
            </div>
            <div className="pt-4 border-t border-slate-100 mb-5">
              <p className="font-mono text-xs text-slate-500">{v.meta}</p>
            </div>
            <a href={v.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-600 tracking-[0.1em] uppercase text-blue-600 hover:text-blue-700 transition-colors group/link">
              Visit site <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"/>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
