"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Trophy, Flag, Gauge, Sparkles, CheckCircle2, Flame } from "lucide-react";

interface ChampionshipSeason {
  year: string;
  subtitle: string;
  car: string;
  engine: string;
  wins: number;
  poles: number;
  podiums: number;
  points: number;
  clinchedAt: string;
  definingMoment: string;
  narrative: string;
  recordsSet: string[];
}

const CHAMPIONSHIPS: ChampionshipSeason[] = [
  {
    year: "2021",
    subtitle: "THE MAIDEN TITLE // LAST LAP SHOWDOWN",
    car: "Red Bull Racing RB16B",
    engine: "Honda RA621H 1.6L V6 Turbo",
    wins: 10,
    poles: 10,
    podiums: 18,
    points: 395.5,
    clinchedAt: "Abu Dhabi GP (Yas Marina Circuit)",
    definingMoment: "Turn 5 Final Lap Overtake on Lewis Hamilton",
    narrative: "An epic, season-long clash of titans against 7-time World Champion Lewis Hamilton. Across 22 breathless rounds, Max pushed himself and the RB16B to the absolute physical edge, claiming 10 victories and breaking Mercedes' 7-year championship stranglehold with an unforgettable final-lap showdown at Yas Marina.",
    recordsSet: [
      "First Dutch Formula One World Champion",
      "Most podium finishes in a single season (18)",
      "Ended Mercedes' 7-year consecutive drivers' reign",
    ],
  },
  {
    year: "2022",
    subtitle: "GROUND EFFECT REVOLUTION // RECORD SHATTERER",
    car: "Oracle Red Bull Racing RB18",
    engine: "Red Bull Powertrains RBPTH001",
    wins: 15,
    poles: 7,
    podiums: 17,
    points: 454,
    clinchedAt: "Japanese GP (Suzuka Circuit)",
    definingMoment: "Winning from 14th on the grid at Spa-Francorchamps",
    narrative: "F1 unveiled sweeping new ground-effect technical regulations, and Max transformed them into his personal playground. After early reliability hiccups, he unleashed a ruthless campaign of 15 victories—surpassing the legendary 13-win records of Michael Schumacher and Sebastian Vettel.",
    recordsSet: [
      "Most race wins in a single season (15)",
      "Most points scored in a single season (454)",
      "Championship won with 4 races remaining",
    ],
  },
  {
    year: "2023",
    subtitle: "THE UNTOUCHABLE DYNASTY // HISTORIC APEX",
    car: "Oracle Red Bull Racing RB19",
    engine: "Honda RBPT RBPTH002",
    wins: 19,
    poles: 12,
    podiums: 21,
    points: 575,
    clinchedAt: "Qatar GP (Lusail Circuit)",
    definingMoment: "Record 10th consecutive Grand Prix win at Monza",
    narrative: "The single most dominant season in the 74-year history of Formula 1. Piloting Adrian Newey's aerodynamic masterpiece RB19, Max dismantled every existing record: 10 consecutive victories, 19 wins out of 22 rounds (86.4% win rate), and leading over 1,000 racing laps. Perfection made manifest.",
    recordsSet: [
      "10 consecutive race wins (surpassing Vettel's 9)",
      "86.4% win percentage (highest in F1 history, beating Ascari 1952)",
      "First driver to lead 1,003 laps in a single calendar year",
      "Most points in history (575 pts, 290 pts ahead of P2)",
    ],
  },
  {
    year: "2024",
    subtitle: "THE FOUR-PEAT // RESILIENCE & RAW SPEED",
    car: "Oracle Red Bull Racing RB20",
    engine: "Honda RBPT RBPTH002",
    wins: 9,
    poles: 8,
    podiums: 14,
    points: 437,
    clinchedAt: "Las Vegas GP (Las Vegas Strip Circuit)",
    definingMoment: "Miraculous rain drive from P17 to P1 at Interlagos, Brazil",
    narrative: "As McLaren, Ferrari, and Mercedes brought fierce upgrades and closed the car performance gap, Max's champion pedigree shone brighter than ever. When the car wasn't dominant, his racecraft was. His masterclass from 17th on the grid in biblical rain at Sao Paulo sealed his place alongside Prost, Vettel, and Fangio with his fourth consecutive world crown.",
    recordsSet: [
      "4th consecutive World Championship title",
      "Won from 17th on the grid in wet Brazil (setting 17 fastest laps)",
      "Joined elite club of drivers with 4+ World Championships",
    ],
  },
];

export const ChampionshipShowcase: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");

  const currentSeason =
    CHAMPIONSHIPS.find((c) => c.year === selectedYear) || CHAMPIONSHIPS[2];

  return (
    <section className="relative py-24 bg-[#0E1424]/75 backdrop-blur-[2px] overflow-hidden" aria-label="Four World Championships">
      {/* Carbon pattern texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-35 pointer-events-none" />

      {/* Atmospheric glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#FFC906]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE CROWNS // 4 CONSECUTIVE TITLES"
          title="THE ERA OF"
          highlightText="DOMINANCE"
          subtitle="Explore the four consecutive FIA Formula One World Championship seasons that elevated Max Verstappen into the pantheon of motorsport immortals."
        />

        {/* Championship Year Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {CHAMPIONSHIPS.map((season) => {
            const isSelected = season.year === selectedYear;
            return (
              <button
                key={season.year}
                type="button"
                onClick={() => setSelectedYear(season.year)}
                className={`p-4 rounded-sm border transition-all duration-300 text-center cursor-pointer flex flex-col items-center justify-center group ${
                  isSelected
                    ? "bg-[#151D33] border-[#FFC906] shadow-[0_0_25px_rgba(255,201,6,0.3)] scale-[1.02]"
                    : "bg-[#121829] border-white/10 hover:border-white/20 hover:bg-[#151D33]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`p-1 rounded-sm border ${isSelected ? "bg-[#FFC906]/20 border-[#FFC906]/50 text-[#FFC906]" : "bg-black/30 border-white/10 text-[#8F9CAE]"}`}>
                    <Trophy className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF6A13] font-semibold">
                    TITLE #{season.year === "2021" ? "1" : season.year === "2022" ? "2" : season.year === "2023" ? "3" : "4"}
                  </span>
                </div>
                <span className="text-3xl sm:text-4xl font-display uppercase tracking-wider text-white group-hover:text-[#FFC906] transition-colors">
                  {season.year}
                </span>
                <span className="text-[11px] font-mono text-[#8F9CAE] mt-1">
                  {season.wins} Wins • {season.points} Pts
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Championship Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSeason.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <Card
              accentBorder="racing"
              className="p-6 sm:p-10 bg-[#121829] shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left 7 Columns: Story, Car, and Records */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DB0A40]/15 border border-[#DB0A40]/40 rounded-sm mb-3 shadow-[0_0_12px_rgba(219,10,64,0.15)]">
                      <span className="p-0.5 rounded-xs bg-[#FFC906]/20 text-[#FFC906]">
                        <Flame className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906]">
                        {currentSeason.subtitle}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-white">
                      THE {currentSeason.year} WORLD CHAMPIONSHIP
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8F9CAE]">
                      <span>Machinery: <strong className="text-white">{currentSeason.car}</strong></span>
                      <span>•</span>
                      <span>Clinched: <strong className="text-[#FFC906]">{currentSeason.clinchedAt}</strong></span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#8F9CAE] font-sans leading-relaxed">
                    {currentSeason.narrative}
                  </p>

                  {/* Defining Moment Highlight Box */}
                  <div className="p-4 rounded-sm bg-[#151D33] border-l-4 border-[#FF6A13]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6A13] block font-semibold">
                      DEFINING RACE MOMENT
                    </span>
                    <p className="font-display text-lg uppercase text-white mt-1">
                      {currentSeason.definingMoment}
                    </p>
                  </div>

                  {/* Records Shattered */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#F5F7FA] mb-3 flex items-center gap-2">
                      <span className="p-1 rounded-xs bg-[#FFC906]/15 border border-[#FFC906]/30 text-[#FFC906] flex items-center justify-center">
                        <Sparkles className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                      <span>RECORDS SHATTERED THAT SEASON:</span>
                    </h4>
                    <ul className="space-y-2">
                      {currentSeason.recordsSet.map((record, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F7FA]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.2} />
                          <span>{record}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right 5 Columns: Season Telemetry Box */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-[#151D33] p-6 rounded-sm border border-white/10 shadow-inner space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906]">
                        SEASON TELEMETRY
                      </span>
                      <span className="text-xs font-mono text-white/50">FIA CHAMPION</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {/* Wins */}
                      <div className="p-4 rounded-sm bg-[#0D1220] border border-white/5">
                        <div className="text-xs font-mono text-[#8F9CAE] uppercase">
                          Race Victories
                        </div>
                        <div className="text-4xl font-display uppercase text-[#DB0A40] mt-1">
                          {currentSeason.wins}
                        </div>
                        <div className="text-[10px] font-mono text-white/40 mt-1">
                          Grand Prix Wins
                        </div>
                      </div>

                      {/* Poles */}
                      <div className="p-4 rounded-sm bg-[#0D1220] border border-white/5">
                        <div className="text-xs font-mono text-[#8F9CAE] uppercase">
                          Pole Positions
                        </div>
                        <div className="text-4xl font-display uppercase text-[#FF6A13] mt-1">
                          {currentSeason.poles}
                        </div>
                        <div className="text-[10px] font-mono text-white/40 mt-1">
                          P1 Qualifying Starts
                        </div>
                      </div>

                      {/* Podiums */}
                      <div className="p-4 rounded-sm bg-[#0D1220] border border-white/5">
                        <div className="text-xs font-mono text-[#8F9CAE] uppercase">
                          Podium Finishes
                        </div>
                        <div className="text-4xl font-display uppercase text-[#FFC906] mt-1">
                          {currentSeason.podiums}
                        </div>
                        <div className="text-[10px] font-mono text-white/40 mt-1">
                          Top-3 Finishes
                        </div>
                      </div>

                      {/* Points */}
                      <div className="p-4 rounded-sm bg-[#0D1220] border border-white/5">
                        <div className="text-xs font-mono text-[#8F9CAE] uppercase">
                          Championship Pts
                        </div>
                        <div className="text-4xl font-display uppercase text-white mt-1">
                          {currentSeason.points}
                        </div>
                        <div className="text-[10px] font-mono text-white/40 mt-1">
                          Total Drivers&apos; Points
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 text-center text-xs font-mono text-[#8F9CAE]">
                      Championship Status: <span className="text-emerald-400 font-bold">1ST (CHAMPION)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
