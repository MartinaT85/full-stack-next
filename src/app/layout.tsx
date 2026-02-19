import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ticketsPath, homePath } from "@/paths";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import clsx from "clsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Road to Next | fullstack",
  description: "Road to Next | fullstack",
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
        <nav className='py-2.5 supports-backdrop-blur:bg-background/60 fixed top-0 left-0 right-0 z-20 border-b bg-background/95 backdrop-blur w-full  mx-auto px-5'>
          <div className='flex justify-between max-w-7xl mx-auto'>
            <Link href={homePath()} className={cn(buttonVariants({ variant: "link" }), "text-md p-0")}>Home</Link>
            <Link href={ticketsPath()} className='underline'>Tickets</Link>
          </div>
        </nav>
        <main className='min-h-screen flex-1 overflow-y-auto overflow-x-hidden py-24 bg-secondary/20 flex flex-col max-w-7xl mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
