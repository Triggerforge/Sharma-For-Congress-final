import HeroWithDonation from "~/app/_components/HeroWithDonation";
import IssuesSection from "~/app/_components/IssuesSection";
import NewAndTweets from "~/app/_components/NewAndTweets";
import SignupSection from "~/app/_components/SignupSection";

export default function Home() {
  return (
    <>
  
      <HeroWithDonation />
      <IssuesSection />
      <NewAndTweets />
      <SignupSection />
      {/* Add more content like News, etc. */}

    </>
  );
}
