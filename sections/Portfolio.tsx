"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger, scaleIn } from "@/lib/animations";

const projects = [
  {
    id: 1,
    title: "Estéreo Picnic 2024",
    client: "Festival Estéreo Picnic",
    category: "Festival Production",
    year: "2024",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1800&q=85&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Gira Nacional",
    client: "Artista Internacional",
    category: "Touring",
    year: "2024",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lanzamiento Global",
    client: "Bancolombia",
    category: "Brand Experience",
    year: "2024",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=85&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Rock al Parque",
    client: "IDARTES",
    category: "Live Production",
    year: "2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=900&q=85&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const hero = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="portfolio" className="py-28 sm:py-36 lg:py-48 px-6 sm:px-8 md:px-16 bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 lg:mb-16"
        >
          <div>
            <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[var(--accent)] mb-6 sm:mb-8 block">
              Proyectos
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(48px,6.5vw,96px)] leading-[0.88] text-white tracking-[0.01em]">
              TRABAJO
              <br />
              <span className="text-white/20">SELECCIONADO.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[11px] font-medium tracking-[0.22em] uppercase text-white/20 sm:pb-2">
            2020 — 2024
          </motion.p>
        </motion.div>

        {/* Hero project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden cursor-pointer mb-3 sm:mb-4"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            className="object-cover object-center transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 border border-transparent group-hover:border-[var(--accent)]/20 transition-colors duration-700" />

          <div className="absolute top-5 right-5 sm:top-8 sm:right-8 w-9 h-9 sm:w-11 sm:h-11 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/50 transition-all duration-500">
            <ArrowUpRight size={13} className="text-white/50 group-hover:text-[var(--accent)] transition-colors duration-300" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-2 sm:mb-3 block opacity-80">
                {hero.category} · {hero.year}
              </span>
              <h3 className="font-display text-[clamp(24px,4vw,56px)] text-white tracking-[0.01em] leading-tight">
                {hero.title}
              </h3>
            </div>
            <p className="text-[12px] text-white/30 font-light hidden sm:block">{hero.client}</p>
          </div>
        </motion.div>

        {/* 3 secondary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {rest.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-[var(--accent)]/20 transition-colors duration-700" />

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/50 transition-all duration-500">
                <ArrowUpRight size={12} className="text-white/40 group-hover:text-[var(--accent)] transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] mb-1.5 block opacity-70">
                  {item.category} · {item.year}
                </span>
                <h3 className="font-display text-[clamp(18px,1.8vw,26px)] text-white tracking-[0.01em] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/25 mt-1 font-light">{item.client}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
