"use client";
import React, { useEffect, useState } from "react";
import { SpotifyEpisode, SpotifyOEmbed } from "../spotify/types";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./Carousel/Carousel";
import { cn } from "@/lib/utils";
import { formatDuration } from "../spotify/utils";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { SiSpotify } from "@icons-pack/react-simple-icons";
import Link from "next/link";

interface StreammableEpisode extends SpotifyEpisode {
  oEmbed: SpotifyOEmbed;
}

interface Props {
  episodesEmbeds: StreammableEpisode[];
}

const SpotifyPlayer = ({ episodesEmbeds }: Props) => {
  const [loaded, setLoaded] = useState<StreammableEpisode | null>(
    episodesEmbeds.length > 0 ? episodesEmbeds[0] : null
  );
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    api?.on("select", () => api.scrollTo(api.selectedScrollSnap()));
  }, [loaded]);

  if (!loaded) return <p>Nessun episodio disponibile.</p>;
  return (
    <div className="flex flex-col gap-2">
      <div>
        <iframe
          src={`https://open.spotify.com/embed/episode/${loaded.id}`}
          width="100%"
          height="152"
          frameBorder={0}
          allow="encrypted-media; clipboard-write; autoplay; fullscreen; picture-in-picture"
        />
      </div>
      <Carousel setApi={setApi} opts={{ align: "start", skipSnaps: true }}>
        <CarouselContent className="-ml-2">
          {episodesEmbeds.map((e) => (
            <CarouselItem key={e.id} className="basis-5/12  md:basis-2/3 lg:basis-8/12 pl-2">
              <button onClick={() => setLoaded(e)} className="flex w-full">
                <SpotifyItem episode={e} selected={e.id == loaded.id} />
              </button>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-auto pl-2">
            <Link
			target="_blank"
			href={`https://open.spotify.com/show/${process.env.NEXT_PUBLIC_SPOTIFY_SHOW_ID!}`}
              className={
                "flex items-center h-full gap-2 p-1 px-3 bg-[#1DB954] rounded-2xl transition-all"
              }
            >
              <SiSpotify />
              <div className="flex max-w-24 items-center gap-2 ">
                <h3 className="text-center text-xs font-semibold line-clamp-2">
                  Scopri le altre puntate
                </h3>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const SpotifyItem = ({
  episode,
  selected,
}: {
  episode?: SpotifyEpisode;
  selected: boolean;
}) => {
  if (!episode) return null;

  return (
    <div
      className={cn(
        "flex flex-col w-full  h-full gap-2 p-1 px-2 bg-base-300 opacity-50 bg-primary rounded-2xl transition-all",
        {
          " opacity-100 shadow": selected,
        }
      )}
      title={episode.name}
    >
      <div className="flex items-center gap-2">
        <img
          src={episode.images[0].url}
          alt={episode.name}
          className="rounded-lg size-8 object-cover"
        />
        <div className="flex w-full items-start flex-col gap-1">
          <h3 className="text-start text-sm font-semibold text-primary-content line-clamp-1">
            {episode.name}
          </h3>
          <p className="text-xs flex justify-between w-full text-primary-content">
            <span>{formatDuration(episode.duration_ms)}</span>
            <span className="capitalize">
              {format(Date.parse(episode.release_date), "dd LLL", {
                locale: it,
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
