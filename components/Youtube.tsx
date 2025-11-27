import { cn } from "@/lib/utils";
import React from "react";

const Youtube = ({ url, className }: { url?: string; className?: string }) => {
  return (
    <iframe
      src={url}
      title="YouTube video player"
      frameBorder={0}
      className={cn("rounded-xl flex-1 max-sm:min-h-[250px] ", className)}
      allowFullScreen
    />
  );
};

export default Youtube;
