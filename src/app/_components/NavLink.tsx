"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export default function NavLink({ href, children, icon }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className="relative group font-heading text-xl block py-5 border-b border-white w-full text-center"
    >
      <div className="flex justify-between items-center w-full px-4 z-10 relative">
        <span className="uppercase text-white transition-colors duration-300 group-hover:text-white">
          {children}
        </span>
        {icon && (
          <span className="ml-2 text-5xl font-bold text-white transition-colors duration-300 group-hover:text-white">
            {icon}
          </span>
        )}
      </div>
      <span
        className={`absolute left-0 top-0 h-full w-0 bg-indigo-950 z-0 transition-all duration-300 group-hover:w-full`}
      />
    </Link>
  );
}
