import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Musiur Alam Opu",
  description: "Software Engineer | JavaScript | TypeScript | React | Next.js | Tailwind CSS | Node.js | Express | MongoDB | PostgreSQL | Git | GitHub | Docker | AWS | Figma",
  keywords: "Musiur Alam Opu, Musiur, Opu, Software Engineer, JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, PostgreSQL, Git, GitHub, Docker, AWS, Figma",
  authors: [{ name: "Musiur Alam Opu", url: "https://musiur.com" }],
  creator: "Musiur Alam Opu",
  publisher: "Musiur Alam Opu",
  robots: "follow, index",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          <main className="min-h-[90dvh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
