"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[var(--bg)]/94 backdrop-blur-2xl border-b border-[var(--line)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 h-[80px] sm:h-[88px] flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity duration-300">
            <Image
              src="/logoemmplay.avif"
              alt="Emmplay"
              width={140}
              height={40}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 hover:text-white/80 transition-colors duration-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex text-[11px] font-medium tracking-[0.2em] uppercase text-white/30 hover:text-[var(--accent)] transition-colors duration-400"
          >
            Cotiza tu evento
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-px bg-white origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-4 h-px bg-white/50"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block w-6 h-px bg-white origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-between px-6 pt-28 pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-[clamp(40px,10vw,64px)] text-white/80 tracking-[0.02em] hover:text-[var(--accent)] transition-colors duration-400 block py-1"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-2"
            >
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--accent)] mb-4"
              >
                Cotiza tu evento →
              </Link>
              <p className="text-[11px] tracking-[0.2em] uppercase text-white/20">
                hola@emmplay.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
