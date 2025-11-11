'use client'
import { CardTitle } from "@/components/Card/Card";
import {
  CardFlip,
  CardFlipBack,
  CardFlipFront,
} from "@/components/Card/FlipCard";
import SpotifyPlayer from "@/components/SpotifyPlayer";
import { usePersonalContext } from "@/contexts/personalContext";
import { PlaylistTrack } from "spotify-types";

const TikTok = ({ tracks }: { tracks: PlaylistTrack[] }) => {
  const { currentPersonal } = usePersonalContext();

  return (
    <CardFlip
      direction="left"
      value={currentPersonal}
      className="max-sm:order-2 flex-[2] "
    >
      <CardFlipFront>
        <CardTitle className="mb-2">TikTok - Pillole di sicurezza</CardTitle>
        <>
          <blockquote
            className="tiktok-embed w-full !m-0 "
            cite="https://www.tiktok.com/@may.hse"
            data-unique-id="may.hse"
            data-embed-type="creator"
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
        </>
      </CardFlipFront>
      <CardFlipBack className="overflow-hidden">
        <CardTitle className="mb-2">Le mie ispirazioni</CardTitle>
        <SpotifyPlayer
          active={currentPersonal ? true : false}
          items={tracks.map((t) => t.track)}
          extraText="Scopri il resto della playlist"
          extraLink={`https://open.spotify.com/playlist/${process.env
            .NEXT_PUBLIC_SPOTIFY_PLAYLIST_ID!}`}
        />
      </CardFlipBack>
    </CardFlip>
  );
};

export default TikTok;
