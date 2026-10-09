"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Calendar, Compass, Trophy, Zap } from "lucide-react";

export const BioSection: React.FC = () => {
  const bioPoints = [
    {
      icon: <Calendar className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
      badgeColor: "bg-[#FFC906]/10 border-[#FFC906]/30 shadow-[0_0_12px_rgba(255,201,6,0.15)]",
      title: "Born September 1997",
      desc: "Hasselt, Belgium — raised in the karting crucible under the guidance of F1 driver Jos Verstappen.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#DB0A40]" strokeWidth={2.2} />,
      badgeColor: "bg-[#DB0A40]/10 border-[#DB0A40]/30 shadow-[0_0_12px_rgba(219,10,64,0.15)]",
      title: "Youngest F1 Debutant (17)",
      desc: "Made his Grand Prix debut with Scuderia Toro Rosso in 2015 at age 17y 166d, the youngest in F1 history.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#FF6A13]" strokeWidth={2.2} />,
      badgeColor: "bg-[#FF6A13]/10 border-[#FF6A13]/30 shadow-[0_0_12px_rgba(255,106,19,0.15)]",
      title: "Maiden Victory (2016)",
      desc: "Promoted to Red Bull Racing at the 2016 Spanish GP and won on his debut race, shocking the motorsport world.",
    },
    {
      icon: <Trophy className="w-5 h-5 text-[#FFC906]" strokeWidth={2.2} />,
      badgeColor: "bg-[#FFC906]/15 border-[#FFC906]/40 shadow-[0_0_16px_rgba(255,201,6,0.25)]",
      title: "4x World Champion",
      desc: "Drivers' World Champion in 2021, 2022, 2023, and 2024, setting unprecedented records with Oracle Red Bull Racing.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0A0E1A]/60 backdrop-blur-[2px]" aria-label="About Max Verstappen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE PROFILE // BIOGRAPHY"
          title="THE PHENOMENON"
          highlightText="FROM HASSELT"
          subtitle="Precision, fearlessness, and generational racecraft that redefined modern Formula 1."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main 3-4 line narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-sm bg-[#121829] border-l-4 border-[#DB0A40] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <p className="text-xl sm:text-2xl font-display uppercase tracking-wide text-[#F5F7FA] leading-relaxed">
                Born in 1997 into racing royalty, Max Verstappen arrived in Formula 1 at just 17 years old as the youngest driver in the sport&apos;s history.
              </p>
              <p className="mt-4 text-base sm:text-lg text-[#8F9CAE] font-sans leading-relaxed">
                In 2016, his very first outing for Red Bull Racing at the Spanish Grand Prix yielded an epoch-defining victory at age 18. Today, as a four-time consecutive FIA Formula One World Champion, Max combines surgical qualifying speed with unmatched wet-weather mastery.
              </p>
            </div>
          </motion.div>

          {/* Quick Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bioPoints.map((point, idx) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card
                  accentBorder={idx === 3 ? "racing" : "none"}
                  className="p-5 h-full flex flex-col justify-between hover:border-white/30"
                >
                  <div>
                    <div className={`p-2.5 w-fit rounded-sm border transition-all mb-3 flex items-center justify-center ${point.badgeColor}`}>
                      {point.icon}
                    </div>
                    <h3 className="font-display text-base uppercase tracking-wider text-[#F5F7FA]">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#8F9CAE] leading-relaxed font-sans">
                      {point.desc}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
