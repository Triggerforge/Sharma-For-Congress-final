"use client";

import Image from "next/image";
import { useState } from "react";
import { api } from "~/trpc/react"; // Make sure this is the correct import path for your project

export default function SignupSection() {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    email: '',
    zip: '',
    phone: '',
  });

  const newsletter = api.newsletter.submit.useMutation({
    onSuccess: () => {
      alert("Thank you for signing up!");
      setFormData({
        first: '',
        last: '',
        email: '',
        zip: '',
        phone: '',
      });
    },
    onError: (error) => {
      console.error(error);
      alert("Something went wrong. Please try again.");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsletter.mutate(formData);
  };

  return (
    <section className="w-full bg-[#fdfaf6] py-16 px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row items-stretch overflow-hidden rounded-md shadow-lg">
        {/* Left image */}
        <div className="relative w-full lg:w-1/2 h-96 lg:h-auto">
          <Image
            src="/speaking.jpg"
            alt="Sid Sharma"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 bg-indigo-950 text-white flex flex-col justify-center p-8">
          <h2 className="text-3xl font-heading mb-6">
            <span className="font-bold">KEEP</span> UP TO DATE
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="first"
              type="text"
              placeholder="FIRST*"
              value={formData.first}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-slate-400 text-indigo-950 placeholder-indigo-950 font-semibold"
              required
            />
            <input
              name="last"
              type="text"
              placeholder="LAST*"
              value={formData.last}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-slate-400 text-indigo-950 placeholder-indigo-950 font-semibold"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="E-MAIL*"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-slate-400 text-indigo-950 placeholder-indigo-950 font-semibold"
              required
            />
            <input
              name="zip"
              type="text"
              placeholder="ZIP*"
              value={formData.zip}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-slate-400 text-indigo-950 placeholder-indigo-950 font-semibold"
              required
            />
            <input
              name="phone"
              type="text"
              placeholder="PHONE"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 rounded bg-slate-400 text-indigo-950 placeholder-indigo-950 font-semibold"
            />

            <button
              type="submit"
              className="bg-red-600 text-white font-heading font-bold px-6 py-3 rounded mt-4 hover:bg-red-700 transition"
            >
              I'M IN
            </button>
          </form>

          {/* Legal text */}
          <p className="text-xs text-white mt-4 max-w-md">
            By submitting your cell phone number you are agreeing to receive periodic text messages from this organization. Message and data rates may apply. 
            <a href="/privacy-policy" className="text-red-400 underline ml-1">Privacy Policy</a>
          </p>
        </div>
      </div>
    </section>
  );
}
