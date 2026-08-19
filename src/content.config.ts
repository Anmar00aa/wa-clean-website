import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const leistungen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leistungen" }),
  schema: z.object({
    title: z.string(),
    kurzbeschreibung: z.string(),
    metaDescription: z.string(),
    icon: z.string(),
    featured: z.boolean().default(false),
    reihenfolge: z.number().default(99),
    vorteile: z.array(z.string()),
    leistungsumfang: z.array(z.string()),
    zielgruppen: z.array(z.string()),
  }),
});

export const collections = { leistungen };
