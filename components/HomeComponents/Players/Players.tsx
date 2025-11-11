import { Card, CardBody, CardTitle } from '@/components/Card/Card';
import SpotifyPlayer, { SpotifyPlayerProps } from "@/components/SpotifyPlayer";
import Youtube from "@/components/Youtube";
import { Episode, Track } from "spotify-types";

const Players = async ({ items }: { items: (Episode | Track)[] }) => {
  return (
    <Card className="h-full  grid grid-cols-1 md:grid-cols-2 gap-4">
      <CardBody className=" flex flex-col  h-full ">
        <CardTitle className="mb-2">Ultimo video - Youtube</CardTitle>
        <Youtube />
      </CardBody>
      <CardBody className="  justify-start h-full ">
        <CardTitle className="mb-2">Ombre sul lavoro - Spotify</CardTitle>
        <SpotifyPlayer
          items={items.map((e) => e)}
          extraText="Scopri le altre puntate"
          extraLink={`https://open.spotify.com/show/${process.env
            .NEXT_PUBLIC_SPOTIFY_SHOW_ID!}`}
        />
      </CardBody>
    </Card>
  );
};

export default Players