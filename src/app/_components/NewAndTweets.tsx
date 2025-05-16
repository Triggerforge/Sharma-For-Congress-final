// This stays a server component — no "use client"
import { sanity } from "~/lib/sanity";
import { getPostsQuery } from "~/lib/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import TwitterFeed from "./TwitterFeed"; // ← update path as needed

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
          <div className="flex flex-col gap-8">
            {latest.map((post) => {
              const { day, month } = formatDate(post.publishedAt);
              return (
                <div key={post._id} className="flex gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-red-600 text-sm font-bold">{day}</span>
                    <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                      {month}
                    </span>
                  </div>
                  <div>
                    <Link href={`/news/${post.slug.current}`}>
                      <h3 className="text-lg font-bold text-indigo-950 mb-1 hover:underline">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-700 max-w-md">
                      {post.body
                        ?.filter((b: any) => b._type === "block")
                        ?.map((b: any) => b.children.map((c: any) => c.text).join(" "))
                        ?.join(" ")
                        ?.split(" ")
                        ?.slice(0, 25)
                        ?.join(" ") + "..." || "No preview available."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tweets Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-heading mb-6">
          
            TWEETS <span className="font-light">BY SID</span>
          </h2>
          <TwitterFeed /> {/* client-only component, now safe */}
        </div>
      </div>
    </section>
  );
}
