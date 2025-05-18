import { sanity } from '~/lib/sanity';
import { PortableText } from '@portabletext/react';
import SignupSection from '~/app/_components/SignupSection';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// ✅ MUST define this named interface exactly as used by Next.js internal types
export interface PageProps {
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
      mainImage { asset->{ url } }
    }`,
    { slug: params.slug }
  );

  if (!post) notFound();

  return (
    <>
      <section className="w-full bg-[#fdfaf6] py-16 px-4 lg:px-20">
        <div className="p-4">
          <h1 className="text-5xl font-heading mb-6 uppercase text-indigo-950">{post.title}</h1>
          <p className="text-sm text-gray-500 my-4">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>
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

// ✅ Next.js uses this to infer that `params.slug` is static
export async function generateStaticParams() {
  const posts = await sanity.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return posts.map((post: any) => ({ slug: post.slug }));
}

// ✅ Satisfies type system for metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog Post',
  };
}
