"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const profiles = [
  { title:"Domain Experts", tag:"Operators", criteria:["10+ years in a specific industry or function","Direct access to potential customers","A clear problem you've lived with for years","Credibility that opens doors"], note:"You bring the problem. We bring the solution.", equity:"40–45%" },
  { title:"Founding AI Engineers", tag:"Builders", criteria:["Production AI/ML experience — not just fine-tuning","Ability to own the full technical stack","Bias for shipping over perfecting","Interested in equity, not just a salary"], note:"You build the system. We find the market.", equity:"25–30%" },
  { title:"Angel Investors", tag:"Capital", criteria:["Patient, long-term capital orientation","Understand the $1M–$5M ARR model","Value profit over paper valuations","Able to contribute more than money"], note:"We return capital, not just stories.", equity:"10–20%" },
  { title:"Strategic & University Partners", tag:"Ecosystem", criteria:["Relevant data access or distribution","Credibility in a specific vertical","Interest in applied AI commercialization","Long-term relationship orientation"], note:"We build ventures, not pilots. Be serious.", equity:"Case by case" },
];

export default function WhoWereLookingFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section ref={ref} className="section-padding py-section bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mb-16">
        <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>Who We Work With</motion.span>
        <motion.h2 className="font-display text-display-lg font-400 text-slate-900 mt-5 leading-tight"
          initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
          We are selective.<br/><span className="italic text-slate-500">By design.</span>
        </motion.h2>
        <motion.p className="mt-5 font-body text-lg text-slate-600 leading-relaxed max-w-lg"
          initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.2}}>
          We work with a small number of highly qualified contributors per venture. If you don&apos;t meet the criteria, we won&apos;t waste your time.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {profiles.map((p, i) => (
          <motion.div key={i}
            className="group p-8 border border-slate-200 bg-white hover:border-blue-300 hover:shadow-card transition-all duration-400 relative overflow-hidden"
            initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.15+i*0.1}}>
            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-blue-600 transition-all duration-500"/>
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-blue-600 border border-blue-200 bg-blue-50 px-2.5 py-1.5">{p.tag}</span>
                <h3 className="font-body text-xl font-700 text-slate-900 mt-3">{p.title}</h3>
              </div>
              <div className="text-right">
                <div className="font-mono text-xs tracking-[0.12em] uppercase text-slate-500">Equity</div>
                <div className="font-display text-2xl font-500 text-blue-600 italic mt-1">{p.equity}</div>
              </div>
            </div>
            <div className="divider mb-6"/>
            <ul className="space-y-3 mb-6">
              {p.criteria.map((c, j) => (
                <li key={j} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0 mt-2.5"/>
                  <span className="font-body text-base text-slate-600 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-slate-100">
              <p className="font-mono text-sm text-slate-500 italic">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 border border-blue-200 bg-blue-50/60"
        initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.6}}>
        <div>
          <p className="font-body text-xl font-700 text-slate-900">Think you qualify?</p>
          <p className="font-body text-base text-slate-600 mt-1">Applications reviewed personally. Response: 1–2 weeks.</p>
        </div>
        <button onClick={() => document.querySelector("#apply")?.scrollIntoView({behavior:"smooth"})}
          className="group flex items-center gap-2 mt-5 sm:mt-0 bg-blue-600 text-white font-body text-sm font-700 tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-blue-700 transition-colors shadow-md shrink-0 w-full sm:w-auto justify-center">
          Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
        </button>
      </motion.div>
    </section>
  );
}
