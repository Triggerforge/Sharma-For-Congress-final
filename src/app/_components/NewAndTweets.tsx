// Server Component — no "use client"
import { sanity } from "~/lib/sanity";
import { getPostsQuery } from "~/lib/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import TwitterFeed from "./TwitterFeed"; // Update path if needed

export default async function NewsAndTweets() {
  const posts: any[] = await sanity.fetch(getPostsQuery);
  const latest = posts.slice(0, 3);

  const formatDate = (publishedAt: string) => {
    const date = new Date(publishedAt);
    return {
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      day: date.getDate().toString().padStart(2, "0"),
    };
  };

  return (
    <section className="w-full bg-[#fdfaf6] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* News Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-heading mb-6">
            <span className="inline-block text-xl mr-2">📰</span>
            LATEST <span className="font-light">NEWS</span>
          </h2>

          <div className="flex flex-col gap-12">
            {latest.map((post) => {
              const { day, month } = formatDate(post.publishedAt);
              const previewText =
                post.body
                  ?.filter((b: any) => b._type === "block")
                  ?.map((b: any) => b.children.map((c: any) => c.text).join(" "))
                  ?.join(" ")
                  ?.split(" ")
                  ?.slice(0, 50)
                  ?.join(" ") + '...';

              return (
                <div key={post._id} className="flex flex-col md:flex-row gap-6 border-l-2 pl-4 border-gray-200">
                  {/* Date block */}
                  <div className="flex flex-col items-center justify-start w-20">
                    <span className="text-red-600 font-bold text-sm">{month}</span>
                    <span className="bg-red-600 text-white font-bold text-xl px-2 py-1 rounded">{day}</span>
                  </div>

                  {/* Post content */}
                  <div className="flex-1">
                    <Link href={`/news/${post.slug.current}`}>
                      <h3 className="text-2xl font-heading mb-4 uppercase text-indigo-950 hover:underline">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-700 max-w-md">{previewText}</p>

                    <div className="mt-2">
                      <Link
                        href={`/news/${post.slug.current}`}
                        className="text-red-600 text-sm font-semibold underline hover:text-red-800"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Twitter Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-heading mb-6 flex items-center gap-2">
          
            TWEETS <span className="font-light">BY SID</span>
          </h2>
          <TwitterFeed />
        </div>
      </div>
    </section>
  );
}
