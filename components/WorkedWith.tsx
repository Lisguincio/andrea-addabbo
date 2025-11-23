"use client";
import Image from "next/image";
import { Marquee } from "./Marquee/Marquee";
import { COMPANIES, MUSICCOMPANY } from "@/constants/collaboration";
import { Card, CardBody, CardTitle } from "./Card/Card";
import { CardFlip, CardFlipBack, CardFlipFront } from "./Card/FlipCard";
import { usePersonalContext } from "@/contexts/personalContext";

const WorkedWith = () => {
  const { currentPersonal } = usePersonalContext();
  return (
    <CardFlip value={currentPersonal} className="flex min-h-[200px] flex-1">
      <CardFlipFront>
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" bg-base-200 rounded-2xl ">
          <Marquee className="[--duration:15s] [--gap:24px]" pauseOnHover>
            {COMPANIES.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-25 aspect-video relative object-contain"
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
      <CardFlipBack>
        <CardTitle>Con chi collaboro</CardTitle>
        <div className=" bg-base-200 rounded-2xl ">
          <Marquee className="[--duration:15s] [--gap:24px]" pauseOnHover>
            {MUSICCOMPANY.map((c, index) => {
              const item = (
                <div
                  key={c.id}
                  className="h-25 aspect-video relative object-contain"
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
