
import Image from "next/image";
import { Marquee } from "./Marquee/Marquee";
import companies from "@/constants/collaboration";

const WorkedWith =  () => {


  if (!companies || companies.length === 0) return null;

  return (
    <div className=" bg-base-200 rounded-2xl ">
      <Marquee className="[--duration:15s] [--gap:24px]" pauseOnHover>
        {companies.map((c, index) => {
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
  );
};

export default WorkedWith;
