import type { Metadata } from "next";
import "@/src/ui/css/globals.tailwind.css";
import { geistMono, geistSans, spaceGrotesk } from "@/src/ui/fonts";
import NavBar from "@/src/ui/components/NavBar";
import Footer from "@/src/ui/components/Footer";

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
        {/* Font Wrapper */}
        <div className="font-mono">
          {/* NavBar */}
          <NavBar />

          {/* Children */}
          <div className="px-4 lg:px-0 pb-16">{children}</div>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
