"use client";
import {CardFlip, CardFlipBack, CardFlipFront} from "@/components/Card/FlipCard";
import settings from "@/constants/settings";
import { usePersonalContext } from "@/contexts/personalContext";
import { LucideMail, LucidePhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const ProfileCard = () => {
  const { currentPersonal } = usePersonalContext();
  return (
    <CardFlip value={currentPersonal} className="min-h-[700px] h-full">
      <CardFlipFront className="h-full flex flex-col ">
        <div className="w-full h-full object-cover relative rounded-xl overflow-hidden">
          <Image
            className="object-cover "
            fill
            src={settings.work.coverImage}
            alt="Profile Card"
          />
        </div>
        <div className="mt-2 flex h-full  flex-col">
          <h3 className="card-title flex-wrap">
            <span className="flex-grow"> {settings.work.title}</span>
            <div className="flex items-center justify-end flex-shrink gap-2 mr-auto">
              <Socials />
            </div>
          </h3>
          <div className="mt-2 text-base-content">
            <p>{settings.work.description}</p>
          </div>

          <div className=" mt-3 flex items-center gap-2">
            <Link
              href={"tel:+393791074732"}
              className=" bg-primary hover:brightness-90 rounded-lg py-4 px-6 flex items-center justify-center flex-grow text-white gap-2 "
            >
              <LucidePhoneCall size={18} />
              Chiama
            </Link>
            <Link
              href={"mailto:ing@andreaaddabbo.it"}
              className=" aspect-square hover:brightness-90 bg-white border border-gray-300 rounded-lg px-4 py-4 flex items-center justify-center  gap-2 "
            >
              <LucideMail size={22} />
            </Link>
          </div>
        </div>
      </CardFlipFront>
      <CardFlipBack className="h-full flex flex-col">
        <div className="w-full h-full object-cover relative rounded-xl overflow-hidden">
          <Image
            className="object-cover "
            fill
            src={settings.personal.coverImage}
            alt="Profile Card"
          />
        </div>
        <div className="mt-2 flex h-full  flex-col">
          <h3 className="card-title flex-wrap">
            <span className="flex-grow"> {settings.personal.title}</span>
          </h3>
          <div className="mt-2 text-base-content">
            <p>{settings.personal.description}</p>
          </div>

          <div className=" mt-3 flex items-center gap-2">
            <Link
              href={"tel:+393791074732"}
              className=" bg-primary hover:brightness-90 rounded-lg py-4 px-6 flex items-center justify-center flex-grow text-white gap-2 "
            >
              <LucidePhoneCall size={18} />
              Chiama
            </Link>
            <Link
              href={"mailto:ing@andreaaddabbo.it"}
              className=" aspect-square hover:brightness-90 bg-white border border-gray-300 rounded-lg px-4 py-4 flex items-center justify-center  gap-2 "
            >
              <LucideMail size={22} />
            </Link>
          </div>
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default ProfileCard;
