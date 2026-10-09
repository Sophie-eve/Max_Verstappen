import React from "react";
import type { Metadata } from "next";
import { CarShowcase } from "@/components/garage/CarShowcase";
import { TeamSection } from "@/components/garage/TeamSection";
import { AngledDivider } from "@/components/ui/AngledDivider";
import { Button } from "@/components/ui/Button";
import { Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Garage & RB20 Specs | Max Verstappen #1",
  description:
    "Explore the Oracle Red Bull Racing RB20 engineering specs: 1,000+ BHP Honda power unit, 352+ km/h speed, Venturi floor aerodynamics, and the team behind Max.",
};

export default function GaragePage() {
  return (
    <div className="relative pt-28 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121829] border border-white/10 rounded-sm mb-4">
          <Wrench className="w-3.5 h-3.5 text-[#FFC906]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906]">
            FACTORY TELEMETRY // ORACLE RED BULL RACING
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
          THE MACHINE: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">RB20 SPEC</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[#8F9CAE] max-w-2xl mx-auto font-sans">
          Engineered for relentless aerodynamic downforce and instantaneous hybrid power. Explore the technical anatomy of championship-winning Formula 1 machinery.
        </p>

        <div className="mt-6 h-[3px] w-24 racing-stripe-accent mx-auto" />
      </div>

      {/* 1. Interactive Car Showcase & Specs */}
      <CarShowcase />

      {/* Divider */}
      <AngledDivider direction="skew-right" fillColor="#0E1424" hasStripe />

      {/* 2. Inside the Team Section */}
      <TeamSection />

      {/* Fan Callout */}
      <div className="bg-[#0A0E1A]/75 backdrop-blur-[2px] py-16 border-t border-white/10 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-display uppercase tracking-wide text-white">
            JOIN THE MAX ARMY ON THE PIT WALL
          </h2>
          <p className="mt-2 text-sm text-[#8F9CAE]">
            Submit your fan registration, vote for your favourite Max moment, and send a direct message.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              href="/pit-wall"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Enter The Fan Zone
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
