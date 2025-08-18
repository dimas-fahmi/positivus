import Hero from "./components/Hero";
import LogoTypes from "./components/LogoTypes";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto">
      {/* Hero Section */}
      <Hero />

      {/* Partners Section */}
      <LogoTypes />

      <div className="h-[1000px]"></div>
    </main>
  );
}
