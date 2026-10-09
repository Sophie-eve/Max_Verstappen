"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import {
  Compass,
  Zap,
  CloudRain,
  Radio,
  Gauge,
  Activity,
  CheckCircle,
} from "lucide-react";

interface SkillPillar {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  detailedAnalysis: string;
  telemetryMetric: string;
  icon: React.ReactNode;
  iconColor: string;
  definingRace: string;
}

const RACING_SKILLS: SkillPillar[] = [
  {
    id: "front-end",
    title: "Knife-Edge Front-End Bite & Rotation",
    badge: "AERODYNAMIC SENSITIVITY",
    shortDesc: "Demands an ultra-pointed front axle that rotates immediately on turn-in, managing extreme oversteer that leaves teammates adrift.",
    detailedAnalysis: "Most F1 drivers cannot cope with a loose rear end because an unstable rear induces sudden snaps. Max possesses superhuman reaction times (measured under 140ms), allowing him to run a hyper-aggressive front-downforce bias. The moment he turns the wheel, the front clings to the asphalt while he actively catches micro-slides through throttle control.",
    telemetryMetric: "Turn-In Responsiveness: +14% faster car yaw angle rotation",
    icon: <Zap className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
    iconColor: "text-[#FFC906]",
    definingRace: "Austrian GP 2019 & Dutch GP 2021",
  },
  {
    id: "braking",
    title: "Surgical Trail-Braking & V-Shaped Lines",
    badge: "BRAKING GEOMETRY",
    shortDesc: "Braking later than any rival in a straight line, bleeding off hydraulic pressure smoothly to apex, then straightening the wheel early.",
    detailedAnalysis: "Most F1 drivers cannot cope with a loose rear end because an unstable rear induces sudden snaps. Max possesses superhuman reaction times (measured under 140ms), allowing him to run a hyper-aggressive front-downforce bias. The moment he turns the wheel, the front clings to the asphalt while he actively catches micro-slides through throttle control.",
    telemetryMetric: "Throttle Application: 100% full throttle reached 18m earlier",
    icon: <Compass className="w-5 h-5 text-[#DB0A40]" strokeWidth={2.2} />,
    iconColor: "text-[#DB0A40]",
    definingRace: "Monza 2023 & Spa-Francorchamps 2022",
  },
  {
    id: "wet-weather",
    title: "Sensory Wet-Weather Grip Cartography",
    badge: "RAIN MASTERCLASS",
    shortDesc: "Finding grip where others slide off. Instinctively mapping unconventional rain lines away from polished rubber.",
    detailedAnalysis: "In biblical torrential rain, the standard rubbered racing line becomes an ice rink. Max abandons the conventional line entirely, hunting for coarse tarmac on the extreme outside edges, riding painted white lines with inverted camber, and reading micro-variations in standing water through the steering column before aquaplaning can take hold.",
    telemetryMetric: "17 Consecutive Fastest Laps from P17 in torrential rain",
    icon: <CloudRain className="w-5 h-5 text-[#FF6A13]" strokeWidth={2.2} />,
    iconColor: "text-[#FF6A13]",
    definingRace: "Brazil 2016 (3rd from 16th) & Brazil 2024 (P17 to P1)",
  },
  {
    id: "tire-thermal",
    title: "Subconscious Tire Thermal Equilibrium",
    badge: "PIRELLI MASTERY",
    shortDesc: "Setting qualifying-pace lap times for 30 consecutive laps without exceeding the critical 105°C tire temperature threshold.",
    detailedAnalysis: "Modern Pirelli Formula 1 tires suffer rapid thermal degradation if slid even a fraction of a degree over their optimal operating window. Max manages surface tread temperature and inner carcass pressure simultaneously through subtle steering angles, eliminating tire graining while extending stint life beyond predicted pit stop windows.",
    telemetryMetric: "Stint Degradation: 0.038s per lap lower than field median",
    icon: <Gauge className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
    iconColor: "text-[#FFC906]",
    definingRace: "Miami GP 2023 (P9 to P1 on Hard tires)",
  },
  {
    id: "pit-wall-cpu",
    title: "Mental Bandwidth & Real-Time Strategy CPU",
    badge: "TACTICAL GENIUS",
    shortDesc: "Calculating pit windows, tire deltas, and weather radar mid-corner at 330 km/h with Gianpiero Lambiase ('GP').",
    detailedAnalysis: "While driving on the ragged edge, Max processes immense cognitive surplus. He regularly watches the giant trackside grandstand TV screens to monitor competitors' pit stops, advises his engineer on tire compound switches, and spots rain clouds before meteorology radars flash on team pit screens.",
    telemetryMetric: "'Simply Lovely' — 0 unforced mental errors across 22 races",
    icon: <Radio className="w-5 h-5 text-[#DB0A40]" strokeWidth={2.2} />,
    iconColor: "text-[#DB0A40]",
    definingRace: "Qatar GP 2023 & Las Vegas GP 2024",
  },
];

export const RacingSkillsSection: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string>("front-end");

  const activeSkill = RACING_SKILLS.find((s) => s.id === activeSkillId) || RACING_SKILLS[0];

  return (
    <section className="relative py-24 bg-[#0A0E1A]/60 backdrop-blur-[2px] overflow-hidden" aria-label="Racing Skills and Driving Anatomy">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-30 pointer-events-none" />

      {/* Atmospheric neon glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DB0A40]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6A13]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="RACECRAFT ANATOMY // DRIVING GENIUS"
          title="THE VERSTAPPEN"
          highlightText="BLUEPRINT"
          subtitle="What separates Max from every driver on the planet? A surgical breakdown of the driving technique, reaction speeds, and cognitive bandwidth behind four consecutive world titles."
        />

        {/* 1. Interactive Skills Pillar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Skill Selector Tabs */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#8F9CAE] mb-2">
              <span>Select Driving Attribute:</span>
              <span className="text-[#FFC906]">5 Key Pillars</span>
            </div>

            {RACING_SKILLS.map((skill) => {
              const isSelected = skill.id === activeSkillId;
              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setActiveSkillId(skill.id)}
                  className={`w-full text-left p-4 rounded-sm border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#151D33] border-[#FFC906] shadow-[0_0_20px_rgba(255,201,6,0.25)]"
                      : "bg-[#121829] border-white/10 hover:border-white/20 hover:bg-[#151D33]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-sm border transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? "bg-[#DB0A40] border-[#DB0A40] text-white shadow-[0_0_15px_rgba(219,10,64,0.4)]"
                          : "bg-[#0A0E1A] border-white/10 text-white/80 group-hover:border-[#FFC906]/50 group-hover:shadow-[0_0_12px_rgba(255,201,6,0.15)]"
                      }`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF6A13] block">
                        {skill.badge}
                      </span>
                      <span className="font-display text-base uppercase text-white group-hover:text-[#FFC906] transition-colors line-clamp-1">
                        {skill.title}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full ${
                      isSelected ? "bg-[#FFC906] animate-ping" : "bg-transparent"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Analysis Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSkill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  accentBorder="racing"
                  className="p-6 sm:p-8 bg-[#151D33] shadow-[0_15px_40px_rgba(0,0,0,0.7)]"
                >
                  {/* Category Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6A13]">
                        <span>{activeSkill.badge}</span>
                        <span>•</span>
                        <span className="text-[#FFC906]">TELEMETRY CHANNEL</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white mt-1">
                        {activeSkill.title}
                      </h3>
                    </div>

                    <div className="text-right">
                      <span className="text-xs font-mono text-[#8F9CAE] block">Key Benchmark:</span>
                      <span className="text-xs font-mono text-[#FFC906] font-bold">
                        {activeSkill.definingRace}
                      </span>
                    </div>
                  </div>

                  {/* Short Summary */}
                  <p className="text-base sm:text-lg text-[#F5F7FA] font-display uppercase tracking-wide leading-relaxed mb-4">
                    {activeSkill.shortDesc}
                  </p>

                  {/* Deep Technical Analysis */}
                  <p className="text-sm text-[#8F9CAE] font-sans leading-relaxed mb-6">
                    {activeSkill.detailedAnalysis}
                  </p>

                  {/* Telemetry Metric Box */}
                  <div className="p-4 rounded-sm bg-[#0D1220] border border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-emerald-400">
                      <span className="p-1 rounded-xs bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                        <Activity className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                      <span>{activeSkill.telemetryMetric}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#8F9CAE]">
                      VER #1 AUDIT
                    </span>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
