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
            Meet Sid
          </h1>
        </div>
      </section>

      {/* Bio + Button Section */}
      <section className="bg-[#fdfaf6] py-16 px-6 lg:px-24 flex flex-col lg:flex-row gap-12">
      <div className="flex-1 text-indigo-950 text-lg space-y-8">
          <h2 className="text-2xl lg:text-3xl font-heading font-bold uppercase">
            Let’s send <span className="text-red-600">OUR OWN</span> to Washington
          </h2>

          <p>
            • Sid is an Accountant and helps people save their money from the “Taxman.” Sid has
            worked at his Father’s Accounting Firm since he was 9 years old and is still there to this day.
            Sid went to Campbell University. Sid was born and raised in Raleigh, North Carolina and is a
            lifelong District 13 Resident.
          </p>

          <p>
            We are $36 TRILLION Dollars in debt. We need an Accountant like Sid to balance the budget.
            There is not a single member of Congress, who is an Accountant, that serves on the Budget
            Committee and House and Ways Committee. It’s NO WONDER we are in debt.
          </p>

          <h2 className="text-2xl lg:text-3xl font-heading font-bold uppercase">
            Sid intends to do the job <span className="text-red-600">for FREE</span>
          </h2>

          <p>
            A service to your Country is to volunteer and why should anybody be paid to volunteer? Sid
            loves his Country and doesn’t see any reason to profit from it – that’s why he’s doing the job
            without taking the salary. Any money received will be donated to Local GOP Causes.
          </p>

          <p>
            One thing Sid enjoys about running for office is that every day breeds opportunity and makes
            you live it to the fullest – and that&apos;s the greatest thing about America: if you want it you can get
            it. Seems like yesterday Sid was working at his Father&apos;s accounting firm and is now here running
            for Congress meeting the great people of District 13.
          </p>

         
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