"use client";
import { COMPANIES, MUSICCOMPANY } from "@/constants/collaboration";
import { usePersonalContext } from "@/contexts/personalContext";
import Image from "next/image";
import { CardTitle } from "./Card/Card";
import { CardFlip, CardFlipBack, CardFlipFront } from "./Card/FlipCard";
import { Marquee } from "./Marquee/Marquee";

const WorkedWith = () => {
  const { currentPersonal } = usePersonalContext();

  return (
    <CardFlip value={currentPersonal} className="flex min-h-[160px] flex-1">
      <CardFlipFront className="w-full justify-start pb-2">
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" flex w-full rounded-2xl ">
          <Marquee
            className="[--duration:15s] [--gap:24px] w-full"
            vertical={false}
            pauseOnHover
          >
            {COMPANIES.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-16 w-32 md:h-20 md:w-auto md:aspect-video relative object-contain"
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
      <CardFlipBack className=" w-full justify-start pb-2">
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" flex w-full rounded-2xl ">
          <Marquee
            className="[--duration:15s] [--gap:24px] w-full"
            vertical={false}
            pauseOnHover
          >
            {MUSICCOMPANY.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-16 w-32 md:h-20 md:w-auto md:aspect-video relative object-contain"
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
