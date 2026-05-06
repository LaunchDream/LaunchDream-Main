"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Model", href: "#model" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Apply", href: "#apply", cta: true },
];

export function LaunchDreamLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const w = size === "sm" ? 36 : 44;
  const h = size === "sm" ? 38 : 46;
  return (
    <div className="flex items-center gap-3">
      <svg width={w} height={h} viewBox="0 0 52 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Rainbow arcs — widest (blue) to narrowest (red), back to front */}
        <path d="M2,52 Q2,8 40,2"   stroke="#1565C0" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M6,52 Q6,13 40,8"  stroke="#6A1B9A" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M11,52 Q11,19 40,14" stroke="#2E7D32" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M16,52 Q16,25 40,20" stroke="#E65100" strokeWidth="7" strokeLinecap="round" fill="none"/>
        <path d="M21,52 Q21,31 40,26" stroke="#C62828" strokeWidth="7" strokeLinecap="round" fill="none"/>
        {/* Head silhouette — covers arc bases so arcs appear to emerge */}
        <path d="M14,54 C12,48 10,42 10,36 C10,22 18,12 28,10 C37,8 44,14 45,22 C47,30 44,38 40,42 C38,45 36,48 34,50 L34,54 Z" fill="#5C5C74"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-body font-800 text-sm tracking-[0.1em] uppercase text-slate-900">Launch Dream</span>
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-600 mt-0.5">AI Venture Studio</span>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}
        initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><LaunchDreamLogo /></button>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => l.cta ? (
              <button key={l.label} onClick={() => go(l.href)}
                className="font-body text-sm font-700 tracking-[0.14em] uppercase text-white bg-blue-600 px-6 py-2.5 hover:bg-blue-700 transition-colors shadow-sm">
                {l.label}
              </button>
            ) : (
              <button key={l.label} onClick={() => go(l.href)}
                className="font-body text-sm font-500 tracking-[0.1em] uppercase text-slate-600 hover:text-blue-600 transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"/>
              </button>
            ))}
          </nav>
          <button className="md:hidden p-2 flex flex-col gap-[5px]" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`w-6 h-0.5 bg-slate-800 block transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`}/>
            <span className={`w-6 h-0.5 bg-slate-800 block transition-all duration-300 ${open ? "opacity-0" : ""}`}/>
            <span className={`w-6 h-0.5 bg-slate-800 block transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}/>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <div className="mb-12"><LaunchDreamLogo /></div>
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((l, i) => (
                <motion.button key={l.label} onClick={() => go(l.href)}
                  className={l.cta ? "mt-4 font-body text-sm font-700 tracking-[0.2em] uppercase text-white bg-blue-600 px-12 py-4" : "font-display text-5xl font-300 italic text-slate-800 hover:text-blue-600 transition-colors"}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  {l.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
