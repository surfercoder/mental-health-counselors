import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mental Health Counselor Assistant",
  description: "AI-powered guidance for mental health counselors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <Link href="/" className="font-bold text-xl">
              Counselor Assistant
            </Link>
            <nav className="ml-6 flex gap-4">
              <Link href="/search" className="text-sm font-medium hover:underline">
                Search Transcripts
              </Link>
              <Link href="/guidance" className="text-sm font-medium hover:underline">
                AI Guidance
              </Link>
            </nav>
          </div>
        </header>
        <main className="container py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
