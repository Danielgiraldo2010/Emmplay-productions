"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/animations";
import { siteConfig } from "@/data/site";

const socials = [
  {
    label: "Instagram",
    href: siteConfig.links.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: siteConfig.links.x,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: siteConfig.links.whatsapp,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/15 focus:border-[var(--accent)] outline-none py-4 text-[14px] text-white placeholder:text-white/30 transition-colors duration-300 font-light";

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[var(--bg)] overflow-hidden">

      {/* Glow top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 0%, #00aeef, transparent 70%)" }}
      />
      {/* Glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, #00aeef, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[720px] mx-auto">

        {/* Header — centrado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14 sm:mb-16"
        >
          <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-5 block">
            Contacto
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(48px,7vw,88px)] leading-[0.9] text-white tracking-[0.01em] mb-5">
            COTIZA TU
            <br />
            <span className="text-white/20">EVENTO.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[14px] text-white/35 font-light leading-relaxed max-w-sm mx-auto">
            Cuéntanos qué necesitas y te enviamos una propuesta en menos de 24 horas.
          </motion.p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.03] border border-white/[0.08] p-8 sm:p-10 mb-10"
        >
          {/* Cyan corner accent */}
          <div className="absolute top-0 left-0 w-12 h-px bg-[var(--accent)] opacity-60" />
          <div className="absolute top-0 left-0 w-px h-12 bg-[var(--accent)] opacity-60" />
          <div className="absolute bottom-0 right-0 w-12 h-px bg-[var(--accent)] opacity-20" />
          <div className="absolute bottom-0 right-0 w-px h-12 bg-[var(--accent)] opacity-20" />

          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center gap-5 py-10"
            >
              <div className="w-10 h-px bg-[var(--accent)]" />
              <h3 className="font-display text-[clamp(36px,5vw,52px)] text-white tracking-[0.02em] leading-tight">
                SOLICITUD<br />RECIBIDA.
              </h3>
              <p className="text-[14px] text-white/30 font-light max-w-xs">
                Te enviamos una propuesta en menos de 24 horas.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Nombre</label>
                  <input required type="text" placeholder="Tu nombre" className={inputClass} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Email</label>
                  <input required type="email" placeholder="tu@email.com" className={inputClass} />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Empresa / Organización</label>
                <input type="text" placeholder="Nombre de tu empresa" className={inputClass} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/25 font-medium">Tu evento</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tipo de evento, fecha aproximada y servicios que necesitas..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-[var(--accent)] text-black text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
                >
                  Solicitar propuesta
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Info row — email, ubicación, redes en línea */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.07]"
        >
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-2">WhatsApp</p>
            <a
              href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0"
              target="_blank"
              className="text-[13px] text-white/50 font-light hover:text-[var(--accent)] transition-colors duration-300"
            >
              +57 311 788 3549
            </a>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-2">Email</p>
            <p className="text-[13px] text-white/50 font-light">hola@emmplay.com</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-2">Ubicación</p>
            <p className="text-[13px] text-white/50 font-light">Manizales, Caldas</p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-white/20 mb-2">Redes</p>
            <div className="flex items-center gap-4 mt-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="text-white/40 hover:text-[var(--accent)] transition-colors duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
