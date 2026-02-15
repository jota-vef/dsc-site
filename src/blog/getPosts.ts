import { sanity } from "../lib/sanity";

export type BlogPost = {
  title: string;
  slug: string;
  publishedAt?: string;
};

const POSTS_QUERY = `
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc) {
  title,
  "slug": slug.current,
  publishedAt
}
`;

export async function getPosts() {
  return sanity.fetch<BlogPost[]>(POSTS_QUERY);
}
