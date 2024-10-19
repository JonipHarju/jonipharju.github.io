import { defineCollection, z } from "astro:content";

// Define the schema for your 'posts' collection
const posts = defineCollection({
  schema: z.object({
    title: z.string(), // Post title
    description: z.string(), // Short description
    date: z.string(), // Date of publication
    album: z.string().optional(), // Album name
    artist: z.string().optional(), // Artist name
    producer: z.string().optional(), // Producer name
    label: z.string().optional(), // Record label
    length: z.string().optional(), // Album length
    genres: z.array(z.string()).optional(), // Genres as an array of strings
    performers: z.array(z.string()).optional(), // Performers as an array of strings
    trackList: z
      .array(
        z.object({
          title: z.string(), // Title of each track
          length: z.string(), // Length of each track
        })
      )
      .optional(), // Tracklist details
    image: z.string().optional(), // Image URL for the album cover
  }),
});

// Export the collectio ns
export const collections = {
  posts,
};
