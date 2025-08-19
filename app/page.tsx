import CaseStudies from "./components/CaseStudies";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import LogoTypes from "./components/LogoTypes";
import Services from "./components/Services";
import WorkingProcess from "./components/WorkingProcess";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto space-y-6">
      {/* Hero Section */}
      <Hero />

      {/* Partners Section */}
      <LogoTypes />

      {/* Services Section */}
      <Services />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Working Process */}
      <WorkingProcess />

      <div className="h-[1000px]"></div>
    </main>
  );
}
