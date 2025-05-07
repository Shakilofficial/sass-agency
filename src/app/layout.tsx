import Provider from "@/provider";
import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrbitEdge – Elevate Your Digital Presence",
  description:
    "OrbitEdge is a forward-thinking digital solutions provider, crafting elegant, performant websites and applications for modern brands. Book a call with us to launch your next big idea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable}  antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
