import { Suspense } from "react";

import { LatestPosts } from "@/components/Posts";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";
import ProfileCard from "@/components/ProfileCard";
import WorkedWith from "@/components/WorkedWith";
import ExpertArea from "@/components/ExpertArea";
import SpotifyList from "@/components/Spotify";
import Youtube from "@/components/Youtube";
import Map from "@/components/Map";
import TikTok from "@/components/TikTok";
import Image from "next/image";
import MayLogo from "@/components/MayLogo";

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

          <Card className="flex flex-col grow">
            <CardBody className="flex flex-col h-full">
              <CardTitle>La mia azienda</CardTitle>
              <div className="flex-1">
                <MayLogo />
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="h-full gap-4 flex flex-col">
          <Card className=" flex-1 max-sm:order-2 ">
            <CardBody className="flex flex-col justify-start h-full">
              <CardTitle className="mb-2">
                TikTok - Pillole di sicurezza
              </CardTitle>
              <TikTok />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Con chi collaboro</CardTitle>
              <WorkedWith />
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="grid relative grid-cols-1  gap-4 max-md:gap-x-0 mt-4 md:grid-cols-3">
        <div className="h-full col-span-1 max-sm:order-2">
          <Card className="h-full">
            <CardBody>
              <CardTitle className="mb-2">Dove mi trovi</CardTitle>
              <Map />
            </CardBody>
          </Card>
        </div>
        <div className="h-full col-span-2">
          <Card className="h-full  grid grid-cols-1 md:grid-cols-2 gap-4">
            <CardBody className=" flex flex-col  h-full ">
              <CardTitle className="mb-2">Ultimo video - Youtube</CardTitle>
              <Youtube />
            </CardBody>
            <CardBody className="  justify-start h-full ">
              <CardTitle className="mb-2">Ombre sul lavoro - Spotify</CardTitle>
              <Suspense>{await SpotifyList({ limit: 8 })}</Suspense>
            </CardBody>
          </Card>
        </div>
      </div>
      <Card className="h-full  mt-4">
        <CardBody className=" flex  min-h-64 flex-col justify-start h-full ">
          <CardTitle className="mb-2">Ultimi articoli</CardTitle>
          <LatestPosts />
        </CardBody>
      </Card>
    </div>
  );
}
