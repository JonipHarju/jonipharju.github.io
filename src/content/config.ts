import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    release_date: z.string().optional(),
    album: z.string().optional(),
    artist: z.string().optional(),
    producer: z.string().optional(),
    label: z.string().optional(),
    length: z.string().optional(),
    genres: z.array(z.string()).optional(),
    performers: z.array(z.string()).optional(),
    trackList: z
      .array(
        z.object({
          title: z.string(),
          length: z.string(),
        }),
      )
      .optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
