"use client";

import SectionHeader from "@/src/ui/components/SectionHeader";
import TestimonyCard from "@/src/ui/components/TestimonyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 0,
    name: "Jhon Smith",
    about: "Marketing director at XYZ",
    testimony:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 1,
    name: "Jane Doe",
    about: "CEO at ABC",
    testimony:
      "We chose Positivus to help us with our SEO and PPC campaigns and have been very impressed with their results. They are knowledgeable, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 2,
    name: "Alice Jhonson",
    about: "Owner at 123",
    testimony:
      "I recently started working with Positivus and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
  },
  {
    id: 3,
    name: "Jajang Nudrjaman",
    about: "Owner at Sankuriang Maskun",
    testimony:
      "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 4,
    name: "Bob Brown",
    about: "Director at ICC",
    testimony:
      "Positivus has been a great partner for our company. They are knowledgeable, responsive, and truly care about the success of our business. We have seen a significant increase in website traffic and leads as a result of their efforts. I highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    id: 5,
    name: "Sarah Williamson",
    about: "Marketing director at Jonas & Julie",
    testimony:
      "I have been working with Positivus for the past year and have been very impressed with their professionalism and expertise. They have helped me increase my online visibility and generate more leads for my business. I highly recommend Positivus to anyone looking to improve their online marketing strategy.",
  },
];

export interface Testimony {
  id: number;
  name: string;
  about: string;
  testimony: string;
}

const Testimonials = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // extended data (clone first + last)
  const extendedData = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [virtualIndex, setVirtualIndex] = useState(1); // start at first real card

  const move = (direction: "next" | "prev") => {
    setVirtualIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
  };

  // slide whenever virtualIndex changes
  useEffect(() => {
    if (!wrapperRef.current) return;
    const cardWidth = wrapperRef.current.firstElementChild?.scrollWidth || 0;

    wrapperRef.current.scrollTo({
      left: cardWidth * virtualIndex,
      behavior: "smooth",
    });
  }, [virtualIndex]);

  // handle snapping after smooth scroll ends
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const cardWidth = wrapper.firstElementChild?.scrollWidth || 0;

    const handleSnap = () => {
      if (virtualIndex === 0) {
        // snap from first clone -> last real
        wrapper.scrollTo({
          left: cardWidth * testimonials.length,
          behavior: "instant",
        });

        setVirtualIndex(testimonials.length);
      } else if (virtualIndex === testimonials.length + 1) {
        // snap from last clone -> first real
        wrapper.scrollTo({
          left: cardWidth * 1,
          behavior: "instant",
        });

        setVirtualIndex(1);
      }
    };

    wrapper.addEventListener("scrollend", handleSnap);
    return () => wrapper.removeEventListener("scrollend", handleSnap);
  }, [virtualIndex]);

  const realIndex = virtualIndex - 1; // adjust for clone

  return (
    <section id="testimonials" className="mb-16">
      {/* Header */}
      <SectionHeader
        header="Testimonials"
        subtitle="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        className="mb-11"
      />

      {/* Testimonials Container */}
      <div className="bg-secondary-background text-secondary-foreground py-16 rounded-4xl">
        {/* Cards Wrapper */}
        <div
          ref={wrapperRef}
          className="flex overflow-x-scroll gap-4 snap-x scrollbar-none mb-16"
        >
          {extendedData.map((item, index) => (
            <TestimonyCard
              key={index}
              activeIndex={realIndex}
              data={item}
              index={index}
            />
          ))}
        </div>

        {/* Controller */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => move("prev")}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>

          {/* Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`${
                  index === realIndex
                    ? "bg-primary-background"
                    : "bg-tertiary-background"
                } min-w-4 min-h-4 rounded-full`}
              />
            ))}
          </div>

          <button onClick={() => move("next")} aria-label="Next testimonial">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
