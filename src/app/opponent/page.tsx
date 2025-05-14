"use client";

import Image from "next/image";
import Link from "next/link";
import SignupSection from "~/app/_components/SignupSection";

export default function MeetSidPage() {
  return (
    <>
      {/* Hero-style Header Section */}
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/raleigh.jpg" // Replace with the path to your vertical image
          alt="Raleigh, NC"
          fill
          className="object-cover object-middle"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-heading font-bold uppercase drop-shadow-lg">
           Our Opponent
          </h1>
        </div>
      </section>

      {/* Bio + Button Section */}
      <section className="bg-[#fdfaf6] py-16 px-6 lg:px-24 flex flex-col lg:flex-row gap-12">
      <div className="flex-1 text-indigo-950 text-lg space-y-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold uppercase">
           This <span className="text-red-600">Information</span> will be available after December 19th, 2025.
          </h2>

    

        

         
        </div>
        <div className="lg:w-1/3 flex flex-col gap-4 items-center lg:items-start">
          <h2 className="text-2xl font-heading uppercase mb-4">Keep Reading</h2>
          <Link
            href="/issues"
            className="bg-indigo-950 text-white font-heading px-6 py-4 rounded-md hover:bg-red-600 transition"
          >
            Sid's Promises To You
          </Link>
        </div>
      </section>
      <SignupSection />
    </>
  );
}