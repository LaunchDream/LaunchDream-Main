"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  role: string;
  industry: string;
  interest: string;
  linkedin: string;
}

const roles = [
  { value: "", label: "Select your role..." },
  { value: "Domain Expert", label: "Domain Expert — I bring deep industry knowledge" },
  { value: "AI Engineer", label: "AI Engineer — I build production AI systems" },
  { value: "Angel Investor", label: "Angel Investor — I provide aligned capital" },
  { value: "Strategic Partner", label: "Strategic Partner — University / Org / Distribution" },
  { value: "Other", label: "Other — Tell me more below" },
];

const inputClass = `
  w-full bg-transparent border border-border-medium
  font-body text-sm text-text-primary placeholder:text-text-muted
  px-4 py-3.5 outline-none
  focus:border-gold/60 hover:border-border-medium/80
  transition-colors duration-200
`.trim();

export default function ApplicationForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    industry: "",
    interest: "",
    linkedin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <section id="apply" ref={ref} className="section-padding py-section border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Copy */}
          <div className="lg:col-span-5">
            <motion.span
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              Apply
            </motion.span>
            <motion.h2
              className="font-display text-display-md font-400 text-text-primary mt-4 leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Work with
              <br />
              <span className="italic text-gold">Launch Dream.</span>
            </motion.h2>

            <motion.div
              className="mt-8 space-y-5"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {[
                {
                  label: "Applications are reviewed personally.",
                  body: "Every submission is read by Nitin. No automated filters, no form letters.",
                },
                {
                  label: "We respond only when there's alignment.",
                  body: "If your background matches an active or upcoming venture, you'll hear back within 1–2 weeks.",
                },
                {
                  label: "Selective by design.",
                  body: "We work with a small number of people per venture. Quality over volume.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 bg-gold rounded-full shrink-0 mt-2" />
                  <div>
                    <div className="font-body text-xs font-600 text-text-primary">{item.label}</div>
                    <div className="font-body text-xs text-text-muted mt-1 leading-relaxed">{item.body}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 p-5 border border-gold/20 bg-gold/[0.05]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-gold mb-2">
                Nitin Pradhan
              </p>
              <p className="font-body text-xs text-text-secondary leading-relaxed italic">
                &ldquo;I&apos;m looking for people who have already done the hard work — who
                understand the problem viscerally and are ready to build something real.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              className="p-8 md:p-10 border border-border-medium bg-surface/40"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {formState === "success" ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-12 h-12 text-gold mb-6" />
                  <h3 className="font-display text-2xl font-400 text-text-primary italic mb-3">
                    Application received.
                  </h3>
                  <p className="font-body text-sm text-text-secondary max-w-sm leading-relaxed">
                    We&apos;ve sent a confirmation to your inbox. If there&apos;s alignment,
                    you&apos;ll hear from Nitin directly within 1–2 weeks.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@domain.com"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                      Role <span className="text-gold">*</span>
                    </label>
                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      {roles.map((r) => (
                        <option key={r.value} value={r.value} className="bg-surface text-text-primary">
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                      Industry / Area of Expertise
                    </label>
                    <input
                      type="text"
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      placeholder="e.g. Healthcare operations, Federal procurement, Real estate"
                      className={inputClass}
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                      What are you interested in building or contributing?
                    </label>
                    <textarea
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      placeholder="Describe the problem you see, what you'd bring to a venture, or the kind of company you want to build..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted mb-2">
                      LinkedIn or Website
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourname"
                      className={inputClass}
                    />
                  </div>

                  {/* Error message */}
                  {formState === "error" && (
                    <motion.div
                      className="flex items-center gap-2 p-3 border border-red-500/30 bg-red-500/5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <p className="font-body text-xs text-red-400">{errorMessage}</p>
                    </motion.div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={formState === "loading" || !form.name || !form.email || !form.role}
                    className="group w-full flex items-center justify-center gap-3 bg-gold text-background font-body text-sm font-600 tracking-[0.1em] uppercase py-4 hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-text-muted text-center">
                    No spam. Your information stays private.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
