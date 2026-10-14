"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const heroMarkets = ["Conciertos", "Corporativos", "Eventos sociales", "Festivales"];

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[760px] items-center overflow-hidden pt-28 sm:min-h-[820px] lg:min-h-[min(92svh,920px)]">
      <video aria-hidden="true" autoPlay muted loop playsInline preload="metadata" poster="/images/emmplay/consola.jpg" className="hero-media absolute inset-0 h-full w-full object-cover object-bottom">
        <source src="/videos/emmplay-inicio.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,12,.96)_0%,rgba(2,7,12,.80)_42%,rgba(2,7,12,.20)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02070c]/95 via-transparent to-black/25" />

      <div className="site-shell relative z-10 pb-44 pt-20 sm:pb-48 sm:pt-24">
        <motion.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="max-w-[720px]">
          <p className="eyebrow mb-6">Producción técnica de eventos</p>
          <h1 className="hero-title font-display leading-[1.05] text-white">
            CREAMOS EXPERIENCIAS <span className="text-[var(--accent-soft)]">INOLVIDABLES.</span>
          </h1>
          <p className="mt-7 max-w-[540px] text-base leading-7 text-white/72 sm:text-lg">
            Sonido, iluminación, video y estructuras para hacer realidad eventos de cualquier escala.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/contacto" className="group inline-flex h-14 items-center justify-center gap-3 rounded-sm bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-[#02070c]">
              Cotizar evento <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/servicios" className="group inline-flex min-h-11 items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white/75 transition-colors hover:text-white">
              Ver servicios <span className="h-px w-9 bg-white/40 transition-all group-hover:w-14 group-hover:bg-white" />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-[#02070c]/82 backdrop-blur-xl">
        <div className="site-shell">
          <div className="flex items-center justify-between gap-5 pt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
            <span className="text-[var(--accent-soft)]">Producción para</span>
            <span>Colombia · Estados Unidos</span>
          </div>
          <div className="grid grid-cols-2 gap-x-5 pb-4 sm:grid-cols-4 sm:pb-5">
            {heroMarkets.map((market) => (
              <Link key={market} href="/contacto" className="group flex min-h-14 items-center gap-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-white sm:min-h-16">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-soft)]" />
                <span className="min-w-0 leading-4">{market}</span>
                <ArrowRight size={13} className="ml-auto shrink-0 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
