"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  { label:"Presidential Appointee", detail:"Obama-Biden Administration, U.S. Department of Transportation" },
  { label:"Federal Chief Information Officer", detail:"Managed $3.5B+ annual IT modernization portfolio" },
  { label:"Founder & Operator", detail:"Founded, scaled, and sold GOVonomy Inc. (acquired 2021)" },
  { label:"Digital Transformation Leader", detail:"25+ years across federal, state, local & enterprise" },
  { label:"AI Venture Studio Founder", detail:"Launch Dream LLC & New Second Homes" },
  { label:"Public Advisory Roles", detail:"Fairfax County ITPAC · America India Tech Council" },
];

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section ref={ref} className="section-padding py-section bg-slate-50 border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Left */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}> The Founder</motion.span>
          <motion.h2 className="font-display text-display-md font-400 text-slate-900 mt-4 mb-1 leading-tight"
            initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>Nitin Pradhan</motion.h2>
          <motion.p className="font-body text-base text-blue-600 font-600 mb-6"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4,delay:0.15}}>Founder, Launch Dream LLC</motion.p>
          <motion.p className="font-body text-lg text-slate-600 leading-relaxed mb-5 max-w-xl"
            initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.2}}>
            For 25+ years, Nitin has sat on both sides of the table — as a government buyer responsible for billions in technology procurement, and as a founder building companies that serve those buyers. That vantage point is rare. It shapes every venture we build.
          </motion.p>
          <motion.p className="font-body text-base text-slate-500 leading-relaxed mb-10 max-w-xl"
            initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.28}}>
            His work spans federal IT modernization, AI strategy, digital transformation policy, and venture creation. He doesn&apos;t just advise on these things — he has executed them at scale.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((c, i) => (
              <motion.div key={i}
                className="flex items-start gap-3 p-5 border border-slate-200 bg-white hover:border-blue-200 hover:shadow-card transition-all duration-300"
                initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.4,delay:0.3+i*0.06}}>
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0 mt-2"/>
                <div>
                  <div className="font-body text-sm font-700 text-slate-900 mb-1">{c.label}</div>
                  <div className="font-body text-sm text-slate-600 leading-relaxed">{c.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right card */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div className="relative"
            initial={{opacity:0,scale:0.97}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.7,delay:0.15}}>
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-blue-200"/>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-blue-200"/>
            <div className="bg-white border border-slate-200 shadow-card p-10 text-center">
              <div className="w-28 h-28 mx-auto mb-6 relative">
                <div className="w-28 h-28 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                  <span className="font-display text-4xl font-500 text-blue-600 italic">NP</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-600 flex items-center justify-center rounded-full">
                  <span className="text-white text-[9px] font-700">★</span>
                </div>
              </div>
              <div className="font-display text-2xl font-400 text-slate-900 italic mb-1">Nitin Pradhan</div>
              <div className="font-mono text-xs tracking-[0.2em] uppercase text-blue-600 mb-8">Presidential Appointee · Federal CIO</div>
              <div className="divider"/>
              <div className="mt-8 space-y-4">
                {[["$3.5B+","IT portfolio managed"],["25+","Years in tech leadership"],["1","Company founded & sold"]].map(([v,l]) => (
                  <div key={l} className="flex justify-between items-center">
                    <span className="font-body text-sm text-slate-500">{l}</span>
                    <span className="font-display text-2xl font-500 text-blue-600 italic">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="font-body text-sm text-slate-500 italic leading-relaxed mb-5">
                  &ldquo;AI is the greatest leverage tool for small business that has ever existed. Most people use it to scale. I use it to sharpen.&rdquo;
                </p>
                <a href="https://www.linkedin.com/in/nitinpradhan/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-white bg-[#0A66C2] px-4 py-2.5 hover:bg-[#004182] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
