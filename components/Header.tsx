"use client";
import Link from "next/link";
import Logo from "./Logo/Logo";
import Switch from "./Switch/Switch";
import { usePersonalContext } from "@/contexts/personalContext";
import {
  FireExtinguisherIcon,
  GuitarIcon,
  Icon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export default function Header() {
  const { currentPersonal, toggleMode } = usePersonalContext();

  return (
    <header className=" w-full top-4  ">
      <div className="">
        <div className="shadow-card relative mx-auto h-[72px] bg-white flex rounded-2xl items-center justify-center gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Logo />
          </Link>
          <div className="absolute flex gap-4 items-center -translate-y-1/2 right-5 top-1/2">
            <SunIcon />
            <Switch initialChecked={currentPersonal} onChange={toggleMode} />
            <MoonIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
