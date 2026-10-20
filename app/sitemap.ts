import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site";

const routes = ["", "/usluge", "/projekti", "/onama", "/kontakt"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => {
    const enUrl = `${siteUrl}${route}`;
    const srUrl = `${siteUrl}/sr${route}`;

    return {
      url: enUrl,
      lastModified,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: { en: enUrl, sr: srUrl },
      },
    };
  });
}
