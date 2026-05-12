import type { MetadataRoute } from "next";

const routes = ["", "/services", "/maintenance-plans", "/industries", "/legacy-evaluation", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://sentinelpropertysystems.com${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : 0.8
  }));
}
