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
    "w-full bg-transparent border-b border-white/[0.07] focus:border-[var(--accent)] outline-none py-6 text-[15px] text-white placeholder:text-white/18 transition-colors duration-500 font-light";

  return (
    <section id="contact" className="py-48 px-8 md:px-16 bg-[var(--surface)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-24 lg:gap-48">

          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--accent)] mb-12 block">
              Contacto
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(64px,8vw,120px)] leading-[0.86] text-white tracking-[0.01em] mb-20">
              HABLEMOS
              <br />
              <span className="text-white/15">DE TU</span>
              <br />
              PROYECTO.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex flex-col gap-10">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-3">Email</p>
                <p className="text-[16px] text-white/50 font-light">hola@emmplay.com</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-3">Ubicación</p>
                <p className="text-[16px] text-white/50 font-light">Medellín, Colombia</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="flex flex-col gap-8"
              >
                <div className="w-14 h-px bg-[var(--accent)]" />
                <h3 className="font-display text-[56px] text-white tracking-[0.02em] leading-tight">
                  MENSAJE<br />RECIBIDO.
                </h3>
                <p className="text-[15px] text-white/30 font-light leading-relaxed max-w-xs">
                  Nuestro equipo te contactará en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="grid sm:grid-cols-2 gap-12">
                  <input required type="text" placeholder="Nombre" className={inputClass} />
                  <input required type="email" placeholder="Email" className={inputClass} />
                </div>
                <input type="text" placeholder="Empresa" className={inputClass} />
                <textarea
                  required
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="group self-start inline-flex items-center gap-6 text-[11px] font-medium tracking-[0.28em] uppercase text-white hover:text-[var(--accent)] transition-colors duration-400 mt-4"
                >
                  Enviar mensaje
                  <span className="block w-12 h-px bg-current group-hover:w-20 transition-all duration-600" />
                  <ArrowRight size={11} />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
