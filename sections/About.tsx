"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { stats } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="bg-[var(--bg)] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <div className="grid gap-4 lg:grid-cols-2">
        <motion.article initial={{ y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex flex-col border border-white/10 bg-[var(--surface)] p-7 sm:p-10 lg:min-h-[520px] lg:p-12">
          <p className="eyebrow mb-5">Sobre Emmplay</p>
          <h2 className="section-title">EXPERIENCIA QUE SE NOTA EN CADA MONTAJE.</h2>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/65">Acompañamos cada proyecto desde la idea hasta el último minuto del evento, con equipos profesionales, planeación cercana y personal técnico capacitado.</p>
          <Link href="/nosotros" className="group mt-8 inline-flex min-h-11 items-center gap-3 text-xs font-bold uppercase tracking-[0.13em] text-white transition-colors hover:text-[var(--accent-soft)]">Conoce nuestro equipo <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>

          <div className="mt-auto grid grid-cols-3 gap-4 border-t border-white/10 pt-8 lg:mt-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-[clamp(1.3rem,2.5vw,2.5rem)] text-white">{stat.value}</p>
                <p className="mt-2 text-[11px] uppercase leading-5 tracking-[0.08em] text-white/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.div initial={{ scale: 0.99 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="relative min-h-[380px] overflow-hidden lg:min-h-[520px]">
          <Image src="/images/emmplay/equipo.jpg" alt="Equipo de Emmplay durante el montaje de estructuras para eventos" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
          <div className="absolute inset-x-6 bottom-6 border-t border-white/25 pt-5 sm:inset-x-9 sm:bottom-9">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent-soft)]">Un solo equipo</p>
            <p className="mt-2 max-w-md text-base leading-7 text-white/80">Planeación, montaje y operación técnica coordinados para que cada parte del evento funcione en conjunto.</p>
          </div>
        </motion.div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {["Conciertos y festivales", "Eventos corporativos", "Bodas y celebraciones", "Producciones especiales"].map((market) => (
            <div key={market} className="inline-flex items-center gap-3 rounded-full bg-white/[.055] px-5 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-soft)]" />{market}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
