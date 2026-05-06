"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const credentials = [
  { label: "Presidential Appointee", detail: "Obama-Biden Administration, U.S. Department of Transportation" },
  { label: "Federal Chief Information Officer", detail: "Managed $3.5B+ annual IT modernization portfolio" },
  { label: "Founder & Operator", detail: "Founded, scaled, and sold GOVonomy Inc. (acquired 2021)" },
  { label: "Digital Transformation Leader", detail: "25+ years across federal, state, local & enterprise" },
  { label: "AI Venture Studio Founder", detail: "Launch Dream LLC & New Second Homes" },
  { label: "Public Advisory Roles", detail: "Fairfax County ITPAC · America India Tech Council" },
];

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding py-section border-t border-border-subtle bg-surface/20 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gold/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        {/* Left */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.span
            className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }}
          >
            The Founder
          </motion.span>
          <motion.h2
            className="font-display text-display-md font-400 text-text-primary mt-4 mb-2 leading-tight"
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nitin Pradhan
          </motion.h2>
          <motion.p
            className="font-body text-base text-gold mb-6"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.15 }}
          >
            Founder, Launch Dream LLC
          </motion.p>

          <motion.p
            className="font-body text-lg text-text-secondary leading-relaxed mb-6 max-w-xl"
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          >
            For 25+ years, Nitin has sat on both sides of the table — as a government buyer responsible for billions in technology procurement, and as a founder building companies that serve those buyers. That vantage point is rare. It shapes every venture we build.
          </motion.p>
          <motion.p
            className="font-body text-base text-text-muted leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.28 }}
          >
            His work spans federal IT modernization, AI strategy, digital transformation policy, and venture creation. He doesn&apos;t just advise on these things — he has executed them at scale.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                className="group flex items-start gap-3 p-5 border border-border-subtle hover:border-gold/25 transition-all duration-300 bg-surface/40"
                initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              >
                <div className="w-1 h-1 bg-gold rounded-full shrink-0 mt-2.5" />
                <div>
                  <div className="font-body text-sm font-700 text-text-primary leading-tight mb-1">{cred.label}</div>
                  <div className="font-body text-sm text-text-muted leading-relaxed">{cred.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.97 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-gold/30" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-b-2 border-r-2 border-gold/30" />

            <div className="relative bg-gradient-to-b from-surface-2 to-background border border-border-medium p-10 text-center glow-gold">
              {/* Avatar */}
              <div className="w-28 h-28 mx-auto mb-6 relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/25 to-gold/5 border-2 border-gold/40 flex items-center justify-center">
                  <span className="font-display text-4xl font-500 text-gold italic">NP</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gold flex items-center justify-center">
                  <span className="text-background text-[9px] font-700">★</span>
                </div>
              </div>

              <div className="font-display text-2xl font-400 text-text-primary italic mb-1">Nitin Pradhan</div>
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold mb-8">
                Presidential Appointee · Federal CIO
              </div>

              <div className="gold-line" />

              <div className="mt-8 space-y-4">
                {[["$3.5B+", "IT portfolio managed"], ["25+", "Years in tech leadership"], ["1", "Company founded & sold"]].map(([val, label]) => (
                  <div key={label} className="flex justify-between items-center">
                    <span className="font-body text-sm text-text-muted">{label}</span>
                    <span className="font-display text-2xl font-500 text-gold italic">{val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border-subtle">
                <p className="font-body text-sm text-text-muted italic leading-relaxed mb-5">
                  &ldquo;AI is the greatest leverage tool for small business that has ever existed. Most people use it to scale. I use it to sharpen.&rdquo;
                </p>
                <a
                  href="https://www.linkedin.com/in/nitinpradhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-gold hover:text-gold-light transition-colors duration-300 border border-gold/35 px-4 py-2.5 hover:border-gold/60 hover:shadow-[0_0_15px_rgba(212,168,67,0.2)]"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
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
