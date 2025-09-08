import React from "react";

const Youtube = async () => {
  const userId = process.env.NEXT_PUBLIC_YOUTUBE_USER_ID!;

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed?listType=playlist&list=${userId}`}
      height="220"
      allowFullScreen
    />
  );
};

export default Youtube;
