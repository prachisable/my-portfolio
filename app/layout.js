import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google"; // this works in Next.js 14+

import "./globals.css";

// Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadataBase = new URL("https://prachi-sable.vercel.app");

export const metadata = {
  title: "Prachi Sable – Portfolio",
  description:
    "Portfolio and resume of Prachi Sable: Software Engineer specializing in Frontend, React, Next.js and more.",
  icons: {
    icon: "/favicon.ico", // use relative path under /public
  },
  openGraph: {
    title: "Prachi Sable – Portfolio",
    description:
      "Portfolio and resume of Prachi Sable: Software Engineer specializing in Frontend, React, Next.js and more.",
    url: "https://prachi-sable.vercel.app/",
    siteName: "Prachi Sable Portfolio",
    images: [
      {
        url: "https://prachi-sable.vercel.app/prachi1.png",
        width: 600,
        height: 600,
        alt: "Prachi Sable Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prachi Sable – Portfolio",
    description:
      "Portfolio and resume of Prachi Sable: Software Engineer specializing in Frontend, React, Next.js and more.",
    images: ["/prachi1.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
