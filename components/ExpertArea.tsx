import EXPERTAREA from "@/constants/expertarea";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpertArea = () => {
  const fields = EXPERTAREA;

  return (
    <div className="grid h-full gap-2 grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
      {fields.map((o, index) => (
        <Link
          href={o.url}
          target="_blank"
          key={index}
          className="flex flex-col text-center group"
        >
          <div className="transition-colors w-full h-20 bg-gray-200 group-hover:bg-gray-300 rounded-2xl p-2 flex justify-center items-center ">
            <Image src={o.icon} alt={o.title} width={32} height={32} />
          </div>
          <span className="text-xs mt-2 px-2">{o.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default ExpertArea;
