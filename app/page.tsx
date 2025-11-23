import ExpertArea from "@/components/HomeComponents/ExpertArea/ExpertArea";
import Map from "@/components/HomeComponents/Map/Map";
import MyWork from "@/components/HomeComponents/MyWork/MyWork";
import News from "@/components/HomeComponents/News/News";
import ProfileCard from "@/components/HomeComponents/ProfileCard/ProfileCard";
import TikTok from "@/components/HomeComponents/TikTok/TikTok";
import Players from "@/components/HomeComponents/Players/Players";
import WorkedWith from "@/components/WorkedWith";
import { getAllPostsFromWordPress } from "@/graphql/queries/posts";
import { getPodcastEpisodes } from "@/spotify/episodes";
import { getPlaylistTracks } from "@/spotify/userFavorite";
import { Artist } from "spotify-types";

export default async function Home() {
  const { edges: latestPostsEdge } = await getAllPostsFromWordPress(4);
  const { items: podcastEpisodes } = await getPodcastEpisodes(10);
  const { items: playlistTracks } = await getPlaylistTracks();

  return (
    <div className="flex flex-col justify-center ">
      <div className="grid md:min-h-[720px] relative grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex h-full ">
          <ProfileCard />
        </div>
        <div className="h-full flex flex-col gap-4 ">
          <ExpertArea />
          <MyWork />
        </div>
        <div className="flex min-h-[300px] gap-4 xl:col-span-1  flex-col xl:flex-col">
          <TikTok tracks={playlistTracks} />
          <WorkedWith />
        </div>
      </div>
      <div className="grid relative grid-cols-1  gap-4 max-md:gap-x-0 mt-4 md:grid-cols-3">
        <div className="h-full col-span-1 max-sm:order-2">
          <Map />
        </div>
        <div className="h-full col-span-2">
          <Players items={podcastEpisodes} />
        </div>
      </div>
      <News latestPosts={latestPostsEdge} />
    </div>
  );
}
