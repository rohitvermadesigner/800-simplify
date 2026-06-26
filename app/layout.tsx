import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Quicksand } from 'next/font/google';


export const metadata: Metadata = {
  title: "800 Simplify",
  description: "800 Simplify",
   alternates: {
    canonical: 'https://www.800-simplify.com/',
  },
  openGraph: {
    title: "Effective Accounting, Audit, Tax & PRO in UAE | 800-Simplify",
    description:
      "800-Simplify brings efficiency to every number & value to every move with effective accounting, audit & tax, and PRO services for UAE SMEs, driving momentum.",
    url: "https://www.800-simplify.com",
    siteName: "800-Simplify",
    images: [
      {
        url: "/images/fav.ico",
        width: 512,
        height: 512,
        alt: "800-Simplify",
      },
    ],
    type: "website",
  },
};

export const quicksand = Quicksand({
    subsets : ['latin'],
    weight : ['300','400','500','600','700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}