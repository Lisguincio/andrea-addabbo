"use client";
import { COMPANIES, MUSICCOMPANY } from "@/constants/collaboration";
import { usePersonalContext } from "@/contexts/personalContext";
import Image from "next/image";
import { CardTitle } from "./Card/Card";
import { CardFlip, CardFlipBack, CardFlipFront } from "./Card/FlipCard";
import { Marquee } from "./Marquee/Marquee";
import { PERSONALAREA } from "@/constants/expertarea";
import Link from "next/link";

const WorkedWith = () => {
  const { currentPersonal } = usePersonalContext();

  return (
    <CardFlip value={currentPersonal} className="flex min-h-[200px] flex-1">
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
                  title={c.name}
                  className="h-16 w-32 md:h-20 md:w-auto md:aspect-video relative object-contain"
                >
                  <Image
                    src={c.logo}
                    alt={`${c.name} logo`}
                    fill
                    sizes="(max-width: 768px) 128px, 150px"
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
        <CardTitle>My Soul</CardTitle>
        <div className="grid h-full gap-2 grid-cols-4 xl:grid-cols-4">
          {PERSONALAREA.map((o, index) => (
            <div key={index} className="flex flex-col text-center group">
              <div className=" w-full h-20 bg-gray-200 rounded-2xl p-2 flex justify-center items-center ">
                <Image
                  src={o.icon}
                  alt={o.title}
                  width={40}
                  height={40}
                  sizes="40px"
                />
              </div>
              <span className="text-xs text-center mt-2 px-2 line-clamp-2">
                {o.title}
              </span>
            </div>
          ))}
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default WorkedWith;
