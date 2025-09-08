// Tipi generali
export interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyPaging<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

// Episodio
export interface SpotifyEpisode {
  id: string;
  name: string;
  description: string;
  release_date: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  images: SpotifyImage[];
  audio_preview_url: string | null;
  show: {
    id: string;
    name: string;
    publisher: string;
  };
}

// Podcast (Show)
export interface SpotifyShow {
  id: string;
  name: string;
  description: string;
  publisher: string;
  total_episodes: number;
  images: SpotifyImage[];
  external_urls: {
    spotify: string;
  };
  episodes?: SpotifyPaging<SpotifyEpisode>;
}

export interface SpotifyOEmbed {
  version: "1.0";
  type: "rich";
  provider_name: "Spotify";
  provider_url: "https://www.spotify.com";
  width: number;
  height: number;
  title: string;
  html: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}