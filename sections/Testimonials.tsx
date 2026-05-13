"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, stagger } from "@/lib/animations";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-48 px-6 sm:px-10 md:px-16 lg:px-24 bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[11px] font-medium tracking-[0.3em] uppercase text-[var(--accent)] mb-24 block"
        >
          Testimonios
        </motion.span>

        <div className="flex flex-col gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-24 py-16 border-b border-white/[0.06] first:border-t"
            >
              <motion.blockquote variants={fadeUp}>
                <p className="font-display text-[clamp(26px,3.2vw,46px)] leading-[1.1] text-white tracking-[0.01em]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </motion.blockquote>

              <motion.div variants={fadeUp} className="self-end">
                <p className="text-[14px] font-medium text-white mb-1">{t.author}</p>
                <p className="text-[11px] tracking-[0.18em] uppercase text-white/30">{t.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Visual break — imagen de producción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-24 overflow-hidden"
          style={{ aspectRatio: "21/8" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80&auto=format&fit=crop"
            alt="Live event atmosphere"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-display text-[clamp(32px,5vw,72px)] text-white/20 tracking-[0.08em] text-center">
              LIVE PRODUCTION · GLOBAL SCALE
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
