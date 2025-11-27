"use client";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import { EXPERTAREA, PERSONALAREA } from "@/constants/expertarea";
import { usePersonalContext } from "@/contexts/personalContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpertArea = () => {
  const { currentPersonal } = usePersonalContext();
  const professionalArea = EXPERTAREA;
  const personalArea = PERSONALAREA;

  return (
    <CardFlip className="min-h-[320px] flex-1" value={currentPersonal}>
      <CardFlipFront className="w-full">
        <CardTitle>Di cosa mi occupo</CardTitle>

        <div className="grid h-full w-full gap-2 grid-cols-3 xl:grid-cols-3">
          {professionalArea.map((o, index) => (
            <Link
              href={o.url}
              target="_blank"
              key={index}
              className="flex flex-col text-center group"
            >
              <div className="transition-colors w-full h-20 bg-gray-200 group-hover:bg-gray-300 rounded-2xl p-2 flex justify-center items-center ">
                <Image src={o.icon} alt={o.title} width={32} height={32} />
              </div>
              <span className="text-xs mt-2 px-2 line-clamp-2">{o.title}</span>
            </Link>
          ))}
        </div>
      </CardFlipFront>
      <CardFlipBack className="w-full">
        <CardTitle>My Soul</CardTitle>
        <div className="grid h-full gap-2 grid-cols-3 xl:grid-cols-3">
          {personalArea.map((o, index) => (
            <Link
              href={o.url}
              target="_blank"
              key={index}
              className="flex flex-col text-center group"
            >
              <div className="transition-colors w-full h-20 bg-gray-200 group-hover:bg-gray-300 rounded-2xl p-2 flex justify-center items-center ">
                <Image src={o.icon} alt={o.title} width={32} height={32} />
              </div>
              <span className="text-xs mt-2 px-2 line-clamp-2">{o.title}</span>
            </Link>
          ))}
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default ExpertArea;
