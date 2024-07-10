import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/ui/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindcheck",
  description: "Mindcheck is a todolist app",
  openGraph: {
    title: "Welcome on Mindcheck !",
    description: "Your future favorite todo app.",
    type: "article",
    url: "https://mindcheck-afso.vercel.app/",
    images: [
      {
        url: "https://mindcheck-afso.vercel.app/twitter-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome on Mindcheck !",
    description: "Your future favorite todo app.",
    creator: "@valentinafso",
    images: [
      {
        url: "https://mindcheck-afso.vercel.app/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "cover mindcheck",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
