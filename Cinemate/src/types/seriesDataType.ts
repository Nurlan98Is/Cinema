import * as z from 'zod';

const SeriesDataZod = z.object({});

export interface SeriesData {
  title: {
    original: string;
    russian: string;
  };
  image: string;
  description: string;
  seasons: Seasons[];
  years: {
    start: string;
  };
  genre: string[];
  imdbRating: number;
}

export interface Seasons {
  seasonNumber: number;
  numberOfEpisodes: number;
  episodes: Episodes[];
  _id: string;
}

export interface Episodes {
  episode: {
    title: {
      original: string;
      russian: string;
    };
    durationMinutes: number;
    description: string;
  };
  index?: number;
}
