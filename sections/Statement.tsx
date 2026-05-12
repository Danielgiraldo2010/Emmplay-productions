"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { clients, testimonials } from "@/data/site";

export default function Statement() {
  const quote = testimonials[1];
  const doubled = [...clients, ...clients];

  return (
    <>
      {/* Fullscreen quote */}
      <section className="relative min-h-[65vh] sm:min-h-screen flex flex-col justify-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90&auto=format&fit=crop"
          alt="Live event"
          fill
          className="object-cover object-center brightness-[0.55]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />

        {/* Subtle cyan top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[40vh] opacity-[0.08] pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 100% at 50% 0%, #00aeef, transparent 65%)" }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 sm:px-10 md:px-16 pb-14 sm:pb-24 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-[clamp(24px,4.2vw,62px)] leading-[1.08] text-white tracking-[0.01em] max-w-4xl mb-8 sm:mb-12">
              &ldquo;{quote.quote}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-6 h-px bg-[var(--accent)] opacity-50" />
              <div>
                <p className="text-[13px] sm:text-[14px] font-medium text-white/60">{quote.author}</p>
                <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[var(--accent)] mt-0.5 opacity-60">{quote.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clients marquee */}
      <div className="py-14 sm:py-20 bg-[var(--bg)] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 mb-8 sm:mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-[10px] sm:text-[11px] font-medium tracking-[0.38em] uppercase text-white/18 text-center"
          >
            Marcas que confían en nosotros
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[var(--bg)] to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex items-center whitespace-nowrap"
          >
            {doubled.map((client, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="font-display text-[clamp(20px,3vw,40px)] tracking-[0.05em] text-white/[0.08] hover:text-white/25 transition-colors duration-600 px-6 sm:px-10">
                  {client}
                </span>
                <span className="text-[var(--accent)] opacity-15 text-xs">·</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
