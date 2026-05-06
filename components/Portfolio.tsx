"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ventures = [
  {
    name: "Zoneium",
    type: "Portfolio Company",
    status: "Active",
    statusColor: "text-amber-400 border-amber-400/30",
    description:
      "Intelligent infrastructure platform leveraging IoT sensors and predictive analytics for smart city applications. Targeting municipal and enterprise deployments with AI-driven operational intelligence and real-time analytics.",
    tags: ["Smart Cities", "IoT", "B2G / B2B"],
    url: "https://www.zoneium.com",
    metrics: "AI Infrastructure · Smart Cities",
  },
  {
    name: "ScaleUP USA",
    type: "Portfolio Company",
    status: "Active",
    statusColor: "text-blue-400 border-blue-400/30",
    description:
      "Federal business acceleration program guiding technology innovators into the $7+ trillion U.S. federal government marketplace through strategic policy frameworks, digital transformation methodologies, and AI-enhanced tooling.",
    tags: ["GovCon", "Accelerator", "B2G"],
    url: "https://www.scaleupus.com",
    metrics: "10+ years · $7T+ market addressed",
  },
  {
    name: "New Second Homes",
    type: "Active Venture",
    status: "Building",
    statusColor: "text-green-400 border-green-400/30",
    description:
      "AI-powered platform transforming international real estate discovery for global second-home ownership. Uses generative AI, predictive analytics, and automated matching to connect buyers, developers, and lifestyle partners.",
    tags: ["Real Estate", "GenAI", "B2C / B2B"],
    url: "https://newsecondhomes.com",
    metrics: "Proof-of-concept venture · Launch Dream Venture #1",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="portfolio" ref={ref} className="section-padding py-section border-t border-border-subtle">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <motion.span
            className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="font-display text-display-lg font-400 text-text-primary mt-4 leading-tight"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ventures in motion.
          </motion.h2>
        </div>
        <motion.p
          className="font-body text-sm text-text-muted max-w-xs"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Each company is designed around a specific problem, team, and path to profit.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ventures.map((venture, i) => (
          <motion.div
            key={i}
            className="group relative flex flex-col p-8 border border-border-subtle hover:border-gold/30 transition-all duration-500 bg-surface/30 hover:bg-surface/60"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-gold/[0.04] to-transparent pointer-events-none" />

            {/* Top meta */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted">
                {venture.type}
              </span>
              <span className={`font-mono text-[9px] tracking-[0.15em] uppercase border px-2 py-1 ${venture.statusColor}`}>
                {venture.status}
              </span>
            </div>

            {/* Name */}
            <h3 className="font-display text-display-sm font-400 text-text-primary italic mb-4">
              {venture.name}
            </h3>

            <div className="w-8 h-px bg-gold/40 mb-5" />

            {/* Description */}
            <p className="font-body text-sm text-text-secondary leading-relaxed flex-1 mb-6">
              {venture.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {venture.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] tracking-[0.12em] uppercase text-text-muted bg-surface-3 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-border-subtle mb-5">
              <p className="font-mono text-[10px] tracking-[0.1em] text-text-muted">
                {venture.metrics}
              </p>
            </div>

            {/* Link */}
            {venture.url !== "#" ? (
              <a
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 font-body text-xs font-500 tracking-[0.1em] uppercase text-text-secondary hover:text-gold transition-colors duration-300"
              >
                Visit site
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <span className="font-body text-xs font-500 tracking-[0.1em] uppercase text-text-muted cursor-default">
                Coming soon
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
