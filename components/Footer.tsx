import Link from "next/link";
import Image from "next/image";
import { navLinks, siteConfig } from "@/data/site";

const socials = [
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: siteConfig.links.x,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--line)] px-6 sm:px-10 md:px-16 lg:px-24 pt-12 sm:pt-16 pb-8 sm:pb-10">
      <div className="max-w-[1440px] mx-auto">

        {/* Grid: 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 sm:gap-12 pb-10 sm:pb-12 border-b border-[var(--line)]">

          {/* Logo + tagline */}
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Link href="/" className="opacity-70 hover:opacity-100 transition-opacity duration-300 inline-block">
              <Image
                src="/logoemmplay.png"
                alt="Emmplay"
                width={0}
                height={0}
                sizes="220px"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-[14px] sm:text-[15px] text-white/35 font-light leading-relaxed max-w-[240px]">
              Producción técnica de eventos que dejan huella.
            </p>
            <p className="text-[13px] sm:text-[14px] text-white/25 font-light">
              Manizales, Caldas — Colombia
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/30 mb-1">Navegación</p>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-white/28 hover:text-white/65 transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/30 mb-1">Contacto</p>
            <a
              href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0"
              target="_blank"
              className="text-[15px] text-white/28 hover:text-[var(--accent)] transition-colors duration-300 font-light"
            >
              +57 311 788 3549
            </a>
            <p className="text-[15px] text-white/28 font-light">info.emmplayproducciones@gmail.com</p>
            <p className="text-[15px] text-white/28 font-light">Manizales, Caldas</p>
          </div>

          {/* Redes */}
          <div className="flex flex-col gap-3">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/30 mb-1">Redes</p>
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="inline-flex items-center gap-3 text-[15px] text-white/28 hover:text-[var(--accent)] transition-colors duration-300 font-light"
              >
                {s.icon}
                {s.label}
              </Link>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6">
          <p className="text-[14px] text-white/40 font-light">
            © {new Date().getFullYear()} Emmplay Producciones S.A.S.
          </p>
          <p className="text-[13px] text-white/20 font-light">
            Sonido. Luz. Experiencia.
          </p>
        </div>

      </div>
    </footer>
  );
}
