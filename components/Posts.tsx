import Link from "next/link";

import { Edge, getAllPostsFromWordPress } from "@/graphql/queries/posts";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import { LucideCalendarDays } from "lucide-react";
import Image from "next/image";

const PostPreview = ({ post }: { post: Edge }) => {
  const { id, title, featuredImage, date, link } = post.node;

  return (
    <Link className="w-full " href={`${link}`} target="_blank">
      <article
        key={id}
        className="group  min-h-56 sm:min-h-44 md:min-h-56 flex relative size-full rounded-2xl overflow-hidden flex-col items-start justify-between"
      >
        {featuredImage.node && (
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            fill
            className="absolute w-full h-full object-cover"
          />
        )}

        <div className="absolute p-4 pt-20 bottom-0 w-full bg-gradient-to-t from-black to-transparent transition-all">
          <h3 className="text-white group-hover:brightness-75 transition-colors text-lg font-bold mb-2 line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="absolute flex justify-between text-white text-sm sm:text-base p-2 pb-10 w-full bg-gradient-to-b from-black to-transparent -top-10 group-hover:top-0 transition-all">
          {date && (
            <div className="inline-flex items-center gap-2 ">
              <LucideCalendarDays className="size-3 md:size-4" />
              <time dateTime={date}>
                {format(new Date(date), "dd/LL/yy", { locale: it })}
              </time>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export const AllPostsGrid = async (limit = 3) => {
  const { edges } = await getAllPostsFromWordPress(limit);

  return (
    <div className="flex flex-col h-full">
      <div className="grid flex-shrink grid-cols-2 gap-4 ">
        {edges.map((post) => (
          <PostPreview key={post.node.id} post={post} />
        ))}{" "}
      </div>
    </div>
  );
};

export const LatestPosts = async ({ limit = 4 }: { limit?: number }) => {
  const { edges } = await getAllPostsFromWordPress(limit);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex-1  w-full h-full gap-2  ">
      {edges.map((post) => (
        <PostPreview key={post.node.id} post={post} />
      ))}
    </div>
  );
};
