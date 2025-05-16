// app/blog/page.tsx (or pages/blog.tsx if using pages dir)
import { sanity } from '~/lib/sanity';
import { getPostsQuery } from '~/lib/queries';
import Image from 'next/image';

export default async function NewsPage() {
  const posts = await sanity.fetch(getPostsQuery);

  return (

    <>
    <div>
          <section className="relative w-full h-[50vh] min-h-[400px]">
            <Image
              src="/raleigh.jpg" // Replace with the path to your vertical image
              alt="Raleigh, NC"
              fill
              className="object-cover object-middle"
              priority />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-5xl font-heading font-bold uppercase drop-shadow-lg">
                News
              </h1>
            </div>
          </section>
        </div>

    <div className="p-8">
      <div className="space-y-6">
        {posts.map((post: any) => (
          <div key={post._id} className="border-b pb-4">
            <h2 className="text-indigo-950 text-2xl font-heading font-bold uppercase">{post.title}</h2>
            <p className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
            {post.mainImage?.asset?.url && (
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                className="w-full h-auto mt-2 rounded"
              />
            )}
            <a href={`/news/${post.slug.current}`} className="text-blue-600">Read more →</a>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
