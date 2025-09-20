import React from "react";

const TikTok = () => {
  return (
    <>
      <blockquote
        className="tiktok-embed w-full min-w-xs !m-0"
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
  );
};

export default TikTok;
