import type { Metadata } from "next";
import "@/src/ui/css/globals.tailwind.css";
import { geistMono, geistSans, spaceGrotesk } from "@/src/ui/fonts";
import NavBar from "@/src/ui/components/NavBar";

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
        className={`${geistSans.variable} ${spaceGrotesk.variable} ${geistMono.variable} antialiased`}
      >
        {/* NavBar */}
        <NavBar />

        {/* Children */}
        {children}

        {/* Footer */}
        <footer></footer>
      </body>
    </html>
  );
}
