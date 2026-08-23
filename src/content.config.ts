import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const leistungenSchema = z.object({
  title: z.string(),
  kurzbeschreibung: z.string(),
  metaDescription: z.string(),
  icon: z.string(),
  featured: z.boolean().default(false),
  reihenfolge: z.number().default(99),
  vorteile: z.array(z.string()),
  leistungsumfang: z.array(z.string()),
  zielgruppen: z.array(z.string()),
});

const leistungen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leistungen" }),
  schema: leistungenSchema,
});

// Englische Übersetzung derselben Leistungen (siehe src/content/leistungen-en/),
// gleiche Slugs/Dateinamen wie das deutsche Pendant, damit Layout.astro die
// DE/EN-hreflang-Zuordnung automatisch anhand des Slugs herleiten kann.
const leistungenEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/leistungen-en" }),
  schema: leistungenSchema,
});

export const collections = { leistungen, leistungenEn };
