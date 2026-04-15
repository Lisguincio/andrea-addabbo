"use client";
import { CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import { EXPERTAREA } from "@/constants/expertarea";
import { usePersonalContext } from "@/contexts/personalContext";
import Image from "next/image";
import Link from "next/link";

const ExpertArea = () => {
  const { currentPersonal } = usePersonalContext();
  const professionalArea = EXPERTAREA;

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
                <Image
                  src={o.icon}
                  alt={o.title}
                  width={40}
                  height={40}
                  sizes="40px"
                />
              </div>
              <span className="text-xs mt-2 px-2 line-clamp-2">{o.title}</span>
            </Link>
          ))}
        </div>
      </CardFlipFront>
      <CardFlipBack className="w-full flex flex-col">
        <CardTitle>I miei Progetti</CardTitle>
        <div className="flex-1 w-full relative mt-4 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-inner">
          {/* iRadioAut - Top Left Split */}
          <Link
            href="https://www.instagram.com/iradioaut/"
            target="_blank"
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/80 to-indigo-100/80 hover:from-blue-100 hover:to-indigo-200 p-6 flex flex-col items-start justify-start group transition-all duration-500 z-10 hover:z-20 [clip-path:polygon(0_0,100%_0,100%_53%,0_39%)] hover:[clip-path:polygon(0_0,100%_0,100%_58%,0_44%)] drop-shadow-none hover:drop-shadow-xl"
          >
            <div className="flex items-center space-x-4 transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] rounded-xl flex-shrink-0 shadow-sm">
                <div className="w-full relative h-full overflow-hidden bg-white rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/assets/myProject/iRadioAut.jpg"
                    alt="iRadioAut"
                    fill
                    sizes="26px"
                    className="object-cover  group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-black transition-colors">
                  iRadioAut
                </h4>
                <p className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  <span>Instagram</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* The Austen - Bottom Right Split */}
          <Link
            href="https://www.instagram.com/the.austen/"
            target="_blank"
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-slate-100/80 to-gray-200/80 hover:from-slate-200 hover:to-gray-300 p-6 flex flex-col items-end justify-end group transition-all duration-500 z-10 hover:z-20 [clip-path:polygon(0_41%,100%_55%,100%_100%,0_100%)] hover:[clip-path:polygon(0_36%,100%_50%,100%_100%,0_100%)] drop-shadow-none hover:drop-shadow-xl"
          >
            <div className="flex items-center space-x-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2">
              <div className="flex flex-col items-end">
                <h4 className="font-bold text-gray-900 text-lg group-hover:text-black transition-colors">
                  The Austen
                </h4>
                <p className="text-xs text-gray-600 font-medium flex items-center gap-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  >
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                  <span>Instagram</span>
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px] rounded-xl flex-shrink-0 shadow-sm">
                <div className="w-full relative h-full overflow-hidden bg-white rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/assets/myProject/The_Austen.jpg"
                    alt="The Austen"
                    fill
                    sizes="26px"
                    className="object-cover overflow-hidden group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default ExpertArea;
