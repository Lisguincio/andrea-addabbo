"use client";
import Link from "next/link";
import Logo from "./Logo/Logo";
import Switch from "./Switch/Switch";
import { usePersonalContext } from "@/contexts/personalContext";
import {
  FireExtinguisherIcon,
  MoonIcon,
  SunIcon,
  GuitarIcon
} from "lucide-react";

export default function Header() {
  const { currentPersonal, toggleMode } = usePersonalContext();

  return (
    <header className=" w-full top-4  ">
      <div className="">
        <div className="shadow-card relative mx-auto h-[72px] bg-white flex rounded-2xl items-center justify-between md:justify-center gap-5 px-4">
          <Link className="flex items-center gap-2 pl-4" href="/">
            <Logo />
          </Link>
          <div className="absolute flex gap-4 items-center -translate-y-1/2 right-5 top-1/2">
            <FireExtinguisherIcon className={'rotate-[40deg]'} />
            <Switch initialChecked={currentPersonal} onChange={toggleMode} />
            <GuitarIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
