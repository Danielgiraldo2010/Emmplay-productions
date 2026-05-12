import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

const SocialLinks = [
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: siteConfig.links.youtube,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--line)] px-6 sm:px-8 md:px-12 pt-14 sm:pt-20 pb-8 sm:pb-10">
      <div className="max-w-[1440px] mx-auto">

        {/* Top — logo + tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <Link
            href="/"
            className="font-display text-[clamp(40px,7vw,96px)] leading-none text-[var(--fg)] tracking-[0.02em] hover:text-[var(--accent)] transition-colors duration-500 group"
          >
            EMMP<span className="text-[var(--accent)] group-hover:text-[var(--fg)] transition-colors duration-500">LAY</span>
          </Link>
          <p className="text-[13px] sm:text-sm text-[var(--fg-muted)] font-light max-w-xs leading-relaxed">
            Live Production. Global Scale.
            <br />
            Medellín, Colombia — Latinoamérica.
          </p>
        </div>

        {/* Middle — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-[var(--line)]">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-5 sm:mb-6">Navegación</p>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] sm:text-sm text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-5 sm:mb-6">Servicios</p>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              {["Live Events", "Touring", "Stage Design", "Broadcast", "Brand Experiences", "Content"].map((s) => (
                <li key={s}>
                  <span className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-5 sm:mb-6">Contacto</p>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">hola@emmplay.com</li>
              <li className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">Medellín, Colombia</li>
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-5 sm:mb-6">Redes</p>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {SocialLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    aria-label={s.label}
                    className="inline-flex items-center gap-3 text-[13px] sm:text-sm text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors duration-300 font-light"
                  >
                    {s.icon}
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-[11px] tracking-[0.1em] text-[var(--fg-muted)]">
            © {new Date().getFullYear()} Emmplay. Todos los derechos reservados.
          </p>
          <p className="text-[11px] tracking-[0.1em] text-[var(--fg-muted)] opacity-50">
            Producción de clase mundial desde Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
