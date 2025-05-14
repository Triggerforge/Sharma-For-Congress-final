"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeroWithDonation() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("amount") || "";
  const [selectedAmount, setSelectedAmount] = useState(preselected);

  const amounts = ["5", "10", "20", "50"];
  const donationUrl = (amt: string) =>
    `https://secure.winred.com/sharma-for-congress/donate-today?amount=${amt}`;

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-[70vh] min-h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Sid Sharma Smiling"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* Desktop Donation */}
      <div className="hidden lg:flex justify-center z-20 relative -mt-[30px]">
        <div className="w-[90%] max-w-5xl flex shadow-xl rounded-sm overflow-hidden bg-white">
          {/* Red tag */}
          <div className="relative bg-red-600 text-white font-heading text-lg font-bold px-8 py-6 flex items-center">
            CHIP IN NOW
            <div className="absolute top-1/2 -right-[50px] -translate-y-1/2 w-0 h-0 border-y-[100px] border-y-transparent border-l-[50px] border-red-600" />
          </div>

          {/* Buttons */}
          <div className="bg-white px-30 flex justify-between items-center w-full gap-4">
            {amounts.map((amt) => (
              <a
                key={amt}
                href={donationUrl(amt)}
                onMouseEnter={() => setSelectedAmount(amt)}
                className={`flex-1 text-center font-heading font-bold py-3 rounded-xl transition ${
                  selectedAmount === amt
                    ? "bg-red-600 text-white"
                    : "bg-indigo-950 text-white hover:bg-red-600"
                }`}
              >
                ${amt}
              </a>
            ))}
            <a
              href="https://secure.winred.com/sharma-for-congress/donate-today"
              className="flex-1 text-center bg-indigo-950 text-white font-heading font-bold py-3 rounded-xl hover:bg-red-600 transition"
            >
              ENTER AMOUNT
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Donation Section */}
      <section className="lg:hidden bg-white px-6 py-12 text-center mt-8">
        <div className="bg-indigo-950 text-white font-heading text-lg font-bold px-6 py-3 mb-6">
          CHIP IN NOW
        </div>
        <div className="flex flex-col gap-4">
          {amounts.map((amt) => (
            <a
              key={amt}
              href={donationUrl(amt)}
              onMouseEnter={() => setSelectedAmount(amt)}
              className={`font-bold px-5 py-3 rounded-md transition ${
                selectedAmount === amt
                  ? "bg-indigo-950 text-white"
                  : "bg-red-600 text-white hover:bg-indigo-950"
              }`}
            >
              ${amt}
            </a>
          ))}
          <a
            href="https://secure.winred.com/sharma-for-congress/donate-today"
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-md hover:bg-indigo-950 transition"
          >
            ENTER AMOUNT
          </a>
        </div>
      </section>
    </>
  );
}
