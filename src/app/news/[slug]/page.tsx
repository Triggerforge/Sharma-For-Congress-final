// src/app/news/[slug]/page.tsx
import { sanity } from '~/lib/sanity';
import { PortableText } from '@portabletext/react';
import SignupSection from '~/app/_components/SignupSection';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
      mainImage {
        asset->{
          url
        }
      }
    }`,
    { slug: params.slug }
  );

  if (!post) notFound();

  return (
    <>
      <section className="w-full bg-[#fdfaf6] py-16 px-4 lg:px-20">
        <div className="p-4">
          <h1 className="text-5xl font-heading mb-6 uppercase text-indigo-950">{post.title}</h1>
          <p className="text-sm text-gray-500 my-4">{new Date(post.publishedAt).toLocaleDateString()}</p>
          {post.mainImage?.asset?.url && (
            <img src={post.mainImage.asset.url} className="w-full my-4 rounded" />
          )}
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>
      <SignupSection />
    </>
  );
}
