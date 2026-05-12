"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#050505]/92 backdrop-blur-2xl border-b border-[var(--line)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-2xl text-[var(--fg)] tracking-[0.12em] hover:text-[var(--accent)] transition-colors duration-500 group"
          >
            EMMP<span className="text-[var(--accent)] group-hover:text-[var(--fg)] transition-colors duration-500">LAY</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="text-[11px] font-medium tracking-[0.18em] uppercase px-4 py-2 border border-[var(--line-bright)] text-[var(--fg-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
            >
              Iniciar proyecto
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px] group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-[var(--fg)]"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-4 h-px bg-[var(--fg)]"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-[var(--fg)]"
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-end pb-16 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-[var(--fg)] tracking-wide hover:text-[var(--accent)] transition-colors duration-500 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-[var(--line)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                hola@emmplay.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
