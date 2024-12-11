import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organism/navbar/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Dopamind +",
  description:
    "Dopamind helps you track and enhance your mental wellbeing. Taking care of mental health isn't just a choice. It's an investment in yourself. Every step toward better mental health brings you closer to your best self.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <Navbar />
        <main className="font-figtree">{children}</main>
      </body>
    </html>
  );
}
