// ✅ src/components/ResponsiveSidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { PlusCircleIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const navLinks = [
  {
    label: "Meet Sid",
    href: "/about",
    icon: <PlusCircleIcon className="w-5 h-5  text-white" />,
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Solutions",
    href: "/issues",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
  },
  {
    label: "Our Opponent",
    href: "/opponent",
  },
  {
    label: "Chip In",
    href: "https://secure.winred.com/sharma-for-congress/donate-today",
    icon: <CurrencyDollarIcon className="w-5 h-5 text-white" />,
  },
];

export default function ResponsiveSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-[var(--color-dark)] text-white">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={90} />
        </Link>
        <button onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {open && (
        <div className="fixed inset-0 bg-[var(--color-dark)] z-50 p-6 text-white">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={180} height={90} onClick={() => setOpen(false)} />
            </Link>
            <button onClick={() => setOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="mt-8 space-y-6" onClick={() => setOpen(false)}>
            {navLinks.map(({ label, href, icon }) => (
                <NavLink
                key={label}
                href={href}
                icon={icon}
                >
                {label}
                </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col items-center w-72 h-screen bg-[var(--color-dark)] text-white fixed top-0 left-0 z-40 pt-6 px-4 shadow-sm/100">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={210} height={90} />
          </Link>
        </motion.div>
        <div className="mt-25 w-full">
          <nav className="flex flex-col gap-0 w-full">
            {navLinks.map(({ label, href, icon }) => (
              <NavLink key={label} href={href} icon={icon}>
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}