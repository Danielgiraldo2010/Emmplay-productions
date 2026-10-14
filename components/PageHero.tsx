import Image from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[620px] items-end overflow-hidden pb-20 pt-40 sm:min-h-[700px] sm:pb-24 lg:min-h-[min(82svh,820px)]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" style={{ objectPosition: imagePosition }} className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,12,.97)_0%,rgba(2,7,12,.82)_45%,rgba(2,7,12,.24)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#02070c] via-transparent to-black/35" />

      <div className="site-shell relative z-10">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,6.8rem)] uppercase leading-[.94] text-white">
            {title} <span className="block text-[var(--accent-soft)]">{highlight}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
