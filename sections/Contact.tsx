"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.14] focus:border-[var(--accent)]/60 focus:bg-white/[0.06] outline-none px-5 py-4 text-[14px] text-white placeholder:text-white/22 transition-all duration-400 font-light";

  return (
    <section id="contact" className="relative bg-[var(--bg)] overflow-hidden">

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-[1fr_1fr] min-h-[80vh]">

        {/* ── LEFT — form ── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 py-20 sm:py-28">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-[480px]"
          >
            <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-8 block">
              Contacto
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(42px,5vw,76px)] leading-[0.9] text-white tracking-[0.01em] mb-5">
              COTIZA TU
              <br />
              <span className="text-white/20">EVENTO.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/30 font-light leading-relaxed mb-12 max-w-[340px]">
              Audio, iluminación, LED, broadcast o estructuras —
              cuéntanos qué necesitas y te enviamos una propuesta.
            </motion.p>

            {/* Form */}
            <motion.div variants={fadeUp}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  className="flex flex-col gap-5 py-8"
                >
                  <div className="w-10 h-px bg-[var(--accent)]" />
                  <h3 className="font-display text-[clamp(32px,4vw,48px)] text-white tracking-[0.02em] leading-tight">
                    SOLICITUD<br />RECIBIDA.
                  </h3>
                  <p className="text-[13px] text-white/30 font-light leading-relaxed max-w-xs">
                    Te enviamos una propuesta en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input required type="text" placeholder="Nombre" className={inputClass} />
                    <input required type="email" placeholder="Email" className={inputClass} />
                  </div>
                  <input type="text" placeholder="Empresa / Organización" className={inputClass} />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tipo de evento, fecha aproximada y servicios que necesitas..."
                    className={`${inputClass} resize-none`}
                  />
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-4 text-[11px] font-medium tracking-[0.28em] uppercase text-white hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      Solicitar propuesta
                      <span className="block w-8 h-px bg-current group-hover:w-14 transition-all duration-500" />
                      <ArrowRight size={11} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info — below form */}
            <motion.div
              variants={stagger}
              className="flex flex-wrap gap-x-10 gap-y-5 mt-12 pt-10 border-t border-white/[0.06]"
            >
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/18 mb-1.5">WhatsApp</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="text-[13px] text-white/40 font-light hover:text-[var(--accent)] transition-colors duration-300"
                >
                  +57 311 788 3549
                </a>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/18 mb-1.5">Email</p>
                <p className="text-[13px] text-white/40 font-light">hola@emmplay.com</p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/18 mb-1.5">Ubicación</p>
                <p className="text-[13px] text-white/40 font-light">Manizales, Caldas</p>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* ── RIGHT — cinematic image ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=90&auto=format&fit=crop"
            alt="Live event production"
            fill
            className="object-cover object-center brightness-[0.55]"
            sizes="50vw"
          />
          {/* Left-to-right fade into bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-transparent" />
          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent" />
          {/* Cyan glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 60% 30%, rgba(0,174,239,0.07), transparent 70%)" }}
          />
          {/* Closing statement overlay */}
          <div className="absolute bottom-10 left-8 right-8">
            <p className="font-display text-[clamp(16px,2vw,26px)] text-white/15 tracking-[0.06em] leading-tight">
              CREAMOS EXPERIENCIAS
              <br />
              QUE LAS PERSONAS
              <br />
              RECUERDAN.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
