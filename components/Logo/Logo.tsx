import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center relative gap-2 h-12 w-64">
      <Image src={"/assets/logos/Logo_AA.svg"} fill alt="Andrea Addabbo Logo" />
    </div>
  );
};

export default Logo;
