"use client";
import { CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import Youtube from "@/components/Youtube";
import { usePersonalContext } from "@/contexts/personalContext";
import { AudioLinesIcon } from "lucide-react";

const Players = () => {
  const userId = process.env.NEXT_PUBLIC_YOUTUBE_USER_ID!;
  const { currentPersonal } = usePersonalContext();
  return (
    <CardFlip
      value={currentPersonal}
      direction="down"
      className="max-md:min-h-[570px]"
    >
      <CardFlipFront className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="h-full flex flex-col ">
          <CardTitle>Ultimo Video - Youtube</CardTitle>
          <Youtube
            url={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${userId}`}
          />
        </div>
        <div className="h-full flex flex-col ">
          <CardTitle className="mb-2">Ombre sul lavoro - Spotify</CardTitle>
          <div className="flex-1 w-full min-h-0">
            <iframe
              style={{ borderRadius: "12px", marginBottom: 0 }}
              src={`https://open.spotify.com/embed/show/${process.env.NEXT_PUBLIC_SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </CardFlipFront>
      <CardFlipBack className="w-full flex flex-col relative ">
        <AudioLinesIcon
          className="absolute top-6 right-8 z-0 rotate-[20deg] opacity-5"
          size={70}
          color="#000000"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 h-full flex-1 min-h-0 content-center md:content-stretch">
          <div className="flex flex-col h-auto md:h-full">
            <CardTitle className="mb-1 md:mb-2">iRadioAut</CardTitle>
            <p className="mb-3 md:mb-4 text-sm line-clamp-3 md:line-clamp-3">
              iRadioAut è un collettivo artistico che esplora la musica come
              spazio di condivisione, intrecciando storie personali, sensibilità
              diverse e ritmi sinceri per raccontare emozioni quotidiane.
            </p>
            <div className="w-full h-[152px] md:h-auto md:flex-1 min-h-0">
              <iframe
                data-testid="embed-iframe"
                style={{ borderRadius: "12px", marginBottom: 0 }}
                src={`https://open.spotify.com/embed/artist/${process.env.NEXT_PUBLIC_SPOTIFY_ARTIST_ID}?utm_source=generator`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col h-auto md:h-full">
            <CardTitle className="mb-1 md:mb-2">The Austen</CardTitle>
            <p className="mb-3 md:mb-4 text-sm line-clamp-3 md:line-clamp-3">
              The Austen è un progetto musicale indipendente che fonde sonorità
              indie-rock con testi introspettivi e atmosfere ricercate, in un
              viaggio sonoro che unisce ricerca timbrica e identità.
            </p>
            <div className="w-full h-[152px] md:h-auto md:flex-1 min-h-0">
              <iframe
                data-testid="embed-iframe-austen"
                style={{ borderRadius: "12px", marginBottom: 0 }}
                src={`https://open.spotify.com/embed/artist/6HRB7ek2jaW0uoSymCEQ62?utm_source=generator`}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default Players;
