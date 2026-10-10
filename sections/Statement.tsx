import { technologyBrands } from "@/data/site";

export default function Statement() {
  return (
    <section id="technology" aria-labelledby="technology-title" className="brand-strip border-y border-white/10 bg-[var(--bg)] py-6 sm:py-7">
      <div className="site-shell mb-4 flex items-center justify-between gap-4">
        <h2 id="technology-title" className="text-sm font-semibold text-white/80 sm:text-base">Tecnología en la que confiamos</h2>
      </div>
      <div className="brand-marquee overflow-hidden">
        <div className="brand-track">
          {[0, 1].map((group) => (
            <ul key={group} className="brand-group" aria-hidden={group === 1 ? true : undefined}>
              {[...technologyBrands, ...technologyBrands].map((brand, index) => (
                <li key={`${brand}-${index}`} aria-hidden={index >= technologyBrands.length ? true : undefined} className="font-display whitespace-nowrap text-2xl tracking-[-0.03em] text-white/75 sm:text-3xl">{brand}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
