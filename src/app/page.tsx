import React from "react";
import { Hero } from "@/components/home/Hero";
import { BioSection } from "@/components/home/BioSection";
import { ChampionshipShowcase } from "@/components/home/ChampionshipShowcase";
import { RacingSkillsSection } from "@/components/home/RacingSkillsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TeasersSection } from "@/components/home/TeasersSection";
import { NewsletterStrip } from "@/components/home/NewsletterStrip";
import { AngledDivider } from "@/components/ui/AngledDivider";

export default function HomePage() {
  return (
    <div className="relative">
      {/* 1. Full-viewport Hero with Parallax, MicroSlats Ambient WebGL Canvas & Max Photo */}
      <Hero />

      {/* Livery Transition */}
      <AngledDivider direction="skew-left" fillColor="#0A0E1A" hasStripe />

      {/* 2. Short 3-4 line Bio & Origins Narrative */}
      <BioSection />

      {/* Livery Transition */}
      <AngledDivider direction="skew-right" fillColor="#0E1424" hasStripe />

      {/* 3. Deep Dive: The 4 World Championships Showcase */}
      <ChampionshipShowcase />

      {/* Livery Transition */}
      <AngledDivider direction="skew-left" fillColor="#0A0E1A" hasStripe />

      {/* 4. Deep Dive: Racing Skills, Driving Anatomy & Apex Telemetry */}
      <RacingSkillsSection />

      {/* Livery Transition */}
      <AngledDivider direction="skew-right" fillColor="#0E1424" hasStripe />

      {/* 5. Animated Stat Counters from /data/stats.ts */}
      <StatsSection />

      {/* Livery Transition */}
      <AngledDivider direction="skew-left" fillColor="#0A0E1A" hasStripe />

      {/* 6. Career and Garage Teasers linking to dedicated pages */}
      <TeasersSection />

      {/* 7. Compact Newsletter Signup Strip */}
      <NewsletterStrip />
    </div>
  );
}
