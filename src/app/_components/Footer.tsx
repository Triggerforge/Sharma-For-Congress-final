'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 p-4 space-y-2">
      <p className="text-xs text-gray-700">Paid for by Sharma for Congress</p>
      <p>
        © {new Date().getFullYear()} SHARMA FOR CONGRESS. All rights reserved.
      </p>
      <Link href="/privacy-policy" className="underline hover:text-gray-700">
        Privacy Policy
      </Link>
    </footer>
  );
}