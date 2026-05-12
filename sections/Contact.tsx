"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    "w-full bg-white/[0.03] border border-white/[0.07] focus:border-[var(--accent)]/50 focus:bg-white/[0.05] outline-none px-4 py-3.5 text-[14px] text-white placeholder:text-white/20 transition-all duration-400 font-light rounded-none";

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-[var(--bg)] overflow-hidden">

      {/* Ambient glow — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, #00aeef, transparent 70%)" }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-[960px] mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14 sm:mb-18"
        >
          <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-6 block">
            Contacto
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-[clamp(40px,5.5vw,80px)] leading-[0.9] text-white tracking-[0.01em] mb-5">
            COTIZA TU
            <br />
            <span className="text-white/20">EVENTO.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/30 font-light leading-relaxed max-w-sm">
            Audio, iluminación, LED, broadcast o estructuras —
            cuéntanos qué necesitas y te enviamos una propuesta.
          </motion.p>
        </motion.div>

        {/* Form + info — side by side on desktop */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex flex-col gap-5 py-10"
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
                <div className="pt-3">
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

          {/* Contact info — right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="flex flex-col gap-7 lg:pt-1"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0"
                target="_blank"
                className="text-[13px] text-white/50 font-light hover:text-[var(--accent)] transition-colors duration-300"
              >
                +57 311 788 3549
              </a>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Email</p>
              <p className="text-[13px] text-white/50 font-light">hola@emmplay.com</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Ubicación</p>
              <p className="text-[13px] text-white/50 font-light">Manizales, Caldas<br />Colombia</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Cobertura</p>
              <p className="text-[13px] text-white/50 font-light">Colombia · Latinoamérica</p>
            </motion.div>
          </motion.div>

        </div>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="font-display text-[clamp(18px,2.5vw,32px)] text-white/[0.07] tracking-[0.04em] mt-20 sm:mt-28 text-center"
        >
          CREAMOS EXPERIENCIAS QUE LAS PERSONAS RECUERDAN.
        </motion.p>

      </div>
    </section>
  );
}
