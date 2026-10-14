import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/servicios", "/proyectos", "/nosotros", "/equipos", "/tecnologia", "/contacto"];

  return routes.map((route, index) => ({
    url: `https://emmplay.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
