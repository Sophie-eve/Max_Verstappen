import React from "react";
import type { Metadata } from "next";
import { FanSignupForm } from "@/components/pitwall/FanSignupForm";
import { Card } from "@/components/ui/Card";
import { Radio, Shield, Sparkles, Database, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "The Pit Wall / Fan Zone | Max Verstappen #1",
  description:
    "Join the Max Verstappen fan grid. Register your credentials, vote for your favourite championship moments, and send a direct message to the pit wall.",
};

export default function PitWallPage() {
  return (
    <div className="relative pt-28 pb-20">
      {/* Background carbon styling */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center pt-8 pb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121829] border border-white/10 rounded-sm mb-4">
            <Radio className="w-3.5 h-3.5 text-[#DB0A40] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906]">
              PIT WALL TELEMETRY // FAN ZONE
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display uppercase tracking-tight text-white">
            JOIN THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">GRID</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#8F9CAE] font-sans">
            Secure your spot in the Max Army. Cast your vote for Max&apos;s greatest racecraft moments and transmit your personal message directly to our community archive.
          </p>

          <div className="mt-6 h-[3px] w-24 racing-stripe-accent mx-auto" />
        </div>

        {/* 1. Core Working Form */}
        <FanSignupForm />

        {/* 2. Security & Fan Information Pillars */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card accentBorder="none" className="p-6 bg-[#121829]">
            <div className="p-2.5 rounded-sm bg-white/5 w-fit mb-3">
              <Shield className="w-5 h-5 text-[#FFC906]" />
            </div>
            <h2 className="font-display text-lg uppercase tracking-wider text-white">
              Data Privacy
            </h2>
            <p className="mt-2 text-xs text-[#8F9CAE] font-sans leading-relaxed">
              Your fan information is securely encrypted. We value driver privacy and ensure your details are never sold or shared.
            </p>
          </Card>

          <Card accentBorder="none" className="p-6 bg-[#121829]">
            <div className="p-2.5 rounded-sm bg-white/5 w-fit mb-3">
              <Sparkles className="w-5 h-5 text-[#DB0A40]" />
            </div>
            <h2 className="font-display text-lg uppercase tracking-wider text-white">
              Direct Fan Bulletins
            </h2>
            <p className="mt-2 text-xs text-[#8F9CAE] font-sans leading-relaxed">
              Receive curated Grand Prix debriefs, qualifying analysis, telemetry insights, and championship memorabilia announcements.
            </p>
          </Card>

          <Card accentBorder="none" className="p-6 bg-[#121829]">
            <div className="p-2.5 rounded-sm bg-white/5 w-fit mb-3">
              <Trophy className="w-5 h-5 text-[#FF6A13]" />
            </div>
            <h2 className="font-display text-lg uppercase tracking-wider text-white">
              Iconic Moments Tally
            </h2>
            <p className="mt-2 text-xs text-[#8F9CAE] font-sans leading-relaxed">
              Your votes actively shape our fan grid highlights, spotlighting defining drives from Barcelona 2016 to the torrential rain in Brazil.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
