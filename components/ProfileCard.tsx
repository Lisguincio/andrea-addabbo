import { LucideMail, LucidePhone, LucidePhoneCall } from "lucide-react";
import Link from "next/link";
import { Card, CardBody, CardTitle } from "./Card/Card";
import Map from "./Map";
import Socials from "./Socials";
import settings from "@/constants/settings";
import Image from "next/image";

const ProfileCard = () => {
  const title = settings?.title;
  const description = settings?.description;
  const propic = settings?.coverImage;

  return (
    <div className="flex h-full flex-col gap-4 ">
      <Card className="flex-1">
        <CardBody className="flex flex-col h-full">
          <div className="w-full aspect-video grow h-full object-cover relative rounded-xl overflow-hidden">
            <Image
              className="object-cover "
              fill
              src={propic}
              alt="Profile Card"
            />
          </div>
          <div className="mt-2 flex h-full  flex-col">
            <h3 className="card-title flex-wrap">
              <span className="flex-grow"> {title}</span>
              <div className="flex items-center justify-end flex-shrink gap-2 mr-auto">
                <Socials />
              </div>
            </h3>
            <div className="mt-2 text-base-content">
              <p>{description}</p>
            </div>

            <div className=" mt-3 flex items-center gap-2">
              <Link
                href={"tel:+393791074732"}
                className=" bg-primary hover:brightness-90 rounded-lg py-4 px-6 flex items-center justify-center flex-grow text-white gap-2 "
              >
                <LucidePhoneCall size={18} />
                Chiama
              </Link>
              <Link
                href={"mailto:ing@andreaaddabbo.it"}
                className=" aspect-square hover:brightness-90 bg-white border border-gray-300 rounded-lg px-4 py-4 flex items-center justify-center  gap-2 "
              >
                <LucideMail size={22} />
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProfileCard;
