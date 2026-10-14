import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

interface PageCTAProps {
  eyebrow?: string;
  title?: string;
}

export default function PageCTA({
  eyebrow = "Convirtamos tu idea en un evento",
  title = "TU PRÓXIMA EXPERIENCIA EMPIEZA CON UNA CONVERSACIÓN.",
}: PageCTAProps) {
  return (
    <section className="border-t border-white/10 bg-[var(--surface)] py-16 sm:py-20">
      <div className="site-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">{eyebrow}</p>
          <h2 className="section-title">{title}</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contacto" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[var(--accent)] px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#02070c]">
            Solicitar cotización <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/20 px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-[var(--accent-soft)] hover:text-[var(--accent-soft)]">
            <MessageCircle size={17} /> WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
