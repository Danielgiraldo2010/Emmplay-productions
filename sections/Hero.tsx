"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-end overflow-hidden">

      {/* ── Background image — concierto/escenario ── */}
      <Image
        src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=1920&q=80&auto=format&fit=crop"
        alt="Live production stage"
        fill
        priority
        className="object-cover object-center scale-[1.02]"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Cyan stage glow — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.15] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, #00aeef, transparent 70%)" }}
      />

      {/* Horizontal beam */}
      <div
        className="absolute top-[32%] left-0 right-0 h-px opacity-[0.18] pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #00aeef 30%, #fff 50%, #00aeef 70%, transparent)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-8 md:px-16 pb-20 md:pb-28">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--accent)] mb-8"
        >
          Live Production · Events · Touring
        </motion.p>

        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(80px,13vw,200px)] leading-[0.88] text-white tracking-[0.01em]"
          >
            WE BUILD
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-14">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(80px,13vw,200px)] leading-[0.88] text-white/30 tracking-[0.01em]"
          >
            THE MOMENT.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-10"
        >
          <p className="text-[15px] text-white/50 max-w-xs leading-relaxed font-light">
            Producción de eventos masivos, touring y experiencias audiovisuales
            de escala internacional.
          </p>

          <div className="flex items-center gap-10">
            <Link
              href="#portfolio"
              className="group inline-flex items-center gap-4 text-[11px] font-medium tracking-[0.2em] uppercase text-white hover:text-[var(--accent)] transition-colors duration-400"
            >
              Ver proyectos
              <span className="block w-10 h-px bg-current group-hover:w-16 transition-all duration-500" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-white/40 hover:text-[var(--accent)] transition-colors duration-300"
            >
              Contacto <ArrowRight size={11} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute right-8 md:right-14 bottom-24 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="w-px h-14 origin-top"
          style={{ background: "linear-gradient(180deg, #00aeef, transparent)" }}
        />
      </motion.div>
    </section>
  );
}
