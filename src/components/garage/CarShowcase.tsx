"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CAR_SPECS, CarSpec } from "@/data/car-specs";
import { Card } from "@/components/ui/Card";
import {
  Zap,
  Gauge,
  Wind,
  Disc,
  ChevronRight,
  Crosshair,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface Hotspot {
  id: string;
  label: string;
  x: string; // percentage
  y: string; // percentage
  specId: string;
}

const CAR_HOTSPOTS: Hotspot[] = [
  { id: "max", label: "Max Verstappen (4x World Champion)", x: "82%", y: "45%", specId: "top-speed" },
  { id: "front-wing", label: "Front Wing & Low-Drag Nosecone", x: "36%", y: "78%", specId: "downforce" },
  { id: "cockpit", label: "Halo Cockpit & Driver Position", x: "48%", y: "45%", specId: "top-speed" },
  { id: "power-unit", label: "Honda Hybrid V6 Air Intake", x: "55%", y: "36%", specId: "power-unit" },
  { id: "tyres", label: "Pirelli 18-Inch Low-Profile Tyre", x: "16%", y: "70%", specId: "tyres" },
];

export const CarShowcase: React.FC = () => {
  const [activeSpecId, setActiveSpecId] = useState<string>("power-unit");

  const specIcons: Record<string, React.ReactNode> = {
    "power-unit": <Zap className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
    "top-speed": <Gauge className="w-5 h-5 text-[#DB0A40]" strokeWidth={2.2} />,
    downforce: <Wind className="w-5 h-5 text-[#FF6A13]" strokeWidth={2.2} />,
    tyres: <Disc className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
  };

  const activeSpec = CAR_SPECS.find((s) => s.id === activeSpecId) || CAR_SPECS[0];

  return (
    <section className="relative py-16 bg-[#0A0E1A]/60 backdrop-blur-[2px]" aria-label="RB20 Car Showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAR SHOWCASE HERO CONTAINER (FITTED TO SPACE) */}
        <div className="relative mb-16 rounded-sm overflow-hidden border border-white/20 bg-[#070B14] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
          {/* Main Car Photo: Cleanly fitted without cropping */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[720px] bg-[#070B14] flex items-center justify-center">
            <Image
              src="/images/car.png"
              alt="Max Verstappen standing beside Oracle Red Bull Racing RB20 car on track"
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 1200px) 100vw, 1400px"
            />

            {/* Gradient overlays for cinematic contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/80 via-transparent to-[#0A0E1A]/40 pointer-events-none" />

            {/* Top Bar: Telemetry Status & Sound Rev Button */}
            <div className="absolute top-6 inset-x-6 flex flex-wrap items-center justify-between gap-4 z-20">
              <div className="flex items-center gap-3 bg-[#0A0E1A]/90 backdrop-blur-md px-4 py-2 rounded-sm border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-[#DB0A40] animate-pulse" />
                <div>
                  <p className="font-display text-base tracking-wider uppercase text-white leading-none">
                    ORACLE RED BULL RACING <span className="text-[#FFC906]">RB20</span>
                  </p>
                  <p className="text-[10px] font-mono uppercase text-[#8F9CAE] mt-1">
                    CHAMPIONSHIP CAR TELEMETRY • DRIVER #1
                  </p>
                </div>
              </div>

              {/* Telemetry FIA Homologation Badge */}
              <div className="flex items-center gap-2.5 bg-[#0A0E1A]/95 backdrop-blur-md px-3.5 py-2 rounded-sm border border-[#DB0A40]/40 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase text-white font-semibold tracking-wider">
                  FIA HOMOLOGATED <span className="text-[#FFC906] font-bold">// SPEC RB20-01</span>
                </span>
              </div>
            </div>

            {/* INTERACTIVE TELEMETRY HOTSPOTS OVER THE REAL CAR */}
            {CAR_HOTSPOTS.map((hotspot) => {
              const isLinkedActive = hotspot.specId === activeSpecId;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  onClick={() => setActiveSpecId(hotspot.specId)}
                  style={{ left: hotspot.x, top: hotspot.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer focus:outline-none"
                  aria-label={`View telemetry for ${hotspot.label}`}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing ring */}
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${
                        isLinkedActive
                          ? "bg-[#FFC906]/30 animate-ping"
                          : "bg-[#DB0A40]/30 group-hover:scale-125"
                      }`}
                    />
                    {/* Center crosshair dot */}
                    <div
                      className={`relative w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all ${
                        isLinkedActive
                          ? "bg-[#FFC906] border-white shadow-[0_0_15px_#FFC906]"
                          : "bg-[#DB0A40] border-white/60 group-hover:bg-[#FF6A13]"
                      }`}
                    >
                      <Crosshair className="w-3 h-3 text-[#0A0E1A]" />
                    </div>

                    {/* Tooltip Tag on hover/active */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-8 hidden group-hover:flex items-center gap-1.5 whitespace-nowrap bg-[#0A0E1A]/95 text-white text-[11px] font-mono px-3 py-1 rounded border border-white/20 shadow-xl z-30">
                      <span>{hotspot.label}</span>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom Live Bar */}
            <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-xs font-mono text-[#8F9CAE] z-20 pointer-events-none">
              <span className="hidden sm:inline bg-[#0A0E1A]/80 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                CLICK ANY HOTSPOT ICON TO INSPECT CHASSIS TELEMETRY
              </span>
              <span className="bg-[#0A0E1A]/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[#FFC906]">
                ACTIVE: {activeSpec.name}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Specification Tabs & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#8F9CAE] mb-2 flex items-center justify-between">
              <span>Select Telemetry Sub-System:</span>
              <span className="text-[#FFC906]">Factory Diagnostic</span>
            </div>

            {CAR_SPECS.map((spec: CarSpec) => {
              const isSelected = spec.id === activeSpecId;
              return (
                <button
                  key={spec.id}
                  type="button"
                  onClick={() => setActiveSpecId(spec.id)}
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
                      {specIcons[spec.id]}
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#8F9CAE] uppercase">
                        {spec.badge}
                      </div>
                      <div className="font-display text-lg uppercase text-white group-hover:text-[#FFC906] transition-colors">
                        {spec.name}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl text-[#FFC906]">
                      {spec.value}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected
                          ? "text-[#FFC906] translate-x-1"
                          : "text-[#8F9CAE]"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Telemetry Inspector Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpec.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  accentBorder="racing"
                  className="p-6 sm:p-8 bg-[#151D33] shadow-[0_15px_45px_rgba(0,0,0,0.7)]"
                >
                  {/* Top Spec Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#FF6A13]">
                        {activeSpec.badge} // Telemetry Detail
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white">
                        {activeSpec.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="text-3xl sm:text-4xl font-display uppercase text-[#FFC906]">
                        {activeSpec.value}
                      </div>
                      {activeSpec.subvalue && (
                        <div className="text-xs font-mono text-[#8F9CAE]">
                          {activeSpec.subvalue}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#8F9CAE] font-sans leading-relaxed mb-6">
                    {activeSpec.description}
                  </p>

                  {/* Technical Specifications Table */}
                  <div className="border border-white/10 rounded-sm overflow-hidden">
                    <div className="bg-[#121829] px-4 py-2 border-b border-white/10 text-xs font-mono uppercase tracking-wider text-white flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#FFC906]" /> Factory Telemetry Specs
                      </span>
                      <span className="text-emerald-400 text-[10px]">VERIFIED RACECAR SPEC</span>
                    </div>
                    <div className="divide-y divide-white/5 bg-[#0D1220]">
                      {activeSpec.technicalDetails.map((item, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-3 flex items-center justify-between text-xs sm:text-sm"
                        >
                          <span className="text-[#8F9CAE] font-mono">{item.label}</span>
                          <span className="text-white font-mono font-semibold text-right flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A13]" />
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
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
