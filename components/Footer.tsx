"use client";

const footerLinks = [
  { label: "Model", href: "#model" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resources", href: "#resources" },
  { label: "Apply", href: "#apply" },
];

export default function Footer() {
  function scrollTo(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="section-padding py-10 border-t border-border-subtle">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 border border-gold/50 rotate-45" />
          <span className="font-body text-xs font-600 tracking-[0.15em] uppercase text-text-secondary">
            Launch Dream
          </span>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap items-center gap-6">
          {footerLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-muted hover:text-text-secondary transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-text-muted">
          © {new Date().getFullYear()} Launch Dream LLC
        </p>
      </div>
    </footer>
  );
}
