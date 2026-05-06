"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Model", href: "#model" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resources", href: "#resources" },
  { label: "Apply", href: "#apply", cta: true },
];

function LaunchDreamLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? 28 : 36;
  return (
    <div className="flex items-center gap-3">
      {/* Mark */}
      <svg width={s} height={s} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="18,2 34,28 2,28" fill="none" stroke="#D4A843" strokeWidth="1.5"/>
        <polygon points="18,8 29,26 7,26" fill="rgba(212,168,67,0.12)"/>
        <line x1="18" y1="2" x2="18" y2="28" stroke="rgba(212,168,67,0.4)" strokeWidth="0.75"/>
        <circle cx="18" cy="14" r="2.5" fill="#D4A843"/>
        <circle cx="18" cy="14" r="4" fill="rgba(212,168,67,0.2)"/>
      </svg>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-body font-800 text-[13px] tracking-[0.18em] uppercase text-text-primary">
          Launch Dream
        </span>
        <span className="font-mono text-[8px] tracking-[0.22em] uppercase text-gold mt-0.5">
          AI Venture Studio
        </span>
      </div>
    </div>
  );
}

export { LaunchDreamLogo };

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-2xl border-b border-border-subtle"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <LaunchDreamLogo />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.cta ? (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="relative font-body text-xs font-700 tracking-[0.18em] uppercase text-background bg-gold px-6 py-2.5 hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,67,0.4)]"
                >
                  {link.label}
                </button>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-body text-xs font-500 tracking-[0.14em] uppercase text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </button>
              )
            )}
          </nav>

          <button
            className="md:hidden p-2 flex flex-col gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/97 backdrop-blur-2xl flex flex-col items-center justify-center mesh-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-12"><LaunchDreamLogo /></div>
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className={
                    link.cta
                      ? "mt-4 font-body text-sm font-700 tracking-[0.2em] uppercase text-background bg-gold px-10 py-4 hover:bg-gold-light transition-all"
                      : "font-display text-5xl font-300 italic text-text-primary hover:text-gold transition-colors duration-300"
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
