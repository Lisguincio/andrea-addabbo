"use client";
import { Card, CardBody, CardTitle } from "@/components/Card/Card";
import PostPreview from "@/components/Posts";
import { usePersonalContext } from "@/contexts/personalContext";
import { Edge } from "@/graphql/queries/posts";
import React from "react";

const News = ({ latestPosts }: { latestPosts: Edge[] }) => {
  const { currentPersonal } = usePersonalContext();
  if (currentPersonal) return null;

  return (
    <Card className="h-full  mt-4">
      <CardBody className=" flex  min-h-64 flex-col justify-start h-full ">
        <CardTitle className="mb-2">Ultimi articoli</CardTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex-1  w-full h-full gap-2  ">
          {latestPosts.map((post) => (
            <PostPreview key={post.node.id} post={post} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default News;
