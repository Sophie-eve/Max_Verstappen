"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { DRIVER_STATS, TODAYS_STATS } from "@/data/stats";
import { Trophy, Flag, Zap, CloudRain, ShieldCheck, Activity, Award } from "lucide-react";

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

        {/* TODAY'S STATS // LIVE TELEMETRY HERO SPOTLIGHT */}
        <div className="mb-12 rounded-sm border-2 border-[#DB0A40] bg-gradient-to-r from-[#1A0C16] via-[#151D33] to-[#10172A] shadow-[0_15px_50px_rgba(219,10,64,0.35)] overflow-hidden">
          {/* Top Bar with Live Indicator */}
          <div className="px-6 py-3 bg-[#0D1220] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB0A40] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DB0A40]" />
              </span>
              <span className="text-[#FFC906] font-bold tracking-widest uppercase">
                TODAY&apos;S RACE TELEMETRY // {TODAYS_STATS.date.toUpperCase()}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[#8F9CAE]">
              <span className="flex items-center gap-1.5 text-white font-semibold">
                <CloudRain className="w-3.5 h-3.5 text-[#FF6A13]" />
                {TODAYS_STATS.weatherConditions}
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                LIVE AUDITED
              </span>
            </div>
          </div>

          {/* Main Today's Summary */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Event Title & Highlights */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-xs bg-[#DB0A40] text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-md">
                    <Trophy className="w-3.5 h-3.5 text-[#FFC906]" strokeWidth={2.2} />
                    {TODAYS_STATS.sprintResult.status}
                  </span>
                  <span className="px-2.5 py-1 rounded-xs bg-white/5 border border-white/10 text-white font-mono text-xs uppercase tracking-wider">
                    {TODAYS_STATS.event}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-white leading-tight">
                  {TODAYS_STATS.sprintResult.headline}
                </h3>

                <p className="text-sm sm:text-base text-[#8F9CAE] font-sans leading-relaxed">
                  {TODAYS_STATS.sprintResult.summary}
                </p>

                {/* Qualifying note for Sunday */}
                <div className="p-3.5 rounded-sm bg-[#0D1220] border-l-4 border-[#FFC906] text-xs font-mono text-[#F5F7FA]">
                  <div className="flex items-center gap-2 text-[#FFC906] font-bold mb-1">
                    <Flag className="w-3.5 h-3.5" />
                    <span>SUNDAY GP QUALIFYING RESULT (TODAY):</span>
                  </div>
                  <p className="text-[#8F9CAE]">
                    {TODAYS_STATS.qualifyingResult.summary} (Grid: <strong className="text-white">{TODAYS_STATS.qualifyingResult.gridSlot}</strong>)
                  </p>
                </div>
              </div>

              {/* Right Column: Key Today's Delta Metrics */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
                {/* Points Today */}
                <div className="p-4 rounded-sm bg-[#0D1220] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F9CAE]">
                    Points Today
                  </div>
                  <div className="text-3xl sm:text-4xl font-display text-emerald-400 mt-1">
                    +{TODAYS_STATS.todayPointsEarned}
                  </div>
                  <div className="text-[11px] font-mono text-[#8F9CAE] mt-0.5">
                    Sprint Winner
                  </div>
                </div>

                {/* Total Sprint Wins */}
                <div className="p-4 rounded-sm bg-[#0D1220] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F9CAE]">
                    Sprint Wins
                  </div>
                  <div className="text-3xl sm:text-4xl font-display text-[#DB0A40] mt-1">
                    {TODAYS_STATS.totalSprintWins}
                  </div>
                  <div className="text-[11px] font-mono text-[#8F9CAE] mt-0.5">
                    All-Time F1 Record
                  </div>
                </div>

                {/* Updated Career Points */}
                <div className="p-4 rounded-sm bg-[#0D1220] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F9CAE]">
                    Career Points
                  </div>
                  <div className="text-2xl sm:text-3xl font-display text-[#FFC906] mt-1">
                    {TODAYS_STATS.newCareerPoints}
                  </div>
                  <div className="text-[11px] font-mono text-[#8F9CAE] mt-0.5">
                    Updated Live
                  </div>
                </div>

                {/* GP Grid Slot */}
                <div className="p-4 rounded-sm bg-[#0D1220] border border-white/10 text-center">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#8F9CAE]">
                    Sunday Grid
                  </div>
                  <div className="text-3xl sm:text-4xl font-display text-white mt-1">
                    P2
                  </div>
                  <div className="text-[11px] font-mono text-[#8F9CAE] mt-0.5">
                    Front Row Start
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Stat Counter Cards Grid */}
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
        <div className="mt-10 text-center text-xs font-mono text-[#8F9CAE]">
          Official FIA driver data verified against{" "}
          <a
            href="https://www.formula1.com/en/drivers/max-verstappen.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFC906] hover:underline font-semibold"
          >
            formula1.com
          </a>{" "}
          (Fully audited through October 10, 2026 • 2026 Singapore Grand Prix Sprint)
        </div>
      </div>
    </section>
  );
};
