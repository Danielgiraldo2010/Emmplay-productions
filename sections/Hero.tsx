"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden">

      <Image
        src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=85&auto=format&fit=crop"
        alt="Live production stage"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Cyan follow-spot */}
      <div
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[120%] max-w-[1200px] h-[60vh] opacity-[0.09] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 100% at 50% 0%, #00aeef, transparent 65%)" }}
      />
      <div
        className="absolute top-[30%] left-0 right-0 h-px opacity-[0.12] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 5%, #00aeef 35%, #fff 50%, #00aeef 65%, transparent 95%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 sm:px-14 md:px-20 lg:px-28 pb-12 sm:pb-20 md:pb-24">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-6 sm:mb-10"
        >
          Audio · Iluminación · LED · Broadcast · Estructuras
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(58px,13.5vw,210px)] leading-[0.87] text-white tracking-[0.01em]"
          >
            SONIDO.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.54, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(58px,13.5vw,210px)] leading-[0.87] text-white/40 tracking-[0.01em]"
          >
            LUZ.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10 sm:mb-16">
          <motion.h1
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(58px,13.5vw,210px)] leading-[0.87] text-white/20 tracking-[0.01em]"
          >
            EXPERIENCIA.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 sm:gap-12"
        >
          <p className="text-[13px] sm:text-[14px] text-white/40 max-w-[280px] leading-[1.9] font-light">
            Producción técnica de eventos a escala internacional.
            Conciertos, corporativos, bodas y touring.
          </p>

          <div className="flex items-center gap-8 sm:gap-12">
            <Link
              href="#services"
              className="group inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-white/80 hover:text-[var(--accent)] transition-colors duration-500"
            >
              Ver servicios
              <span className="block w-7 h-px bg-current group-hover:w-12 transition-all duration-500 ease-out" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-white/30 hover:text-[var(--accent)] transition-colors duration-400"
            >
              Cotizar <ArrowRight size={10} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1.0 }}
        className="hidden sm:flex absolute right-8 md:right-12 bottom-16 flex-col items-center gap-3"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-white/20" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
          className="w-px h-12 origin-top"
          style={{ background: "linear-gradient(180deg, #00aeef 0%, transparent 100%)" }}
        />
      </motion.div>
    </section>
  );
}
