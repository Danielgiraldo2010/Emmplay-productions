"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuPanel.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
      if (event.key === "Tab") {
        const links = Array.from(menuPanel.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []);
        const first = menuButton.current;
        const last = links.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first?.focus();
        }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#02070c]/95 shadow-[0_12px_40px_rgba(0,0,0,.25)] backdrop-blur-xl" : "bg-gradient-to-b from-black/80 to-transparent"}`}>
        <div className="bg-[#061019]/95">
          <div className="site-shell flex h-7 items-center justify-between gap-4 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/65 sm:text-[10px]">
            <span>
              <span className="sm:hidden">Producción profesional</span>
              <span className="hidden sm:inline">Producción profesional · Servicio personalizado</span>
            </span>
            <div className="hidden items-center gap-5 sm:flex">
              <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-white"><Mail size={11} aria-hidden="true" />{siteConfig.contact.email}</a>
              <span className="inline-flex items-center gap-1.5"><MapPin size={11} aria-hidden="true" className="text-[var(--accent-soft)]" />Colombia · USA</span>
            </div>
          </div>
        </div>
        <div>
        <div className="site-shell flex h-[70px] items-center justify-between gap-8 lg:h-[78px]">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Ir al inicio" className="relative z-50 shrink-0">
            <Image src="/logoemmplay.png" alt="Emmplay Producciones" width={186} height={143} priority className="h-[70px] w-auto object-contain lg:h-[78px]" />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${pathname === link.href ? "text-[var(--accent-soft)]" : "text-white/75 hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link href="/contacto" className="group inline-flex h-11 items-center gap-3 rounded-sm bg-[var(--accent)] px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#03101b]">
              Cotizar evento <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button ref={menuButton} type="button" onClick={() => setOpen(!open)} className="relative z-50 grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div ref={menuPanel} id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 overflow-y-auto bg-[#02070c] px-6 pb-10 pt-32 lg:hidden">
            <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="flex items-center py-3 font-display text-[clamp(1.8rem,9vw,3.4rem)] uppercase text-white">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto">
              <Link href="/contacto" onClick={() => setOpen(false)} className="flex h-14 items-center justify-center gap-3 bg-[var(--accent)] text-sm font-bold uppercase tracking-widest text-white">
                Cotizar evento <ArrowUpRight size={16} />
              </Link>
              <p className="mt-5 text-center text-xs tracking-widest text-white/35">{siteConfig.contact.coverage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
