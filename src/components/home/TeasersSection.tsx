"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FallbackImage } from "@/components/ui/FallbackImage";
import { ArrowRight, Trophy, Gauge, Flag, Zap } from "lucide-react";

export const TeasersSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0A0E1A]/60 backdrop-blur-[2px]" aria-label="Explore Sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPLORE HEADQUARTERS // SECTIONS"
          title="DEEP DIVE"
          highlightText="INTO THE GRID"
          subtitle="Walk through the decade that redefined Grand Prix racing or examine the championship-winning RB20 machinery."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* 1. Career Teaser Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card
              accentBorder="red"
              className="h-full flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#151D33]">
                <FallbackImage
                  src="/images/trophy.png"
                  alt="Career Timeline Trophy Showcase"
                  fill
                  placeholderType="trophy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-[#121829]/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0E1A]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/15 shadow-md">
                  <span className="p-0.5 rounded-xs bg-[#FFC906]/20 text-[#FFC906]">
                    <Trophy className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                    2005 - PRESENT ARCHIVE
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#DB0A40] mb-2 font-semibold">
                    <span className="p-1 rounded-xs bg-[#DB0A40]/15 text-[#DB0A40] border border-[#DB0A40]/30 flex items-center justify-center">
                      <Flag className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span>Historical Archive</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white group-hover:text-[#FFC906] transition-colors">
                    Career Timeline & Records
                  </h3>
                  <p className="mt-3 text-sm text-[#8F9CAE] font-sans leading-relaxed">
                    Trace Max&apos;s ascent from his formative European karting battles to his youngest-ever Formula 1 debut, the unforgettable 2016 Spain triumph, and his record-breaking 10 consecutive wins.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href="/career"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    View Career Timeline
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 2. Garage Teaser Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              accentBorder="orange"
              className="h-full flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#151D33]">
                <FallbackImage
                  src="/images/car.png"
                  alt="Oracle Red Bull Racing Car Showcase"
                  fill
                  placeholderType="car"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-[#121829]/40 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0A0E1A]/90 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/15 shadow-md">
                  <span className="p-0.5 rounded-xs bg-[#FF6A13]/20 text-[#FF6A13]">
                    <Gauge className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
                    RB20 TELEMETRY & SPECS
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#FF6A13] mb-2 font-semibold">
                    <span className="p-1 rounded-xs bg-[#FF6A13]/15 text-[#FF6A13] border border-[#FF6A13]/30 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span>Technical Engineering</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wide text-white group-hover:text-[#FFC906] transition-colors">
                    The Garage & RB20 Machinery
                  </h3>
                  <p className="mt-3 text-sm text-[#8F9CAE] font-sans leading-relaxed">
                    Inspect the 1,000+ horsepower Honda hybrid power unit, terminal 352+ km/h top speeds, Venturi downforce floor aerodynamics, and the legendary crew backing Max on the pit wall.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    href="/garage"
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Enter The Garage
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
