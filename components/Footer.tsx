import Link from "next/link";
import Image from "next/image";
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
    label: "Facebook",
    href: siteConfig.links.facebook,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: siteConfig.links.x,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/logoemmplay.avif"
              alt="Emmplay"
              width={200}
              height={56}
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>
          <p className="text-[13px] sm:text-sm text-[var(--fg-muted)] font-light max-w-xs leading-relaxed">
            Sonido. Luz. Experiencia.
            <br />
            Manizales, Caldas — Colombia.
          </p>
        </div>

        {/* Middle */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-[var(--line)]">
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
              {["Audio Profesional", "Iluminación", "Pantallas LED", "Broadcast", "Estructuras"].map((s) => (
                <li key={s}>
                  <span className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--fg-muted)] mb-5 sm:mb-6">Contacto</p>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li>
                <a href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0" target="_blank" className="text-[13px] sm:text-sm text-[var(--fg-dim)] hover:text-[var(--accent)] transition-colors duration-300 font-light">
                  +57 311 788 3549
                </a>
              </li>
              <li className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">hola@emmplay.com</li>
              <li className="text-[13px] sm:text-sm text-[var(--fg-dim)] font-light">Manizales, Caldas</li>
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
            © {new Date().getFullYear()} Emmplay Producciones S.A.S. Todos los derechos reservados.
          </p>
          <p className="text-[11px] tracking-[0.1em] text-[var(--fg-muted)] opacity-50">
            Manizales, Caldas — Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
