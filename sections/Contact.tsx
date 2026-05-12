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
    "w-full bg-white/[0.05] border border-white/[0.10] hover:border-white/[0.20] focus:border-[var(--accent)]/70 focus:bg-white/[0.07] outline-none px-5 py-5 text-[15px] text-white placeholder:text-white/25 transition-all duration-400 font-light";

  return (
    <section id="contact" className="relative bg-[var(--bg)] overflow-hidden">

      {/* Ambient glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at 0% 100%, #00aeef, transparent 70%)" }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen">

        {/* ── LEFT ── */}
        <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Eyebrow */}
            <motion.span variants={fadeUp} className="text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-8 block">
              Contacto
            </motion.span>

            {/* Headline — grande */}
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(52px,6.5vw,96px)] leading-[0.88] text-white tracking-[0.01em] mb-6">
              COTIZA TU
              <br />
              <span className="text-white/20">EVENTO.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[15px] text-white/35 font-light leading-relaxed mb-12 max-w-sm">
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
                  className="flex flex-col gap-6 py-10"
                >
                  <div className="w-12 h-px bg-[var(--accent)]" />
                  <h3 className="font-display text-[clamp(40px,5vw,64px)] text-white tracking-[0.02em] leading-tight">
                    SOLICITUD<br />RECIBIDA.
                  </h3>
                  <p className="text-[15px] text-white/30 font-light leading-relaxed max-w-xs">
                    Te enviamos una propuesta en menos de 24 horas.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Nombre" className={inputClass} />
                    <input required type="email" placeholder="Email" className={inputClass} />
                  </div>
                  <input type="text" placeholder="Empresa / Organización" className={inputClass} />
                  <textarea
                    required
                    rows={5}
                    placeholder="Tipo de evento, fecha aproximada y servicios que necesitas..."
                    className={`${inputClass} resize-none`}
                  />
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-5 text-[12px] font-medium tracking-[0.28em] uppercase text-white hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      Solicitar propuesta
                      <span className="block w-10 h-px bg-current group-hover:w-16 transition-all duration-500" />
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info — más grande y visible */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-14 pt-12 border-t border-white/[0.08]"
            >
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/25 mb-3">WhatsApp</p>
                <a
                  href="https://api.whatsapp.com/send/?phone=3117883549&text&type=phone_number&app_absent=0"
                  target="_blank"
                  className="text-[15px] text-white/55 font-light hover:text-[var(--accent)] transition-colors duration-300 block"
                >
                  +57 311 788 3549
                </a>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/25 mb-3">Email</p>
                <p className="text-[15px] text-white/55 font-light">hola@emmplay.com</p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/25 mb-3">Ubicación</p>
                <p className="text-[15px] text-white/55 font-light">Manizales, Caldas<br />Colombia</p>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* ── RIGHT — imagen cinematográfica ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <Image
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1400&q=90&auto=format&fit=crop"
            alt="Live event production"
            fill
            className="object-cover object-center brightness-[0.5]"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/50 via-transparent to-transparent" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(0,174,239,0.08), transparent 70%)" }}
          />
          {/* Statement */}
          <div className="absolute bottom-12 left-10 right-10">
            <p className="font-display text-[clamp(20px,2.2vw,32px)] text-white/18 tracking-[0.05em] leading-[1.2]">
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
