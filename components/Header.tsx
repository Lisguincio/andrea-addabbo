import Link from "next/link";
import Logo from "./Logo/Logo";

export default function Header() {
  return (
    <header className="  w-full top-4  ">
      <div className="">
        <div style={{
          
        }} className="shadow-card mx-auto h-[72px] bg-white flex rounded-2xl items-center justify-center gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Logo />
          </Link>
        </div>
      </div>
    </header>
  );
}
