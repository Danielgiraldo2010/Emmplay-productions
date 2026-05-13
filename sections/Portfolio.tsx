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
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1800&q=90&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Gira Nacional",
    client: "Artista Internacional",
    category: "Touring",
    year: "2024",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Rock al Parque",
    client: "IDARTES",
    category: "Live Production",
    year: "2023",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1000&q=90&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  const [hero, ...rest] = projects;

  return (
    <section id="portfolio" className="py-28 sm:py-36 lg:py-48 px-6 sm:px-10 md:px-16 lg:px-24 bg-[var(--bg)]">
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
            <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-6 sm:mb-8 block">
              Eventos
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(44px,6vw,88px)] leading-[0.9] text-white tracking-[0.01em]">
              EVENTOS
              <br />
              <span className="text-white/20">DESTACADOS.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.25em] uppercase text-white/18 sm:pb-1">
            2020 — 2024
          </motion.p>
        </motion.div>

        {/* Hero project — tall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden cursor-pointer mb-3 sm:mb-4 hover-glow"
          style={{ aspectRatio: "16/8" }}
        >
          <Image
            src={hero.image}
            alt={hero.title}
            fill
            priority
            className="object-cover object-center transition-transform duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />

          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 w-9 h-9 sm:w-10 sm:h-10 border border-white/12 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/40 transition-all duration-600">
            <ArrowUpRight size={13} className="text-white/40 group-hover:text-[var(--accent)] transition-colors duration-300" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-14 lg:px-16 pb-8 sm:pb-10 lg:pb-12 flex items-end justify-between">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[var(--accent)] mb-2 sm:mb-3 block opacity-75">
                {hero.category} · {hero.year}
              </span>
              <h3 className="font-display text-[clamp(26px,4vw,54px)] text-white tracking-[0.01em] leading-tight">
                {hero.title}
              </h3>
            </div>
            <p className="text-[12px] text-white/25 font-light hidden sm:block pb-1">{hero.client}</p>
          </div>
        </motion.div>

        {/* 2 secondary — equal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {rest.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              className="group relative overflow-hidden cursor-pointer hover-glow"
              style={{ aspectRatio: "16/10" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/40 transition-all duration-500">
                <ArrowUpRight size={12} className="text-white/35 group-hover:text-[var(--accent)] transition-colors duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-12 pb-6 sm:pb-8">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-1.5 block opacity-70">
                  {item.category} · {item.year}
                </span>
                <h3 className="font-display text-[clamp(20px,2.2vw,30px)] text-white tracking-[0.01em] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/22 mt-1.5 font-light">{item.client}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
