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
    "w-full bg-transparent border-b border-white/[0.07] focus:border-[var(--accent)] outline-none py-4 sm:py-5 text-[14px] sm:text-[15px] text-white placeholder:text-white/20 transition-colors duration-500 font-light";

  return (
    <section id="contact" className="py-28 sm:py-36 lg:py-48 px-6 sm:px-8 md:px-16 bg-[var(--surface)]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 sm:gap-20 lg:gap-40">

          {/* Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-8 sm:mb-12 block">
              Contacto
            </motion.span>

            <motion.h2 variants={fadeUp} className="font-display text-[clamp(52px,8vw,120px)] leading-[0.86] text-white tracking-[0.01em] mb-10 sm:mb-14 lg:mb-16">
              COTIZA
              <br />
              <span className="text-white/15">TU</span>
              <br />
              EVENTO.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/30 font-light leading-relaxed max-w-[300px] mb-10 sm:mb-14">
              Audio, iluminación, LED, broadcast o estructuras —
              cuéntanos qué necesitas y te enviamos una propuesta.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-6 sm:gap-8">
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Email</p>
                <p className="text-[14px] sm:text-[15px] text-white/50 font-light">hola@emmplay.com</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Ubicación</p>
                <p className="text-[14px] sm:text-[15px] text-white/50 font-light">Medellín, Colombia</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-2">Cobertura</p>
                <p className="text-[14px] sm:text-[15px] text-white/50 font-light">Colombia · Latinoamérica</p>
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
                className="flex flex-col gap-6 sm:gap-8"
              >
                <div className="w-12 h-px bg-[var(--accent)]" />
                <h3 className="font-display text-[clamp(36px,5vw,56px)] text-white tracking-[0.02em] leading-tight">
                  SOLICITUD<br />RECIBIDA.
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white/30 font-light leading-relaxed max-w-xs">
                  Te enviamos una propuesta en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10 lg:gap-11">
                <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
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
                <button
                  type="submit"
                  className="group self-start inline-flex items-center gap-4 sm:gap-5 text-[11px] font-medium tracking-[0.28em] uppercase text-white hover:text-[var(--accent)] transition-colors duration-300 mt-2"
                >
                  Solicitar propuesta
                  <span className="block w-10 h-px bg-current group-hover:w-16 transition-all duration-500" />
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
