"use client";

const links = [
  { label:"Model", href:"#model" },
  { label:"Portfolio", href:"#portfolio" },
  { label:"Apply", href:"#apply" },
];

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior:"smooth" });
  return (
    <footer className="section-padding py-8 bg-slate-900 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <svg width="22" height="24" viewBox="0 0 52 54" fill="none">
            <path d="M2,52 Q2,8 40,2" stroke="#1565C0" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <path d="M6,52 Q6,13 40,8" stroke="#6A1B9A" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <path d="M11,52 Q11,19 40,14" stroke="#2E7D32" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <path d="M16,52 Q16,25 40,20" stroke="#E65100" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <path d="M21,52 Q21,31 40,26" stroke="#C62828" strokeWidth="7" strokeLinecap="round" fill="none"/>
            <path d="M14,54 C12,48 10,42 10,36 C10,22 18,12 28,10 C37,8 44,14 45,22 C47,30 44,38 40,42 C38,45 36,48 34,50 L34,54 Z" fill="#5C5C74"/>
          </svg>
          <span className="font-body text-sm font-700 tracking-[0.1em] uppercase text-slate-400">Launch Dream</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map(l => (
            <button key={l.label} onClick={() => go(l.href)}
              className="font-mono text-xs tracking-[0.15em] uppercase text-slate-600 hover:text-slate-300 transition-colors">
              {l.label}
            </button>
          ))}
        </nav>
        <p className="font-mono text-xs tracking-[0.1em] uppercase text-slate-700">
          © {new Date().getFullYear()} Launch Dream LLC
        </p>
      </div>
    </footer>
  );
}
