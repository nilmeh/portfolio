import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niloy Meharchandani - Portfolio",
  description: "Computer Science student at UCLA building innovative software solutions and exploring the intersection of technology, research, and entrepreneurship.",
  keywords: ["Niloy Meharchandani", "UCLA", "Computer Science", "Software Developer", "Portfolio", "React", "Next.js", "iOS Development"],
  authors: [{ name: "Niloy Meharchandani" }],
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Niloy Meharchandani - Portfolio",
    description: "Computer Science student at UCLA building innovative software solutions",
    url: "https://niloymeharchandani.com",
    siteName: "Niloy Meharchandani Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niloy Meharchandani - Portfolio",
    description: "Computer Science student at UCLA building innovative software solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
