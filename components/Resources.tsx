"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight, Lock, Plus } from "lucide-react";
import { resources, type ResourceCategory } from "@/data/resources";

const categories: Array<ResourceCategory | "All"> = ["All", "AI", "GTM", "Operations", "Playbooks"];

const categoryColors: Record<ResourceCategory, string> = {
  AI: "text-blue-400 border-blue-400/30 bg-blue-400/5",
  GTM: "text-emerald-400 border-emerald-400/30 bg-emerald-400/5",
  Operations: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  Playbooks: "text-gold border-gold/30 bg-gold/5",
};

// ─── HTML INJECTION ZONE ─────────────────────────────────────────────────────
// To add a custom resource, drop an HTML snippet below this comment.
// Each resource card should follow this structure:
//
// <div class="custom-resource-card">
//   <div class="resource-category">AI</div>
//   <div class="resource-type">Guide</div>
//   <h3 class="resource-title">Your Resource Title</h3>
//   <p class="resource-description">Your description here...</p>
//   <a href="/path/to/resource" class="resource-link">Read more →</a>
// </div>
//
// Or simply paste a full HTML file path below and it will be rendered inline.
const CUSTOM_HTML_RESOURCES: string | null = null;
// ─────────────────────────────────────────────────────────────────────────────

export default function Resources() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState<ResourceCategory | "All">("All");

  const filtered = activeCategory === "All"
    ? resources
    : resources.filter((r) => r.category === activeCategory);

  return (
    <section id="resources" ref={ref} className="section-padding py-section border-t border-border-subtle relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.04] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <motion.span
              className="font-mono text-xs tracking-[0.28em] uppercase text-gold"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4 }}
            >
              Resources
            </motion.span>
            <motion.h2
              className="font-display text-display-lg font-400 text-text-primary mt-5 leading-tight"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Tools & Playbooks.
            </motion.h2>
            <motion.p
              className="mt-4 font-body text-base text-text-secondary max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Frameworks, templates, and guides from the Launch Dream playbook.
              Built for small teams moving fast.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "border-gold/60 bg-gold/12 text-gold"
                    : "border-border-subtle text-text-muted hover:border-border-medium hover:text-text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── Custom HTML resources slot ───────────────────────────────── */}
        {CUSTOM_HTML_RESOURCES && (
          <div
            className="mb-8 custom-resources-html"
            dangerouslySetInnerHTML={{ __html: CUSTOM_HTML_RESOURCES }}
          />
        )}

        {/* Resource grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`group relative flex flex-col p-7 border transition-all duration-400 ${
                  resource.comingSoon
                    ? "border-border-subtle opacity-50 cursor-not-allowed bg-surface/20"
                    : "border-border-subtle hover:border-gold/40 bg-surface/40 hover:bg-surface-2 cursor-pointer"
                }`}
              >
                {!resource.comingSoon && (
                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-gold to-transparent transition-all duration-500" />
                )}

                <div className="flex items-center justify-between mb-5">
                  <span className={`font-mono text-[10px] tracking-[0.18em] uppercase border px-2 py-1 ${categoryColors[resource.category]}`}>
                    {resource.category}
                  </span>
                  {resource.comingSoon
                    ? <Lock className="w-3.5 h-3.5 text-text-muted" />
                    : <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-gold transition-colors duration-300" />
                  }
                </div>

                <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-text-muted mb-3">
                  {resource.type}
                </div>

                <h3 className="font-body text-base font-600 text-text-primary mb-3 leading-snug group-hover:text-gold transition-colors duration-300">
                  {resource.title}
                </h3>

                <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-5">
                  {resource.description}
                </p>

                <div className="flex items-center gap-2 pt-4 border-t border-border-subtle">
                  <Clock className="w-3.5 h-3.5 text-text-muted" />
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-text-muted">
                    {resource.comingSoon ? "Coming soon" : `${resource.readTime} read`}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* "More coming" placeholder card */}
            <motion.div
              layout
              className="flex flex-col items-center justify-center p-7 border border-dashed border-border-medium bg-surface/20 min-h-[240px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Plus className="w-8 h-8 text-text-muted mb-3" />
              <p className="font-body text-sm text-text-muted text-center leading-relaxed">
                More resources added regularly
              </p>
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted mt-2">
                {resources.length} published
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
