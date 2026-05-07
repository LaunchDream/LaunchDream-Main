"use client";



const links = [
  { label: "Model", href: "#model" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Apply", href: "#apply" },
];

export default function Footer() {
  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer className="section-padding py-8 bg-slate-900 border-t border-slate-800">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Launch Dream" width={32} height={32} style={{ objectFit: "contain" }} />
          <span className="font-body text-sm font-700 tracking-[0.1em] uppercase text-slate-400">Launch Dream</span>
        </div>
        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
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
