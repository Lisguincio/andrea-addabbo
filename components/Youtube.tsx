import React from "react";

const Youtube = async () => {
  const userId = process.env.NEXT_PUBLIC_YOUTUBE_USER_ID!;

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${userId}`}
      title="YouTube video player"
      frameBorder={0}
      className="rounded-xl flex-1 max-sm:min-h-[250px] "
      allowFullScreen
    />
  );
};

export default Youtube;
