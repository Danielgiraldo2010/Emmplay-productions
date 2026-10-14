"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { equipmentCategories } from "@/data/equipment";

export default function Services() {
  return (
    <section id="services" className="bg-[var(--surface)] py-20 sm:py-24 lg:py-28">
      <div className="site-shell">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div className="max-w-[760px]">
          <p className="eyebrow mb-5">Lo que hacemos</p>
          <h2 className="section-title">TODO LO QUE TU EVENTO NECESITA.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/65 lg:justify-self-end">Un solo equipo para planear, montar y operar toda la experiencia técnica, desde el concepto inicial hasta el último minuto del evento.</p>
        </div>

        <div className="overflow-hidden bg-[#061019]">
          <motion.div initial={false} className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[560px]">
            <Image src="/images/emmplay/pantallas.jpg" alt="Pantalla LED curva e iluminación durante una presentación musical" fill sizes="(max-width: 1024px) 100vw, 52vw" className="object-cover object-[center_55%]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,7,12,.05),rgba(2,7,12,.20)_55%,rgba(2,7,12,.90))]" />
            <div className="absolute bottom-7 left-6 max-w-md sm:bottom-9 sm:left-9">
              <p className="eyebrow mb-3">Tecnología + equipo humano</p>
              <p className="font-display text-2xl leading-tight text-white sm:text-4xl">SOLUCIONES TÉCNICAS QUE TRABAJAN COMO UNA SOLA.</p>
            </div>
          </motion.div>

          <div className="grid gap-1 bg-[var(--surface)] md:grid-cols-2 xl:grid-cols-6">
            {equipmentCategories.map((category, index) => (
              <motion.div key={category.slug} initial={{ y: 8 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                <Link href={`/equipos#${category.slug}`} className="group flex min-h-44 flex-col bg-[var(--bg)] p-6 transition-colors hover:bg-[#091722] xl:min-h-52" aria-label={`Ver equipos de ${category.title}`}>
                  <div className="flex items-start justify-end">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 transition-colors group-hover:border-[var(--accent)] group-hover:text-[var(--accent-soft)]"><ArrowUpRight size={16} /></span>
                  </div>
                  <div className="mt-auto pt-8">
                    <h3 className="font-display text-lg uppercase leading-tight text-white [overflow-wrap:anywhere] xl:text-xl">{category.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">{category.shortDescription}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
