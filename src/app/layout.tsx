import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/ui/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mindcheck",
  description: "Mindcheck is a todolist app",
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
