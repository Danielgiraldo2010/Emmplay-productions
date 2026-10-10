"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MapPin, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export default function Navbar() {
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
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-white/8 bg-[#02070c]/92 backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/80 to-transparent"}`}>
        <div className="site-shell flex h-[76px] items-center justify-between gap-8 lg:h-[88px]">
          <Link href="#inicio" onClick={() => setOpen(false)} aria-label="Ir al inicio" className="relative z-50 shrink-0">
            <Image src="/logoemmplay.png" alt="Emmplay Producciones" width={186} height={143} priority className="h-[76px] w-auto object-contain lg:h-[88px]" />
          </Link>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <span className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.11em] text-white/65 xl:flex">
              <MapPin size={13} className="text-[var(--accent-soft)]" /> Colombia · USA
            </span>
            <Link href="#contact" className="group inline-flex h-11 items-center gap-3 rounded-sm bg-[var(--accent)] px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#03101b]">
              Cotizar evento <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button ref={menuButton} type="button" onClick={() => setOpen(!open)} className="relative z-50 grid h-11 w-11 place-items-center border border-white/15 text-white lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div ref={menuPanel} id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 overflow-y-auto bg-[#02070c] px-6 pb-10 pt-28 lg:hidden">
            <nav aria-label="Navegación móvil" className="flex flex-col border-t border-white/10">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                  <Link href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-white/10 py-4 font-display text-[clamp(1.8rem,9vw,3.4rem)] uppercase text-white">
                    {link.label}<span className="text-base text-[var(--accent)]">0{index + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto">
              <Link href="#contact" onClick={() => setOpen(false)} className="flex h-14 items-center justify-center gap-3 bg-[var(--accent)] text-sm font-bold uppercase tracking-widest text-white">
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
