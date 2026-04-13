"use client";
import { CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import { usePersonalContext } from "@/contexts/personalContext";

const TikTok = () => {
  const { currentPersonal } = usePersonalContext();

  return (
    <CardFlip
      direction="left"
      value={currentPersonal}
      className=" flex-2 md:flex-4 xl:flex-3 min-h-[300px] max-md:min-h-[480px] "
    >
      <CardFlipFront className="flex flex-col h-full">
        <CardTitle className="mb-2">TikTok - Pillole di sicurezza</CardTitle>
        <div className="flex-1 w-full min-h-0 overflow-hidden rounded-xl">
          <blockquote
            className="tiktok-embed !m-0 w-full h-full"
            cite="https://www.tiktok.com/@may.hse"
            data-unique-id="may.hse"
            data-embed-type="creator"
            style={{ width: "100%", height: "100%" }}
          >
            <section>
              <a
                target="_blank"
                href="https://www.tiktok.com/@may.hse?refer=creator_embed"
              >
                @may.hse
              </a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </CardFlipFront>
      <CardFlipBack className="overflow-hidden w-full flex flex-col">
        <CardTitle className="mb-2">Le mie ispirazioni</CardTitle>
        <div className="flex-1 w-full min-h-0">
          <iframe
            style={{ borderRadius: "12px", marginBottom: 0 }}
            src={`https://open.spotify.com/embed/playlist/${process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </CardFlipBack>
    </CardFlip>
  );
};

export default TikTok;
