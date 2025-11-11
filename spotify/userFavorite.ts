import { Artist, Paging, Playlist, PlaylistTrack, Track } from "spotify-types";
import { getOEmbed } from "./oEmbed";
import { getSpotifyToken } from "./token";

const playlistId = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID!;

interface getPlaylistTracksProps {
  offset?: number;
  limit?: number;
}

type Props = getPlaylistTracksProps;

export async function getPlaylistTracks<T extends Paging<PlaylistTrack>>({
  offset = 0,
  limit = 10,
}: Props = {}): Promise<T> {
  const token = await getSpotifyToken();

  const res = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=IT&additional_types=track`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60 * 60 * 24, // 24 ore
      },
    }
  );

  const jsonBody = (await res.json()) as T;

  const filteredResult: T = {
    ...jsonBody,
    items: jsonBody.items
      .filter((item) => !!item?.track?.external_urls.spotify) //Filtro gli episodi vuoti
      .sort((a, b) => {
        const addDate = {
          a: Date.parse(a.added_at as string),
          b: Date.parse(b.added_at as string),
        };
        return addDate.b - addDate.a;
      }) //Ordine decrescente dalla data di uscita
      .slice(offset, offset + limit),
  };

  //console.log(`oEmbeds: ${oEmbeds.flatMap((o) => o.title)}`);

  if (!res.ok) {
    throw new Error("Errore nel recupero delle puntate");
  }

  return {
    ...filteredResult,
  };
}
