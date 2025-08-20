"use client";

import { Testimony } from "@/app/components/Testimonials";
import React from "react";
import { motion } from "motion/react";

export interface TestimonyCardProps {
  data: Testimony;
  activeIndex: number;
  index: number;
}

const TestimonyCard = ({ data, activeIndex, index }: TestimonyCardProps) => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={index === activeIndex + 1 ? { scale: 1 } : { scale: 0.9 }}
      transition={{
        duration: 0.3,
      }}
      className={`min-w-[80vw] md:min-w-[50vw] p-4 snap-center space-y-4`}
    >
      {/* Testimony Card */}
      <div
        className={`${
          index === activeIndex + 1 ? "border-primary-background" : ""
        } border-[1px_1px_7px_1px] p-6 rounded-4xl`}
      >
        {data.testimony}
      </div>

      {/* Info Card */}
      <div className="flex flex-col gap-1">
        <span className="font-bold text-lg text-primary-background">
          {data.name} {data.id}
        </span>
        <span className="text-sm">{data.about}</span>
      </div>
    </motion.div>
  );
};

export default TestimonyCard;
