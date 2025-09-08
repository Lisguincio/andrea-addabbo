import { getSpotifyToken } from "./token";
import { SpotifyEpisode, SpotifyPaging } from "./types";

const showId = process.env.NEXT_PUBLIC_SPOTIFY_SHOW_ID!;

export async function getPodcastEpisodes(limit = 10, offset = 0): Promise<SpotifyPaging<SpotifyEpisode>> {
  const token = await getSpotifyToken();

  const res = await fetch(
    `https://api.spotify.com/v1/shows/${showId}/episodes?limit=${limit}&offset=${offset}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
	  next: {
		revalidate: 60 * 60 * 24, // 24 ore
	  } 
    }
  );

  if (!res.ok) {
    throw new Error("Errore nel recupero delle puntate");
  }

  return res.json();
}
