import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

export const collections = { docs, blog };
