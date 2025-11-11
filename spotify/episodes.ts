import { Episode } from "spotify-types";
import { getSpotifyToken } from "./token";
import { SpotifyEpisode, SpotifyPaging } from "./types";

const showId = process.env.NEXT_PUBLIC_SPOTIFY_SHOW_ID!;

export async function getPodcastEpisodes(
  limit = 10,
  offset = 0
): Promise<SpotifyPaging<Episode>> {
  const token = await getSpotifyToken();

  const res = await fetch(
    `https://api.spotify.com/v1/shows/${showId}/episodes`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 ore
      },
    }
  );

  //console.log(await res.json());

  const jsonBody = (await res.json()) as SpotifyPaging<Episode>;

  const filteredResult = {
    ...jsonBody,
    items: jsonBody.items
      .filter((item) => !!item?.external_urls.spotify) //Filtro gli episodi vuoti
      .sort((a, b) => -a.release_date.localeCompare(b.release_date)) //Ordine decrescente dalla data di uscita
      .slice(offset, offset + limit),
  };

  if (!res.ok) {
    throw new Error("Errore nel recupero delle puntate");
  }

  return filteredResult;
}
