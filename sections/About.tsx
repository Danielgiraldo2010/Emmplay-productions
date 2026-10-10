"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-20 sm:py-24 lg:py-28">
      <div className="site-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-24">
        <motion.div initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow mb-5">Sobre Emmplay</p>
          <h2 className="section-title">EXPERIENCIA QUE SE NOTA EN CADA MONTAJE.</h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65">Acompañamos cada proyecto desde la idea hasta el último minuto del evento, con equipos profesionales y personal técnico capacitado.</p>
          <Link href="#contact" className="group mt-8 inline-flex min-h-11 items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[var(--accent-soft)]">Hablemos de tu evento <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>

          <div className="mt-12 grid grid-cols-3 gap-5 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(1.3rem,2.5vw,2.5rem)] text-white">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase leading-5 tracking-[0.08em] text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.98 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="relative aspect-[3/2] overflow-hidden">
          <Image src="/images/emmplay/equipo.jpg" alt="Equipo de Emmplay durante el montaje de estructuras para eventos" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
