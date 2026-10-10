"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[640px] items-center overflow-hidden pt-24 sm:min-h-[680px] lg:min-h-[min(78svh,820px)]">
      <Image src="/images/emmplay/consola.jpg" alt="Concierto con sonido, pantallas e iluminación, publicado en la web de Emmplay" fill loading="eager" fetchPriority="high" sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,12,.94)_0%,rgba(2,7,12,.75)_46%,rgba(2,7,12,.22)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02070c]/85 via-transparent to-black/35" />

      <div className="site-shell relative z-10 py-20 sm:py-24">
        <motion.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8 }} className="max-w-[720px]">
          <p className="eyebrow mb-6">Producción técnica de eventos</p>
          <h1 className="hero-title font-display leading-[1.05] text-white">
            CREAMOS EXPERIENCIAS <span className="text-[var(--accent-soft)]">INOLVIDABLES.</span>
          </h1>
          <p className="mt-7 max-w-[510px] text-base leading-7 text-white/65 sm:text-lg">
            Sonido, iluminación, video y estructuras para hacer realidad eventos de cualquier escala.
          </p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="#contact" className="group inline-flex h-14 items-center justify-center gap-3 rounded-sm bg-[var(--accent)] px-7 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-[#02070c]">
              Cotizar evento <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#services" className="group inline-flex min-h-11 items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white/75 transition-colors hover:text-white">
              Ver servicios <span className="h-px w-9 bg-white/40 transition-all group-hover:w-14 group-hover:bg-white" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
