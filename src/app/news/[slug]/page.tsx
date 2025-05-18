import { sanity } from '~/lib/sanity';
import { PortableText } from '@portabletext/react';
import SignupSection from '~/app/_components/SignupSection';

// This generates all the dynamic routes for static generation
export async function generateStaticParams() {
  const slugs = await sanity.fetch(`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map((s: any) => ({ slug: s.slug }));
}

// The dynamic [slug] page
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanity.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      publishedAt,
      body,
      mainImage {
        asset->{ url }
      }
    }`,
    { slug: params.slug }
  );

  if (!post) {
    return (
      <div className="p-10 text-center text-red-600 text-xl font-semibold">
        Post not found.
      </div>
    );
  }

  return (
    <>
      <section className="w-full bg-[#fdfaf6] py-16 px-4 lg:px-20">
        <div className="p-8 lg:p-16">
          <h1 className="text-5xl font-heading mb-6 uppercase text-indigo-950">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-12">
            {new Date(post.publishedAt).toLocaleDateString()}
          </p>

          {post.mainImage?.asset?.url && (
            <img
              src={post.mainImage.asset.url}
              className="w-full my-4 rounded"
              alt={post.title}
            />
          )}

          <div className="prose prose-lg max-w-none text-gray-800">
            <PortableText value={post.body} />
          </div>
        </div>
      </section>

      <SignupSection />
    </>
  );
}
