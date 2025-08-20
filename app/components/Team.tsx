import Button from "@/src/ui/components/Button";
import SectionHeader from "@/src/ui/components/SectionHeader";
import TeamCard from "@/src/ui/components/TeamCard";
import React from "react";

const teamMembers = [
  {
    name: "Jhon Doe",
    position: "CEO and Founder",
    about:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/resources/images/pexels-kaleef-lawal-1481864847-27897903.jpg",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    about:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/resources/images/pexels-minan1398-654696.jpg",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    about:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/resources/images/pexels-kevinbidwell-2380794.jpg",
  },
  {
    name: "Emily Jhonson",
    position: "PPC Manager",
    about:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/resources/images/pexels-doquyen-1520760.jpg",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    about:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/resources/images/pexels-mwabonje-2033287.jpg",
  },
  {
    name: "Ricardo Santanna",
    position: "Content Creator",
    about:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/resources/images/pexels-ricardosantanna-28408585.jpg",
  },
];

const Team = () => {
  return (
    <section id="team" className="mb-16">
      {/* Header */}
      <SectionHeader
        header="Our Team"
        subtitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
        className="mb-11"
      />

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-11">
        {teamMembers.map((team, index) => (
          <TeamCard
            key={index}
            about={team.about}
            image={team.image}
            name={team.name}
            position={team.name}
          />
        ))}
      </div>

      {/* See All Team Button */}
      <Button variant={"negative"} className="block ms-auto">
        See All Team
      </Button>
    </section>
  );
};

export default Team;
