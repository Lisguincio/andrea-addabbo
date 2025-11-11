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
import { Episode, Track } from "spotify-types";

type Item = Episode | Track | null;

export interface SpotifyPlayerProps<T extends Item> {
  items: T[];
  extraText: string;
  extraLink: string;
  carouselOrientation?: "horizontal" | "vertical";
  active?: boolean;
}

const SpotifyPlayer = <T extends Item>({
  active = true,
  items,
  carouselOrientation = "horizontal",
  extraText,
  extraLink,
}: SpotifyPlayerProps<T>) => {
  const [loaded, setLoaded] = useState<T | null>(
    items.length > 0 ? items[0] : null
  );
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    api?.on("select", () => api.scrollTo(api.selectedScrollSnap()));
  }, [loaded]);

  if (!loaded) return <p>Nessun episodio disponibile.</p>;

  const url =
    loaded.type == "track"
      ? `https://open.spotify.com/embed/track/${loaded.id}`
      : `https://open.spotify.com/embed/episode/${loaded.id}`;

  return (
    <div className="flex flex-col flex-1 ">
      <iframe
        src={url}
        width={"100%"}
        height="170"
        style={{ zIndex: active ? 0 : -100 }}
        allowTransparency
        allow="encrypted-media; clipboard-write; autoplay; fullscreen; picture-in-picture"
      />

      <Carousel
        className="-mt-2"
        setApi={setApi}
        orientation={carouselOrientation}
        opts={{ align: "start", skipSnaps: true }}
      >
        <CarouselContent className=" -ml-2">
          {items.map((e) => (
            <CarouselItem
              key={e?.id}
              className="basis-5/12  md:basis-2/3 lg:basis-8/12 pl-2"
            >
              <button onClick={() => setLoaded(e)} className="flex w-full">
                {e?.type === "episode" ? (
                  <SpotifyEpisodeItem item={e} selected={e?.id == loaded.id} />
                ) : e?.type === "track" ? (
                  <SpotifyTrackItem
                    item={e as Track}
                    selected={e?.id == loaded.id}
                  />
                ) : null}
              </button>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-auto pl-2">
            <Link
              target="_blank"
              href={extraLink}
              className={
                "flex items-center h-full gap-2 p-1 px-3 bg-[#1DB954] rounded-2xl transition-all"
              }
            >
              <SiSpotify />
              <div className="flex max-w-24 items-center gap-2 ">
                <h3 className="text-center text-xs font-semibold line-clamp-2">
                  {extraText}
                </h3>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const SpotifyEpisodeItem = <T extends Item>({
  item,
  selected,
}: {
  item?: T;
  selected: boolean;
}) => {
  if (!item) return null;

  return (
    <div
      className={cn(
        "flex flex-col w-full  h-full gap-2 p-2  px-2 bg-base-300 opacity-50 bg-primary rounded-2xl transition-all",
        {
          " opacity-100 shadow": selected,
        }
      )}
      title={item.name}
    >
      <div className="flex items-center gap-2">
        {item.type == "episode" && (
          <img
            src={(item as Episode).images[0].url}
            alt={item.name}
            className="rounded-lg size-8 object-cover"
          />
        )}
        <div className="flex w-full items-start flex-col gap-1">
          <h3 className="text-start text-sm mb-1 font-semibold text-primary-content line-clamp-1">
            {item.name}
          </h3>
          <p className="text-xs flex justify-between w-full text-primary-content">
            <span>{formatDuration(item.duration_ms)}</span>
            {item.type == "episode" && (
              <span className="capitalize">
                {format(Date.parse((item as Episode).release_date!), "dd LLL", {
                  locale: it,
                })}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const SpotifyTrackItem = <T extends Track>({
  item,
  selected,
}: {
  item?: T;
  selected: boolean;
}) => {
  if (!item) return null;

  return (
    <div
      className={cn(
        "flex flex-col w-full  h-full gap-2 p-2  px-2 bg-base-300 opacity-50 bg-primary rounded-2xl transition-all",
        {
          " opacity-100 shadow": selected,
        }
      )}
      title={item.name}
    >
      <div className="flex flex-col items-start gap-2">
        {
          <img
            src={item.album.images[0].url}
            alt={item.name}
            className="rounded-lg w-full h-18 object-cover"
          />
        }
        <div className="flex w-full items-start flex-col gap-1">
          <h3 className="text-start text-sm mb-1 font-semibold text-primary-content line-clamp-1">
            {item.name}
          </h3>
          <p className="text-xs flex justify-between w-full text-primary-content">
            <span>{formatDuration(item.duration_ms)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyPlayer;
