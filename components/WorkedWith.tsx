"use client";
import { COMPANIES, MUSICCOMPANY } from "@/constants/collaboration";
import { usePersonalContext } from "@/contexts/personalContext";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { CardTitle } from "./Card/Card";
import { CardFlip, CardFlipBack, CardFlipFront } from "./Card/FlipCard";
import { Marquee } from "./Marquee/Marquee";

const WorkedWith = () => {
  const { currentPersonal } = usePersonalContext();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <CardFlip value={currentPersonal} className="flex min-h-[200px] flex-1">
      <CardFlipFront className="w-full justify-start">
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" flex w-full rounded-2xl ">
          <Marquee
            className="[--duration:15s] [--gap:24px] w-full"
            vertical={isMobile}
            pauseOnHover
          >
            {COMPANIES.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-25 max-md:w-full md:aspect-video relative object-contain"
                >
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              );
              return c.url ? (
                <a
                  title={c.name}
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              ) : (
                item
              );
            })}
          </Marquee>
        </div>
      </CardFlipFront>
      <CardFlipBack className=" w-full justify-start">
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" flex w-full rounded-2xl ">
          <Marquee
            className="[--duration:15s] [--gap:24px] w-full"
            vertical={isMobile}
            pauseOnHover
          >
            {MUSICCOMPANY.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-25 max-md:w-full md:aspect-video relative object-contain"
                >
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              );
              return c.url ? (
                <a
                  title={c.name}
                  key={c.id}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              ) : (
                item
              );
            })}
          </Marquee>
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default WorkedWith;
