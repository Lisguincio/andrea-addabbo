import { fetchGraphQL } from "../utils";

export interface Edge {
  cursor: string;
  node: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    link: string;
    featuredImage: FeaturedImage;
  };
}

export interface FeaturedImage {
  node: {
    altText: string;
    caption: string | null;
    sourceUrl: string;
  };
}

export interface Post {
  posts: {
    edges: Edge[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      endCursor: string;
    };
  };
}

export async function getAllPostsFromWordPress(limit = 10) {
  const data = await fetchGraphQL<Post>(`
    query AllPosts {
      posts(first: ${limit}) {
        edges {
		cursor
          node {
            id
            slug
            title
            excerpt
            date
			      link
            featuredImage {
              node {
                altText
                caption
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  return data.posts;
}
