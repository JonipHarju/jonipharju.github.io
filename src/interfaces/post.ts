import type { Track } from "./track";

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  album: string;
  artist: string;
  producer: string;
  label: string;
  length: string;
  genres: string[];
  performers: string[];
  trackList: Track[];
  image: string;
}
