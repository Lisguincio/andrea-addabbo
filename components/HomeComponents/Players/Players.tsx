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
import { AudioLinesIcon } from "lucide-react";
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
      <CardFlipBack className="w-full flex relative">
        <AudioLinesIcon
          className="absolute top-6 right-8 z-0 rotate-[20deg] opacity-5"
          size={70}
          color="#000000"
        />
        <CardTitle className="">Ascoltami su Spotify - iRadioAut</CardTitle>
        <p className="mb-6">
          iRadioAut è un collettivo che vive la musica come un luogo di
          incontro: voci diverse, sensibilità che si intrecciano e un modo di
          raccontare emozioni quotidiane con sincerità.
        </p>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px", marginBottom: 0 }}
          src="https://open.spotify.com/embed/artist/2rYVUt4lWJJMxEFss6lxG2?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </CardFlipBack>
    </CardFlip>
  );
};

export default Players;
