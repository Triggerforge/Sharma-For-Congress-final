"use client";

import { useEffect, useRef } from "react";

export default function TwitterFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptExists = document.querySelector(
      'script[src="https://platform.twitter.com/widgets.js"]'
    );

    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <a
        className="twitter-timeline"
        data-height="600"
        href="https://twitter.com/SiddhanthSharm4"
      >
        Tweets by @SiddhanthSharm4
      </a>
    </div>
  );
}
