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
    "w-full bg-transparent border-0 border-b border-white/15 hover:border-white/30 focus:border-[var(--accent)] outline-none px-0 py-4 text-[15px] text-white placeholder:text-white/28 transition-all duration-400 font-light tracking-wide";

  const labelClass =
    "text-[10px] tracking-[0.28em] uppercase text-white/30 font-medium mb-2.5 block";

  return (
    <section id="contact" className="relative bg-[var(--bg)] overflow-hidden">

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Ambient glow — left */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[700px] opacity-[0.05] pointer-events-none z-0"
        style={{ background: "radial-gradient(ellipse 80% 80% at 0% 50%, #00aeef, transparent 70%)" }}
      />

      {/* Two-column layout — fills viewport height */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">

        {/* ══════════════════════════════════════
            LEFT COLUMN — 55% — Form
        ══════════════════════════════════════ */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-24 py-20 sm:py-28 lg:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="w-full"
          >
            {/* Label */}
            <motion.span
              variants={fadeUp}
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.45em] uppercase text-[var(--accent)] mb-8 sm:mb-10 block"
            >
              Contacto
            </motion.span>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
              <h2 className="font-display text-[clamp(54px,6.5vw,100px)] leading-[0.87] text-white tracking-[0.01em]">
                COTIZA TU
              </h2>
              <h2 className="font-display text-[clamp(54px,6.5vw,100px)] leading-[0.87] text-white/14 tracking-[0.01em]">
                EVENTO.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-[14px] sm:text-[15px] text-white/35 font-light leading-[1.85] mb-10 sm:mb-14 max-w-[400px]"
            >
              Cuéntanos qué necesitas y te enviaremos una propuesta
              en menos de 24 horas.
            </motion.p>

            {/* ── FORM CARD ── */}
            <motion.div
              variants={fadeUp}
              className="w-full relative"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(0,174,239,0.12)",
                boxShadow: "0 0 60px rgba(0,174,239,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Corner accent top-left */}
              <div className="absolute top-0 left-0 w-10 h-px bg-[var(--accent)] opacity-50" />
              <div className="absolute top-0 left-0 w-px h-10 bg-[var(--accent)] opacity-50" />

              <div className="p-7 sm:p-10">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex flex-col gap-6 py-12"
                  >
                    <div className="w-14 h-px bg-[var(--accent)]" />
                    <h3 className="font-display text-[clamp(44px,5vw,64px)] text-white tracking-[0.02em] leading-tight">
                      SOLICITUD<br />RECIBIDA.
                    </h3>
                    <p className="text-[15px] text-white/30 font-light leading-relaxed max-w-sm">
                      Te enviamos una propuesta en menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">

                    {/* Row 1 */}
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                      <div>
                        <label className={labelClass}>Nombre</label>
                        <input required type="text" placeholder="Tu nombre completo" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Email</label>
                        <input required type="email" placeholder="tu@email.com" className={inputClass} />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div>
                      <label className={labelClass}>Empresa / Organización</label>
                      <input type="text" placeholder="Nombre de tu empresa u organización" className={inputClass} />
                    </div>

                    {/* Row 3 */}
                    <div>
                      <label className={labelClass}>Información del evento</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tipo de evento, fecha aproximada, ciudad y servicios que necesitas..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* CTA — dentro de la card con margen */}
                    <div className="pt-2 pb-1">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.008 }}
                        whileTap={{ scale: 0.997 }}
                        className="group w-full flex items-center justify-center gap-4 h-12 sm:h-14 rounded-sm bg-[var(--accent)] text-[#040404] text-[12px] sm:text-[13px] font-bold tracking-[0.28em] uppercase transition-colors duration-300 hover:bg-white"
                        style={{ boxShadow: "0 0 40px rgba(0,174,239,0.25), 0 0 80px rgba(0,174,239,0.08)" }}
                      >
                        <span>Solicitar propuesta</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                      </motion.button>
                    </div>

                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT COLUMN — 45% — Cinematic image
        ══════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full lg:w-[45%] relative overflow-hidden"
          style={{ minHeight: "50vh" }}
        >
          {/* Image */}
          <Image
            src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=90&auto=format&fit=crop"
            alt="Stage with line array speakers"
            fill
            priority
            loading="eager"
            className="object-cover object-center"
            style={{ filter: "brightness(0.45) saturate(1.1)" }}
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          {/* Left-to-right fade — seamless blend with form */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, var(--bg) 0%, rgba(4,4,4,0.6) 20%, rgba(4,4,4,0.1) 50%, transparent 100%)",
            }}
          />

          {/* Top + bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-[var(--bg)]/30" />

          {/* Cyan color grade */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 50% at 70% 35%, rgba(0,174,239,0.09), transparent 65%)",
            }}
          />

          {/* Statement — bottom */}
          <div className="absolute bottom-10 sm:bottom-14 left-8 sm:left-12 right-8 sm:right-12">
            <p className="font-display text-[clamp(16px,1.6vw,22px)] text-white/12 tracking-[0.1em] leading-[1.4]">
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
