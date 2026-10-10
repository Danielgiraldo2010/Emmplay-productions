"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <div className="mb-14 max-w-[680px]">
          <p className="eyebrow mb-5">Lo que hacemos</p>
          <h2 className="section-title">TODO LO QUE TU EVENTO NECESITA.</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/65">Un solo equipo para planear, montar y operar toda la experiencia técnica.</p>
        </div>

        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={false} className="relative min-h-[360px] sm:min-h-[420px] lg:min-h-[620px]">
            <Image src="/images/emmplay/pantallas.jpg" alt="Pantalla LED curva e iluminación durante una presentación musical" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-[center_55%]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          <div className="bg-[#061019] px-6 py-3 sm:px-9 lg:px-12 lg:py-8">
            {services.map((service, index) => (
              <motion.div key={service.id} initial={{ x: 8 }} whileInView={{ x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group grid grid-cols-[22px_minmax(0,1fr)_auto] items-center gap-2 border-b border-white/10 py-6 last:border-0 sm:grid-cols-[36px_minmax(0,1fr)_auto] sm:gap-3 sm:py-8">
                <span className="text-[10px] font-semibold tracking-widest text-[var(--accent-soft)]">{service.id}</span>
                <div>
                  <h3 className="font-display text-[clamp(1.05rem,2vw,1.75rem)] uppercase leading-tight text-white [overflow-wrap:anywhere]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{service.tag}</p>
                </div>
                <Link href={`https://wa.me/573116081380?text=${encodeURIComponent(`Hola Emmplay, quiero cotizar ${service.title.toLowerCase()} para un evento.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Cotizar ${service.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"><ArrowUpRight size={17} /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
