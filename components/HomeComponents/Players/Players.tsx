"use client";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import SpotifyPlayer, { SpotifyPlayerProps } from "@/components/SpotifyPlayer";
import Youtube from "@/components/Youtube";
import { usePersonalContext } from "@/contexts/personalContext";
import { Episode, Track } from "spotify-types";

const Players = ({ items }: { items: (Episode | Track)[] }) => {
  const userId = process.env.NEXT_PUBLIC_YOUTUBE_USER_ID!;
  const { currentPersonal } = usePersonalContext();
  return (
    <CardFlip
      value={currentPersonal}
      direction="down"
      className="max-md:min-h-[570px]"
    >
      <CardFlipFront className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="h-full flex flex-col ">
          <CardTitle>Ultimo Video - Youtube</CardTitle>
          <Youtube
            url={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${userId}`}
          />
        </div>
        <div className="h-full flex flex-col ">
          <CardTitle className="mb-2">Ombre sul lavoro - Spotify</CardTitle>
          <SpotifyPlayer
            items={items.map((e) => e)}
            extraText="Scopri le altre puntate"
            extraLink={`https://open.spotify.com/show/${process.env
              .NEXT_PUBLIC_SPOTIFY_SHOW_ID!}`}
          />
        </div>
      </CardFlipFront>
      <CardFlipBack className="w-full flex">
        <CardTitle>Ascoltami su Spotify - iRadioAut</CardTitle>

        <iframe
          data-testid="embed-iframe"
          className="rounded-xl h-full"
          src="https://open.spotify.com/embed/artist/2rYVUt4lWJJMxEFss6lxG2?utm_source=generator"
          width="100%"
          height="800"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </CardFlipBack>
    </CardFlip>
  );
};

export default Players;
