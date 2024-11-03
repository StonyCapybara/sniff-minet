import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "Sniff",
  description: "Sniff",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Loading />
        <Navbar />
        {children}
      </body>
    </html>
  );
}