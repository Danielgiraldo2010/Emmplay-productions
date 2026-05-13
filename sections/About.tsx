"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-[var(--bg)] overflow-hidden">

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.0, ease: "easeOut" }}
        className="absolute inset-0 lg:left-[48%] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&q=90&auto=format&fit=crop"
          alt="Emmplay producción en vivo"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        <div className="absolute inset-0 bg-[var(--bg)]/85 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-5 sm:px-8 md:px-12 lg:px-20 py-28 sm:py-36 lg:py-44">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-[520px]"
        >
          <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-10 sm:mb-14 block">
            Sobre Emmplay
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-display text-[clamp(44px,6.5vw,88px)] leading-[0.9] text-white tracking-[0.01em] mb-10 sm:mb-14">
            CADA EVENTO,
            <br />
            <span className="text-white/22">UNA OBRA.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[13px] sm:text-[15px] text-white/40 leading-[1.9] font-light max-w-[360px] mb-6 sm:mb-8">
            Somos una empresa de producción técnica especializada en audio profesional,
            iluminación escénica, pantallas LED, broadcast y estructuras para eventos
            de cualquier escala.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/25 leading-[1.9] font-light max-w-[340px] mb-16 sm:mb-24">
            Desde conciertos masivos hasta bodas íntimas, desde eventos corporativos
            hasta giras internacionales — hacemos que cada momento se vea, se escuche
            y se sienta extraordinario.
          </motion.p>

          {/* Stats */}
          <motion.div variants={stagger} className="flex items-end gap-12 sm:gap-20">
            <motion.div variants={fadeUp}>
              <span className="font-display text-[clamp(56px,7vw,88px)] text-[var(--accent)] leading-none block">
                500+
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/22 mt-3 block">
                Eventos producidos
              </span>
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="font-display text-[clamp(56px,7vw,88px)] text-white/[0.10] leading-none block">
                10+
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/22 mt-3 block">
                Años de experiencia
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
