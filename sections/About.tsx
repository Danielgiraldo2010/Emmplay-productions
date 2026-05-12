"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-[var(--bg)] overflow-hidden">

      {/* Image — right half, fullheight */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[52%] overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=85&auto=format&fit=crop"
          alt="Live event production"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-transparent lg:via-[var(--bg)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-[var(--bg)]/30" />
      </motion.div>

      {/* Content — left */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 py-40">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-xl"
        >
          <motion.span variants={fadeUp} className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--accent)] mb-12 block">
            Sobre Emmplay
          </motion.span>

          <motion.h2 variants={fadeUp} className="font-display text-[clamp(56px,7vw,100px)] leading-[0.88] text-white tracking-[0.01em] mb-14">
            UNA DÉCADA
            <br />
            <span className="text-white/20">EN LOS</span>
            <br />
            GRANDES
            <br />
            <span className="text-white/20">ESCENARIOS.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[16px] text-white/45 leading-[1.85] font-light max-w-sm mb-20">
            Producimos eventos de gran escala, giras internacionales y contenido
            audiovisual para las marcas y artistas más exigentes de Latinoamérica.
          </motion.p>

          {/* 2 stats — impacto máximo, mínima densidad */}
          <motion.div variants={stagger} className="flex items-end gap-16">
            <motion.div variants={fadeUp}>
              <span className="font-display text-[clamp(64px,7vw,96px)] text-[var(--accent)] leading-none tracking-[0.01em] block">
                500+
              </span>
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/25 mt-2 block">
                Eventos producidos
              </span>
            </motion.div>
            <motion.div variants={fadeUp}>
              <span className="font-display text-[clamp(64px,7vw,96px)] text-white/15 leading-none tracking-[0.01em] block">
                12
              </span>
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/25 mt-2 block">
                Países
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
