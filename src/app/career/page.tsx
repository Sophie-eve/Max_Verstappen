import React from "react";
import type { Metadata } from "next";
import { CareerCoverHero } from "@/components/career/CareerCoverHero";
import { CareerTimeline } from "@/components/career/CareerTimeline";
import { MilestonesGrid } from "@/components/career/MilestonesGrid";
import { DriversStandings } from "@/components/standings/DriversStandings";
import { AngledDivider } from "@/components/ui/AngledDivider";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Timeline & Records | Max Verstappen #1",
  description:
    "Explore Max Verstappen's journey: karting prodigy, 2016 Spain maiden win, 4x World Championships, 2026 Drivers Standings, and historic Formula 1 records.",
};

export default function CareerPage() {
  return (
    <div className="relative pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Coverpage Hero with Uploaded Trophy Photo */}
        <CareerCoverHero />
      </div>

      {/* 2. 2026 Drivers' Championship Standings (All 26 Drivers) */}
      <DriversStandings />

      {/* Livery Transition */}
      <AngledDivider direction="skew-left" fillColor="#0A0E1A" hasStripe />

      {/* 3. Interactive Vertical Career Timeline */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-display uppercase tracking-wide text-white">
            CHRONOLOGICAL CAREER MILESTONES
          </h2>
          <p className="mt-2 text-sm text-[#8F9CAE]">
            Trace every pivotal moment from junior karting to his historic fourth world title.
          </p>
        </div>
        <CareerTimeline />
      </div>

      {/* Livery Transition */}
      <AngledDivider direction="skew-right" fillColor="#0E1424" hasStripe />

      {/* 4. Records & Milestones Grid */}
      <MilestonesGrid />

      {/* Transition and Garage CTA */}
      <div className="bg-[#0A0E1A]/75 backdrop-blur-[2px] py-16 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display uppercase tracking-wide text-white">
            READY TO INSPECT THE MACHINERY?
          </h2>
          <p className="mt-2 text-sm text-[#8F9CAE]">
            Step inside the Oracle Red Bull Racing garage to explore the technical telemetry of the RB20.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button
              href="/garage"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Step Into The Garage
            </Button>
            <Button
              href="/pit-wall"
              variant="secondary"
              size="lg"
            >
              Join The Max Army
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
