"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

export default function NewAndTweets() {
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
            {[
              {
                date: "OCT 12",
                title: "Veterans Need Health Care Options",
                summary:
                  "Arizona continues to show the country that veterans need health care options.",
              },
              {
                date: "SEP 20",
                title: "Disintegration of America Stems from Biden's Border",
                summary:
                  "The open border policy of Biden's regime is causing the disintegration of our nation.",
              },
              {
                date: "SEP 05",
                title: "Anti-Republican Speech Distracts from Failures",
                summary:
                  "Biden’s administration must be disciplined enough not to be distracted by poor impersonations.",
              },
            ].map(({ date, title, summary }, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">{date.split(" ")[0]}</span>
                  <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                    {date.split(" ")[1]}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 mb-1">{title}</h3>
                  <p className="text-sm text-gray-700 max-w-md">{summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tweets Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-heading mb-6">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-500 mr-2" />
            TWEETS <span className="font-light">BY SID</span>
          </h2>
          <div>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                🚨🚨 ENDORSEMENT ALERT🚨🚨<br /><br />
                Im HONORED to be endorsed by{" "}
                <a href="https://twitter.com/AmExcepCouncil?ref_src=twsrc%5Etfw">
                  @AmExcepCouncil
                </a>
                !!<br />
                If you want a candidate who is THOROUGH on issues I’m your man!!
                Check out{" "}
                <a href="https://t.co/yAEBtRroKP">https://t.co/yAEBtRroKP</a>{" "}
                Lets get it!{" "}
                <a href="https://twitter.com/hashtag/MAGA?src=hash&amp;ref_src=twsrc%5Etfw">
                  #MAGA
                </a>{" "}
                <a href="https://twitter.com/hashtag/AmericaFirst?src=hash&amp;ref_src=twsrc%5Etfw">
                  #AmericaFirst
                </a>{" "}
                <br /><br />
                <a href="https://twitter.com/ncgop13district?ref_src=twsrc%5Etfw">
                  @ncgop13district
                </a>{" "}
                <a href="https://twitter.com/granville_gop?ref_src=twsrc%5Etfw">
                  @granville_gop
                </a>{" "}
                <a href="https://twitter.com/westernwakerep?ref_src=twsrc%5Etfw">
                  @westernwakerep
                </a>{" "}
                <a href="https://twitter.com/MargoinWNC?ref_src=twsrc%5Etfw">
                  @MargoinWNC
                </a>{" "}
                <a href="https://twitter.com/hashtag/ncpol?src=hash&amp;ref_src=twsrc%5Etfw">
                  #ncpol
                </a>{" "}
                <a href="https://t.co/xz4WXvpBIh">pic.twitter.com/xz4WXvpBIh</a>
              </p>
              &mdash; Sid Sharma (@SiddhanthSharm4){" "}
              <a href="https://twitter.com/SiddhanthSharm4/status/1754213973770076199?ref_src=twsrc%5Etfw">
                April 12, 2023
              </a>
            </blockquote>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </div>
          <div className="w-full">
            <a
              className="twitter-timeline"
              data-height="600"
              href="https://twitter.com/SiddhanthSharm4"
            >
              Tweets by @SiddhanthSharm4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
