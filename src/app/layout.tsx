import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Erika's Recipes",
  description: "Curated and created by Erika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-pink-200'>
        <Header />
        <ConvexClientProvider>
          <main className='container mt-6'>{children}</main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
