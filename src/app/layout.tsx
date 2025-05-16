import "~/styles/globals.css";
import ResponsiveSidebar from "./_components/ResponsiveSidebar";
import Footer from "./_components/Footer";
import { Geist } from "next/font/google";
import { type Metadata } from "next";
import Script from "next/script"; // ✅ ADD THIS

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Sharma for Congress",
  description: "Official campaign site for Sid Sharma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen flex flex-col md:flex-row">
        {/* ✅ Twitter script loaded properly */}
        <Script
          async
          src="https://platform.twitter.com/widgets.js"
          strategy="lazyOnload"
        />

        <ResponsiveSidebar />
        <main className="flex-1 md:ml-72">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
