import type { Metadata } from "next";
import "@/src/ui/css/globals.tailwind.css";
import { geistMono, geistSans } from "@/src/ui/fonts";

export const metadata: Metadata = {
  title: "Positivus",
  description: "A modern, minimalistic, and fast blogging platform.",
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
        {children}
      </body>
    </html>
  );
}
