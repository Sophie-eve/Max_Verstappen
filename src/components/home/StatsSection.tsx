"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { DRIVER_STATS } from "@/data/stats";

export const StatsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0E1424]/75 backdrop-blur-[2px] overflow-hidden" aria-label="Career Statistics">
      {/* Background motorsport grid */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FORMULA 1 RECORD BOOK // LIVE TELEMETRY"
          title="CHAMPIONSHIP"
          highlightText="METRICS"
          subtitle="Historic numbers forged through relentless speed, precision pitstops, and tactical supremacy."
        />

        {/* 4 Stat Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVER_STATS.map((stat) => (
            <StatCounter
              key={stat.id}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              description={stat.description}
              highlight={stat.highlight}
            />
          ))}
        </div>

        {/* F1 Verification Notice */}
        <div className="mt-8 text-center text-xs font-mono text-[#8F9CAE]">
          Official FIA driver data verified against{" "}
          <a
            href="https://www.formula1.com/en/drivers/max-verstappen.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC906] hover:underline"
          >
            formula1.com
          </a>{" "}
          (through the 2024 FIA World Championship)
        </div>
      </div>
    </section>
  );
};
