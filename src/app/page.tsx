import { Suspense } from "react";
import HeroWithDonation from "~/app/_components/HeroWithDonation";
import IssuesSection from "~/app/_components/IssuesSection";
import NewsAndTweets from "~/app/_components/NewAndTweets";
import SignupSection from "~/app/_components/SignupSection";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading hero...</div>}>
        <HeroWithDonation />
      </Suspense>

      <IssuesSection />

      <Suspense fallback={<div>Loading news...</div>}>
        <NewsAndTweets />
      </Suspense>

      <SignupSection />
    </>
  );
}
