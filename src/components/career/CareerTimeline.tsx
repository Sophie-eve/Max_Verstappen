"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CAREER_TIMELINE, TimelineEvent } from "@/data/career";
import { Card } from "@/components/ui/Card";
import { Trophy, Flag, Zap, Sparkles, CheckCircle } from "lucide-react";

export const CareerTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Karting",
    "F1 Debut",
    "First Win",
    "Championship",
    "Dominance",
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? CAREER_TIMELINE
      : CAREER_TIMELINE.filter(
          (item) => item.category === selectedCategory || (selectedCategory === "Championship" && item.category === "Dominance")
        );

  return (
    <section className="relative py-16 bg-[#0A0E1A]/60 backdrop-blur-[2px]" aria-label="Career Timeline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-sm transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#DB0A40] text-white shadow-[0_0_15px_rgba(219,10,64,0.5)] border border-[#FF3366]"
                    : "bg-[#151D33] text-[#8F9CAE] hover:text-white hover:bg-[#1C2744] border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (hidden on very small screens, visible on sm+) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#DB0A40] via-[#FF6A13] to-[#FFC906] -translate-x-1/2 z-0" />

          {/* Mobile left-aligned vertical line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#DB0A40] via-[#FF6A13] to-[#FFC906] z-0" />

          <div className="space-y-12 sm:space-y-16">
            {filteredEvents.map((event: TimelineEvent, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.year + event.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Timeline Node (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 items-center justify-center w-8 h-8 rounded-full bg-[#0A0E1A] border-2 border-[#FFC906] shadow-[0_0_15px_rgba(255,201,6,0.6)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DB0A40]" />
                  </div>

                  {/* Mobile Node */}
                  <div className="md:hidden absolute left-4 top-8 -translate-x-1/2 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#0A0E1A] border-2 border-[#FFC906]">
                    <span className="w-2 h-2 rounded-full bg-[#DB0A40]" />
                  </div>

                  {/* Content Card Wrapper */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <Card
                      accentBorder={
                        event.category === "Championship" || event.category === "Dominance"
                          ? "racing"
                          : "none"
                      }
                      className="p-6 sm:p-8 hover:border-white/30 transition-all duration-300"
                    >
                      {/* Year & Category Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-widest bg-[#DB0A40]/20 text-[#FFC906] border border-[#DB0A40]/40 rounded-sm">
                          {event.year}
                        </span>

                        <span className="text-[11px] font-mono tracking-wider text-[#8F9CAE] flex items-center gap-1.5 bg-[#0D1220] px-2.5 py-1 rounded-sm border border-white/5">
                          {event.category === "Championship" ? (
                            <Trophy className="w-3.5 h-3.5 text-[#FFC906]" strokeWidth={2.2} />
                          ) : event.category === "First Win" ? (
                            <Sparkles className="w-3.5 h-3.5 text-[#DB0A40]" strokeWidth={2.2} />
                          ) : (
                            <Flag className="w-3.5 h-3.5 text-[#FF6A13]" strokeWidth={2.2} />
                          )}
                          <span className="text-white/90">{event.category}</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-display uppercase tracking-wide text-white">
                        {event.title}
                      </h3>

                      {/* Summary */}
                      <p className="mt-3 text-sm text-[#8F9CAE] font-sans leading-relaxed">
                        {event.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                        {event.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F7FA]/90"
                          >
                            <CheckCircle className="w-4 h-4 text-[#FF6A13] shrink-0 mt-0.5" strokeWidth={2.2} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Stat Badge */}
                      {event.keyStat && (
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                          <span className="text-[#8F9CAE]">Record Marker:</span>
                          <span className="text-[#FFC906] font-bold flex items-center gap-1.5">
                            <span className="p-0.5 rounded-xs bg-[#DB0A40]/20 text-[#DB0A40] flex items-center justify-center">
                              <Zap className="w-3 h-3 text-[#DB0A40]" strokeWidth={2.2} />
                            </span>
                            <span>{event.keyStat}</span>
                          </span>
                        </div>
                      )}
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
