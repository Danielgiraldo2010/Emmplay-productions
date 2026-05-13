"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-[var(--surface)]">

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 md:px-20 pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-20">
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
              TECNOLOGÍA
              <br />
              <span className="text-white/20">ESCÉNICA.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-[13px] sm:text-[14px] text-white/30 font-light max-w-[220px] leading-relaxed sm:text-right sm:pb-1">
            Equipos de última generación para cualquier escala de evento.
          </motion.p>
        </motion.div>
      </div>

      {/* Banners fullwidth apilados */}
      <div className="flex flex-col">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.3, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ minHeight: "clamp(260px, 38vw, 520px)" }}
          >
            <Image
              src={service.image}
              alt={service.title.replace("\n", " ")}
              fill
              className="object-cover object-center transition-transform duration-[1.8s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes="100vw"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-black/62 group-hover:bg-black/48 transition-colors duration-700" />
            <div
              className={`absolute inset-0 ${
                i % 2 === 0
                  ? "bg-gradient-to-r from-black/75 via-black/15 to-transparent"
                  : "bg-gradient-to-l from-black/75 via-black/15 to-transparent"
              }`}
            />

            {/* Cyan glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 70% at 50% 110%, rgba(0,174,239,0.07), transparent 65%)" }}
            />

            {/* Content */}
            <div
              className={`absolute inset-0 flex items-end p-8 sm:p-14 lg:p-20 ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`max-w-md ${i % 2 !== 0 ? "text-right" : ""}`}>
                <div className={`flex items-center gap-3 mb-4 sm:mb-6 ${i % 2 !== 0 ? "justify-end" : ""}`}>
                  <span className="text-[10px] font-medium tracking-[0.32em] uppercase text-[var(--accent)] opacity-65">
                    {service.id}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-white/22">
                    {service.tag}
                  </span>
                </div>

                <h3 className="font-display text-[clamp(30px,4.2vw,64px)] text-white tracking-[0.01em] leading-[0.92] mb-4 sm:mb-6 whitespace-pre-line">
                  {service.title}
                </h3>

                {/* Description — visible always on mobile, hover on desktop */}
                <p className="text-[12px] sm:text-[13px] text-white/35 leading-relaxed font-light max-w-xs sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Arrow */}
            <div
              className={`absolute top-6 sm:top-8 ${
                i % 2 !== 0 ? "left-6 sm:left-8" : "right-6 sm:right-8"
              } w-9 h-9 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[var(--accent)]/40 transition-all duration-500`}
            >
              <ArrowUpRight size={13} className="text-white/35 group-hover:text-[var(--accent)] transition-colors duration-300" />
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-35" />
          </motion.div>
        ))}
      </div>

      {/* Bottom padding */}
      <div className="h-10 sm:h-14" />

    </section>
  );
}
