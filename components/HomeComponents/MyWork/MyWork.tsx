"use client";
import { CardTitle } from '@/components/Card/Card';
import { CardFlip, CardFlipFront, CardFlipBack } from '@/components/Card/FlipCard';
import MayLogo from '@/components/MayLogo';
import { usePersonalContext } from '@/contexts/personalContext';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/Carousel/Carousel';

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

const MyWork = () => {
  const { currentPersonal } = usePersonalContext();
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <CardFlip value={currentPersonal} className="flex flex-1 flex-col min-h-[320px]">
      <CardFlipFront className="w-full h-full">
        <CardTitle>La mia azienda</CardTitle>
        <div className="flex-1">
          <MayLogo />
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
                    className={`relative w-full h-full flex items-center justify-center transition-all duration-500 ${index === selectedIndex
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
}

export default MyWork