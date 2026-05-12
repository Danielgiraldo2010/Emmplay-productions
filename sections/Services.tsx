"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

const services = [
  {
    id: "01",
    title: "Live Event\nProduction",
    description: "Diseño técnico y ejecución de eventos masivos: conciertos, festivales y experiencias corporativas con infraestructura de nivel internacional.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=90&auto=format&fit=crop",
    tag: "Producción en vivo",
  },
  {
    id: "02",
    title: "Touring &\nLogistics",
    description: "Gestión integral de giras nacionales e internacionales. Coordinación técnica, riders y operación en múltiples ciudades simultáneas.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=90&auto=format&fit=crop",
    tag: "Touring",
  },
  {
    id: "03",
    title: "Stage &\nSet Design",
    description: "Concepto, diseño y construcción de escenarios de alto impacto. LED walls, sistemas de iluminación y arquitectura efímera de primer nivel.",
    image: "https://images.unsplash.com/photo-1598387993441-a364f854cfbd?w=1400&q=90&auto=format&fit=crop",
    tag: "Diseño escénico",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--surface)]">

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <motion.span variants={fadeUp} className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-[var(--accent)] mb-6 sm:mb-8 block">
              Servicios
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-[clamp(44px,6vw,88px)] leading-[0.9] text-white tracking-[0.01em]">
              LO QUE
              <br />
              <span className="text-white/20">HACEMOS.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/30 font-light max-w-[240px] leading-relaxed sm:text-right sm:pb-1">
            Capacidad técnica completa para cualquier escala.
          </motion.p>
        </motion.div>
      </div>

      {/* Banners — fullwidth stacked */}
      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ minHeight: "clamp(280px, 40vw, 560px)" }}
          >
            {/* Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes="100vw"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-700" />
            <div className={`absolute inset-0 bg-gradient-to-r ${i % 2 === 0 ? "from-black/80 via-black/20 to-transparent" : "from-transparent via-black/20 to-black/80"}`} />

            {/* Cyan glow on hover — very subtle */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,174,239,0.06), transparent 70%)" }}
            />

            {/* Content */}
            <div className={`absolute inset-0 flex items-end p-8 sm:p-12 lg:p-16 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-lg ${i % 2 !== 0 ? "text-right" : ""}`}>
                <div className={`flex items-center gap-4 mb-5 sm:mb-7 ${i % 2 !== 0 ? "justify-end" : ""}`}>
                  <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[var(--accent)] opacity-70">
                    {service.id}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/25">
                    {service.tag}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(32px,4.5vw,68px)] text-white tracking-[0.01em] leading-[0.92] mb-5 sm:mb-7 whitespace-pre-line">
                  {service.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-white/35 leading-relaxed font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-600">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Arrow — top corner */}
            <div className={`absolute top-6 sm:top-8 ${i % 2 !== 0 ? "left-6 sm:left-8" : "right-6 sm:right-8"} w-9 h-9 sm:w-10 sm:h-10 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/40 transition-all duration-500`}>
              <ArrowUpRight size={13} className="text-white/40 group-hover:text-[var(--accent)] transition-colors duration-300" />
            </div>

            {/* Bottom cyan line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-40" />
          </motion.div>
        ))}
      </div>

      {/* Additional services — minimal */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="flex flex-wrap gap-x-8 sm:gap-x-12 gap-y-3"
        >
          {["Broadcast & Streaming", "Brand Experiences", "Content & Post"].map((s) => (
            <span key={s} className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/18">
              {s}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
