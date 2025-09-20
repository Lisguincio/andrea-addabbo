import { getPodcastEpisodes } from "../spotify/episodes";
import { getOEmbed } from "../spotify/oEmbed";
import SpotifyPlayer from "./SpotifyPlayer";

interface Props {
  limit?: number;
  offset?: number;
}

const SpotifyList = async ({ limit = 4, offset = 1 }: Props) => {
  const episodes = (await getPodcastEpisodes(limit, offset)).items.filter(
    (e) => !!e
  );
  const oEmbeds = await Promise.all(
    episodes.map((episode) => getOEmbed(episode.external_urls.spotify))
  ).then((oEmbeds) => oEmbeds.map((oEmbed, i) => ({ ...episodes[i], oEmbed })));

  return <SpotifyPlayer episodesEmbeds={oEmbeds} />;
};

export default SpotifyList;
