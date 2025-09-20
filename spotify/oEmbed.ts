import { SpotifyOEmbed } from "./types";

export async function getOEmbed(url: string): Promise<SpotifyOEmbed> {
  const res = await fetch(
    `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24 ore
      },
    }
  );

  if (!res.ok) {
    throw new Error("Errore nel recupero dell'oembed");
  }

  return res.json();
}
