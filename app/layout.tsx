import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const QuickSand = localFont({
  src: "./fonts/Quicksand.ttf",
  variable: "--font-quicksand",
  weight: "300 400 500 700 700 900",
});

export const metadata: Metadata = {
  title: "GCK || Testimonies",
  description: "Share your GCK Testimonies with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${QuickSand.variable} font-quicksand antialiased`}>
        {children}
      </body>
    </html>
  );
}
