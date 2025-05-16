// app/blog/[slug]/page.tsx
import { sanity } from '~/lib/sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';


export async function generateStaticParams() {
  const slugs = await sanity.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, publishedAt, body,
      mainImage{ asset->{ url } }
    }`,
    { slug: params.slug }
  );

  return (

    <><div className="p-8">
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
        {post.mainImage?.asset?.url && (
          <img src={post.mainImage.asset.url} className="w-full my-4 rounded" />
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} />
        </div>

      </div></>
  );
}
