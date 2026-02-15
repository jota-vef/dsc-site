import { sanity } from "../lib/sanity";

export type BlogPostFull = {
  title: string;
  slug: string;
  publishedAt?: string;
  body: any;
};

const POST_BY_SLUG_QUERY = `
*[_type == "post" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  publishedAt,
  body
}
`;

export async function getPostBySlug(slug: string) {
  return sanity.fetch<BlogPostFull | null>(POST_BY_SLUG_QUERY, { slug });
}
