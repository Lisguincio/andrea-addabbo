import { Suspense } from "react";

import { LatestPosts } from "@/components/Posts";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";
import ProfileCard from "@/components/ProfileCard";
import WorkedWith from "@/components/WorkedWith";
import ExpertArea from "@/components/ExpertArea";
import SpotifyList from "@/components/Spotify";
import Youtube from "@/components/Youtube";
import Map from "@/components/Map";

export default async function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <div className="grid relative grid-cols-1  md:grid-cols-3 gap-4">
        <div className="h-full">
          <ProfileCard />
        </div>
        <div className="h-full  flex flex-col gap-4 ">
          <Card className="">
            <CardBody>
              <CardTitle>Di cosa mi occupo</CardTitle>
              <ExpertArea />
            </CardBody>
          </Card>

          <Card className="grow">
            <CardBody className="">
              <CardTitle>Ho collaborato con</CardTitle>
              <WorkedWith />
            </CardBody>
          </Card>
        </div>
        <div className="h-full flex flex-col">
          <Card className=" flex-1">
            <CardBody className="flex flex-col justify-start h-full">
              <CardTitle className="mb-2">Ombre sul lavoro - Spotify</CardTitle>
              <link
                rel="alternate"
                type="application/json+oembed"
                href="https://open.spotify.com/oembed?url=https%3A%2F%2Fopen.spotify.com%2Fshow%2F5eXZwvvxt3K2dxha3BSaAe"
              />
              <Suspense>{await SpotifyList({ limit: 8 })}</Suspense>
              <hr className="my-6 border-gray-300" />
              <CardTitle className="mb-2">Ultimo video - Youtube</CardTitle>
              <Youtube />
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid relative grid-cols-1  gap-4 max-md:gap-x-0 mt-4 md:grid-cols-3">
        <div className="h-full col-span-1">
          <Card className="">
            <CardBody>
              <CardTitle className="mb-2">Dove mi trovi</CardTitle>
              <Map />
            </CardBody>
          </Card>
        </div>
        <div className="h-full col-span-2">
          <Card className="h-full">
            <CardBody className=" flex flex-col justify-start h-full ">
              <CardTitle className="mb-2">Ultimi articoli</CardTitle>
              <LatestPosts />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
