import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#02070c] py-12 sm:py-16">
      <div className="site-shell">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.9fr_1.1fr_.7fr]">
          <div>
            <Image src="/logoemmplay.png" alt="Emmplay Producciones" width={190} height={146} className="h-24 w-auto object-contain" />
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">Producción técnica de eventos que conectan personas y crean recuerdos.</p>
          </div>
          <div>
            <p className="eyebrow mb-5">Navegación</p>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Contacto</p>
            <div className="space-y-3 text-sm text-white/70 [&_svg]:shrink-0">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 transition-colors hover:text-white"><Mail size={15} className="text-[var(--accent-soft)]" />{siteConfig.contact.email}</a>
              <a href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white"><Phone size={15} className="text-[var(--accent-soft)]" />CO {siteConfig.contact.colombia}</a>
              <a href={`tel:${siteConfig.contact.usa.replace(/[^+\d]/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-white"><Phone size={15} className="text-[var(--accent-soft)]" />USA {siteConfig.contact.usa}</a>
              <p className="flex items-center gap-3"><MapPin size={15} className="text-[var(--accent-soft)]" />{siteConfig.contact.coverage}</p>
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Social</p>
            <div className="flex gap-3">
              <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center border border-white/15 text-white/55 transition-colors hover:border-[var(--accent)] hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </Link>
              <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-10 w-10 place-items-center border border-white/15 text-white/55 transition-colors hover:border-[var(--accent)] hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M14 22v-9h3l.5-4H14V7c0-1.1.3-2 2-2h2V1.5c-.7-.1-1.8-.3-3-.3-3 0-5 1.8-5 5.2V9H7v4h3v9h4Z" />
                </svg>
              </Link>
              <Link href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid h-10 w-10 place-items-center border border-white/15 text-white/55 transition-colors hover:border-[var(--accent)] hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M20.52 3.48A11.92 11.92 0 0 0 12.04 0C5.43 0 .05 5.38.05 12c0 2.12.55 4.19 1.6 6.01L0 24l6.14-1.61a11.94 11.94 0 0 0 5.9 1.5h.01c6.61 0 11.99-5.38 11.99-12a11.92 11.92 0 0 0-3.52-8.41ZM12.05 21.87a9.93 9.93 0 0 1-5.05-1.38l-.36-.21-3.64.95.97-3.55-.24-.37A9.9 9.9 0 0 1 2.06 12c0-5.51 4.48-9.99 9.98-9.99a9.92 9.92 0 0 1 7.05 2.93A9.92 9.92 0 0 1 22.01 12c0 5.51-4.48 9.99-9.96 9.99Zm5.48-7.43c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Emmplay Producciones S.A.S. Todos los derechos reservados.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
