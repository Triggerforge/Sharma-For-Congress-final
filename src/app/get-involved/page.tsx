"use client";

import Image from "next/image";
import { useState } from "react";
import { api } from "~/trpc/react"; // make sure this is the correct path to your TRPC hook setup

const options = ["Events", "Yard Signs", "Phone Calls"];

export default function GetInvolved() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const signup = api.signup.submit.useMutation({
    onSuccess: () => {
      alert("Thank you for signing up!");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
      });
      setSelectedOptions([]);
    },
    onError: (err) => {
      console.error(err);
      alert("There was an error. Please try again.");
    },
  });

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signup.mutate({
      ...formData,
      first: formData.firstName,
      last: formData.lastName,
      helpTypes: selectedOptions.join(", "),
    });
  };

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="/raleigh.jpg"
          alt="Raleigh Skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="text-white text-5xl font-heading font-extrabold uppercase">
            Get Involved
          </h1>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-[#fdfaf6] px-4 py-16 flex flex-col items-center">
        <h2 className="text-xl text-center font-semibold mb-2">
          Show your friends and neighbors that you support Sid.
        </h2>
        <p className="italic text-center mb-8">Fill out the form below</p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input name="firstName" value={formData.firstName} onChange={handleChange} className="border p-3 rounded-md" placeholder="First*" required />
          <input name="lastName" value={formData.lastName} onChange={handleChange} className="border p-3 rounded-md" placeholder="Last*" required />
          <input name="email" value={formData.email} onChange={handleChange} className="border p-3 rounded-md col-span-1 md:col-span-2" placeholder="E-mail*" required />
          <input name="address" value={formData.address} onChange={handleChange} className="border p-3 rounded-md col-span-1 md:col-span-2" placeholder="Address*" required />
          <input name="city" value={formData.city} onChange={handleChange} className="border p-3 rounded-md" placeholder="City*" required />
          <input name="state" value={formData.state} onChange={handleChange} className="border p-3 rounded-md" placeholder="State*" required />
          <input name="zip" value={formData.zip} onChange={handleChange} className="border p-3 rounded-md" placeholder="ZIP*" required />
          <input name="phone" value={formData.phone} onChange={handleChange} className="border p-3 rounded-md col-span-1 md:col-span-2" placeholder="Phone" />

          {/* Help options */}
          <div className="col-span-1 md:col-span-2 bg-indigo-950 p-6 rounded-md mt-4">
            <h3 className="text-white text-lg mb-4 font-heading">Ways You Can Help</h3>
            <div className="flex flex-col gap-3">
              {options.map((option) => (
                <label key={option} className="flex items-center gap-3 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="accent-red-600 w-5 h-5"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-bold font-heading px-8 py-4 rounded-md hover:bg-indigo-950 transition mt-6"
            >
              I'M IN
            </button>
          </div>
        </form>

        <p className="text-xs max-w-md text-center mt-4">
          By submitting your cell phone number you are agreeing to receive periodic text messages from this organization. Message and data rates may apply.
          <a href="/privacy-policy" className="text-red-400 underline ml-1">Privacy Policy</a>
        </p>
      </section>
    </>
  );
}
