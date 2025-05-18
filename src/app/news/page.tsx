import { sanity } from '~/lib/sanity';
import { getPostsQuery } from '~/lib/queries';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SignupSection from '~/app/_components/SignupSection';

interface Props {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function NewsPage({ searchParams }: Props) {
  const postsPerPage = 5;

  // Safely extract and parse the "page" param
  const pageParam = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
  const page = parseInt(pageParam || '1', 10);

  const allPosts: any[] = await sanity.fetch(getPostsQuery);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const paginatedPosts = allPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  const formatDate = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return {
      month: date.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate().toString().padStart(2, '0'),
    };
  };

  return (
    <>
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/raleigh.jpg"
          alt="Raleigh, NC"
          fill
          className="object-cover object-middle"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-heading font-bold uppercase drop-shadow-lg">
            Latest News
          </h1>
        </div>
      </section>

      <div className="bg-[#fdfaf6] px-4 md:px-10 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {paginatedPosts.map((post) => {
            const { month, day } = formatDate(post.publishedAt);
            const previewText =
              post.body
                ?.filter((b: any) => b._type === 'block')
                ?.map((b: any) => b.children.map((c: any) => c.text).join(' '))
                ?.join(' ')
                ?.split(' ')
                ?.slice(0, 50)
                ?.join(' ') + '...';

            return (
              <div key={post._id} className="flex flex-col md:flex-row gap-6 border-l-2 pl-4 border-gray-200">
                <div className="flex flex-col items-center justify-start w-20">
                  <span className="text-red-600 font-bold text-sm">{month}</span>
                  <span className="bg-red-600 text-white font-bold text-xl px-2 py-1 rounded">{day}</span>
                </div>

                <div className="flex-1">
                  <Link href={`/news/${post.slug.current}`}>
                    <h2 className="text-3xl font-heading mb-6 uppercase text-indigo-950 hover:underline">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-sm text-gray-800 mt-2">{previewText}</p>

                  <div className="mt-2">
                    <Link
                      href={`/news/${post.slug.current}`}
                      className="text-red-600 text-sm font-semibold underline hover:text-red-800"
                    >
                      Read More
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-gray-600 text-sm">
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    <FaEnvelope className="hover:text-red-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-12 font-bold text-red-600 text-sm">
          <Link
            href={`/news?page=${page - 1}`}
            className={page > 1 ? 'hover:underline' : 'pointer-events-none text-gray-300'}
          >
            ← PREVIOUS
          </Link>
          <Link
            href={`/news?page=${page + 1}`}
            className={page < totalPages ? 'hover:underline' : 'pointer-events-none text-gray-300'}
          >
            NEXT →
          </Link>
        </div>
      </div>

      <SignupSection />
    </>
  );
}
