// lib/queries.ts
export const getPostsQuery = `
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  mainImage{
    asset->{
      url
    }
  },
  body
}
`;
