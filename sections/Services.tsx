"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const featured = [
  {
    id: "01",
    title: "Live Event Production",
    description: "Diseño técnico y ejecución de eventos masivos: conciertos, festivales y experiencias corporativas con infraestructura de nivel internacional.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&q=85&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "02",
    title: "Touring & Logistics",
    description: "Gestión integral de giras nacionales e internacionales. Coordinación técnica y operación en múltiples ciudades.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=85&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "03",
    title: "Stage & Set Design",
    description: "Concepto, diseño y construcción de escenarios de alto impacto. LED walls, iluminación y arquitectura efímera de primer nivel.",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=800&q=85&auto=format&fit=crop",
    size: "small",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-48 px-8 md:px-16 bg-[var(--surface)]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
        >
          <div>
            <motion.span variants={fadeUp} className="text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--accent)] mb-8 block">
              Servicios
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(56px,6.5vw,96px)] leading-[0.88] text-white tracking-[0.01em]">
              LO QUE
              <br />
              <span className="text-white/20">HACEMOS.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[15px] text-white/35 font-light max-w-xs leading-relaxed lg:text-right lg:pb-2">
            Capacidad técnica completa para cualquier escala.
          </motion.p>
        </motion.div>

        {/* Asymmetric layout: 1 large + 2 stacked */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-4"
        >
          {/* Large card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={featured[0].image}
              alt={featured[0].title}
              fill
              className="object-cover object-center transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            <div className="absolute top-7 right-7 w-10 h-10 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/50 transition-all duration-500">
              <ArrowUpRight size={14} className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-4 block opacity-70">{featured[0].id}</span>
              <h3 className="font-display text-[clamp(32px,3vw,48px)] text-white tracking-[0.01em] leading-tight mb-4">
                {featured[0].title}
              </h3>
              <p className="text-[13px] text-white/35 leading-relaxed font-light max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {featured[0].description}
              </p>
            </div>
          </motion.div>

          {/* 2 stacked small cards */}
          <div className="flex flex-col gap-4">
            {featured.slice(1).map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative overflow-hidden cursor-pointer flex-1"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                <div className="absolute top-5 right-5 w-9 h-9 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/50 transition-all duration-500">
                  <ArrowUpRight size={13} className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-3 block opacity-70">{service.id}</span>
                  <h3 className="font-display text-[clamp(22px,2vw,30px)] text-white tracking-[0.01em] leading-tight">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* More services — minimal text list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-wrap gap-x-10 gap-y-3 mt-12 pt-10 border-t border-white/[0.05]"
        >
          {["Broadcast & Streaming", "Brand Experiences", "Content & Post"].map((s) => (
            <span key={s} className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/20">
              {s}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
