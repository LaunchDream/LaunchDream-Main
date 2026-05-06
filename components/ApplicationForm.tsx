"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, ExternalLink } from "lucide-react";

type State = "idle"|"loading"|"success"|"error";

const roles = [
  { value:"", label:"Select your role..." },
  { value:"Domain Expert", label:"Domain Expert — I bring deep industry knowledge" },
  { value:"AI Engineer", label:"AI Engineer — I build production AI systems" },
  { value:"Angel Investor", label:"Angel Investor — I provide aligned capital" },
  { value:"Strategic Partner", label:"Strategic Partner — University / Org / Distribution" },
  { value:"Other", label:"Other — I'll explain below" },
];

const label = "block font-mono text-sm font-500 tracking-[0.15em] uppercase text-slate-700 mb-2";
const input = "w-full bg-white border border-slate-200 font-body text-base text-slate-900 placeholder:text-slate-400 px-4 py-3.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 hover:border-slate-300 transition-all duration-200";

export default function ApplicationForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name:"", email:"", role:"", industry:"", interest:"", linkedin:"" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    setState("loading"); setError("");
    try {
      const res = await fetch("/api/apply", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      const d = await res.json();
      if (res.ok) setState("success");
      else { setState("error"); setError(d.error || "Something went wrong."); }
    } catch { setState("error"); setError("Network error. Please try again."); }
  };

  return (
    <section id="apply" ref={ref} className="section-padding py-section bg-slate-50 border-t border-slate-100">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.span className="section-label" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.4}}>Apply</motion.span>
            <motion.h2 className="font-display text-display-md font-400 text-slate-900 mt-4 leading-tight"
              initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}>
              Work with<br/><span className="italic text-blue-600">Launch Dream.</span>
            </motion.h2>

            <motion.div className="mt-8 space-y-5" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.2}}>
              {[
                { l:"Reviewed personally.", b:"Every submission is read by Nitin. No automated filters, no form letters." },
                { l:"We respond when there's alignment.", b:"If your background matches an active venture, you'll hear back within 1–2 weeks." },
                { l:"Selective by design.", b:"We work with a small number of contributors per venture. Quality over volume." },
              ].map((x,i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0 mt-2"/>
                  <div>
                    <div className="font-body text-base font-700 text-slate-900">{x.l}</div>
                    <div className="font-body text-base text-slate-600 mt-1 leading-relaxed">{x.b}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.div className="mt-8 p-6 border border-blue-100 bg-white"
              initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.35}}>
              <p className="font-mono text-sm tracking-[0.12em] uppercase text-blue-600 mb-2">Nitin Pradhan · Founder</p>
              <p className="font-body text-base text-slate-600 italic leading-relaxed">
                &ldquo;I&apos;m looking for people who have already done the hard work — who understand the problem viscerally and are ready to build something real.&rdquo;
              </p>
            </motion.div>

            {/* LinkedIn CTA — prominent */}
            <motion.div className="mt-5" initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.45}}>
              <a href="https://www.linkedin.com/in/nitinpradhan/" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 w-full p-5 border-2 border-[#0A66C2]/30 bg-white hover:bg-blue-50 hover:border-[#0A66C2] transition-all duration-300">
                <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </div>
                <div className="flex-1">
                  <div className="font-body text-base font-700 text-slate-900 group-hover:text-[#0A66C2] transition-colors leading-tight">
                    Connect with Nitin Pradhan, Founder
                  </div>
                  <div className="font-body text-sm text-slate-500 mt-0.5">
                    Reach out directly on LinkedIn
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#0A66C2] transition-colors shrink-0"/>
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div className="p-8 md:p-10 bg-white border border-slate-200 shadow-card"
              initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.2}}>
              {state === "success" ? (
                <motion.div className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.4}}>
                  <CheckCircle className="w-14 h-14 text-blue-600 mb-6"/>
                  <h3 className="font-display text-2xl font-400 italic text-slate-900 mb-3">Application received.</h3>
                  <p className="font-body text-base text-slate-600 max-w-sm leading-relaxed">
                    We&apos;ve sent a confirmation to your inbox. If there&apos;s alignment, you&apos;ll hear from Nitin directly within 1–2 weeks.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={label}>Full Name <span className="text-blue-600">*</span></label>
                      <input type="text" name="name" value={form.name} onChange={onChange} placeholder="Your name" required className={input}/>
                    </div>
                    <div>
                      <label className={label}>Email <span className="text-blue-600">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@domain.com" required className={input}/>
                    </div>
                  </div>
                  <div>
                    <label className={label}>Role <span className="text-blue-600">*</span></label>
                    <select name="role" value={form.role} onChange={onChange} required className={`${input} appearance-none cursor-pointer`}>
                      {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={label}>Industry / Expertise</label>
                    <input type="text" name="industry" value={form.industry} onChange={onChange}
                      placeholder="e.g. Healthcare operations, Federal procurement, Real estate" className={input}/>
                  </div>
                  <div>
                    <label className={label}>What are you interested in building or contributing?</label>
                    <textarea name="interest" value={form.interest} onChange={onChange} rows={4}
                      placeholder="Describe the problem you see, what you'd bring to a venture, or the kind of company you want to build..."
                      className={`${input} resize-none`}/>
                  </div>
                  <div>
                    <label className={label}>Your LinkedIn or Website</label>
                    <input type="url" name="linkedin" value={form.linkedin} onChange={onChange}
                      placeholder="https://linkedin.com/in/yourname" className={input}/>
                  </div>
                  {state === "error" && (
                    <motion.div className="flex items-center gap-2 p-3 border border-red-200 bg-red-50"
                      initial={{opacity:0}} animate={{opacity:1}}>
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0"/>
                      <p className="font-body text-sm text-red-600">{error}</p>
                    </motion.div>
                  )}
                  <button type="submit"
                    disabled={state==="loading" || !form.name || !form.email || !form.role}
                    className="group w-full flex items-center justify-center gap-3 bg-blue-600 text-white font-body text-sm font-700 tracking-[0.12em] uppercase py-4 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md">
                    {state==="loading"
                      ? <><Loader2 className="w-4 h-4 animate-spin"/>Submitting...</>
                      : <>Submit Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/></>
                    }
                  </button>
                  <p className="font-body text-sm text-slate-500 text-center">No spam. Your information stays private.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
