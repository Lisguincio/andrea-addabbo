"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  APIProvider,
  AdvancedMarker,
  Map as VisMap,
} from "@vis.gl/react-google-maps";
import POSITION from "../../../constants/position";
import { CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipFront,
  CardFlipBack,
} from "@/components/Card/FlipCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/Carousel/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { usePersonalContext } from "@/contexts/personalContext";

const guitarFiles = [
  "Burns Red Special (2006).png",
  "Fender Stratocaster Eric Clapton Signature (1991).png",
  "Guild Red Special (1994).png",
  "Ibanez RG 450 (1993).png",
  "Kramer Baretta Bumble Bee (2024).png",
  "PRS SE (2025).png",
  "Sterling Cutlass (2021).png",
  "Zero Sette semiacustica (1972).png",
];

const guitars = guitarFiles.map((file) => ({
  src: `/assets/guitars/${file}`,
  name: file.replace(".png", ""),
}));

const Map = () => {
  const { currentPersonal } = usePersonalContext();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const { lat, lng, defaultZoom } = POSITION;

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <CardFlip
      value={currentPersonal}
      className="h-full min-h-[320px] perspective-[2000px] [transform-style:preserve-3d] transition-all duration-700"
    >
      <CardFlipFront className="h-full w-full">
        <CardTitle className="mb-2">Dove mi trovi</CardTitle>

        <div className="flex flex-1 overflow-hidden relative rounded-2xl min-h-[1px]">
          <APIProvider apiKey={apiKey}>
            <VisMap
              className=""
              center={{ lat, lng }}
              defaultZoom={defaultZoom}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              mapId="DEMO_MAP_ID"
            >
              <AdvancedMarker position={{ lat, lng }} />
            </VisMap>
          </APIProvider>
        </div>
      </CardFlipFront>
      <CardFlipBack className="h-full w-full">
        <CardTitle className="mb-2">Le mie chitarre</CardTitle>
        <div className="flex-1 overflow-hidden relative rounded-2xl ">
          <Carousel
            opts={{ loop: true, align: "center" }}
            plugins={[Autoplay({ delay: 3000 })]}
            setApi={setApi}
            className="h-full [&>div]:h-full"
          >
            <CarouselContent className="h-full auto-rows-fr auto-cols-[33%]">
              {guitars.map((guitar, index) => (
                <CarouselItem key={guitar.name} className="h-full">
                  <div
                    className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${
                      index === selectedIndex
                        ? "scale-100 opacity-100 z-10"
                        : "scale-[0.7] opacity-40"
                    }`}
                  >
                    <Image
                      src={guitar.src}
                      alt={guitar.name}
                      fill
                      className="object-contain rotate-45"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <p className="text-center text-sm font-medium mt-2 truncate">
          {guitars[selectedIndex].name}
        </p>
      </CardFlipBack>
    </CardFlip>
  );
};

export default Map;
