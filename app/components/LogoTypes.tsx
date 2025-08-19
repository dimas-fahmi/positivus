import Image from "next/image";
import React from "react";

const partners = {
  Netflix: {
    label: "Netflix",
    alt: "Netflix Logo",
    src: "/resources/logos/Netflix.png",
  },
  Amazon: {
    label: "Amazon",
    alt: "Amazon Logo",
    src: "/resources/logos/Amazon.png",
  },
  Dribble: {
    label: "Dribble",
    alt: "Dribble Logo",
    src: "/resources/logos/Dribble.png",
  },
  HubSpot: {
    label: "HubSpot",
    alt: "HubSpot Logo",
    src: "/resources/logos/HubSpot.png",
  },
  Notion: {
    label: "Notion",
    alt: "Notion Logo",
    src: "/resources/logos/Notion.png",
  },
  Zoom: {
    label: "Zoom",
    alt: "Zoom Logo",
    src: "/resources/logos/Zoom.png",
  },
};

const LogoContainer = ({ partner }: { partner: keyof typeof partners }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        width={100}
        height={100}
        src={partners[partner].src}
        alt={partners[partner].alt}
        className="saturate-0 transition-all duration-300 hover:saturate-100 opacity-50 hover:opacity-100"
      />
    </div>
  );
};

const LogoTypes = () => {
  return (
    <section
      id="LogoTypes"
      className="grid grid-cols-3 md:grid-cols-6 mb-16 gap-4"
    >
      {Object.keys(partners).map((partner) => (
        <LogoContainer
          key={partner}
          partner={partner as keyof typeof partners}
        />
      ))}
    </section>
  );
};

export default LogoTypes;
