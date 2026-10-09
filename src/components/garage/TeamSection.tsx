"use client";

import React from "react";
import { motion } from "framer-motion";
import { TEAM_MEMBERS, TeamMember } from "@/data/car-specs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Radio, Users, Quote } from "lucide-react";

export const TeamSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0E1424]/75 backdrop-blur-[2px] overflow-hidden" aria-label="Inside The Team">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="THE PIT WALL & FACTORY // ORACLE RED BULL RACING"
          title="INSIDE THE"
          highlightText="TEAM"
          subtitle="A championship isn't won in isolation. Behind Max's peerless driving stands the finest engineering minds in motorsport."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member: TeamMember, index: number) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                accentBorder={index === 0 ? "racing" : "none"}
                className="p-6 sm:p-8 h-full flex flex-col justify-between group hover:border-[#FFC906]/40 transition-all duration-300"
              >
                <div>
                  {/* Top Role & Callsign */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-[#FF6A13] uppercase tracking-wider flex items-center gap-2 font-semibold">
                      <span className="p-0.5 rounded-xs bg-[#DB0A40]/15 text-[#DB0A40] flex items-center justify-center">
                        <Radio className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                      <span>{member.role}</span>
                    </span>
                    {member.callsign && (
                      <span className="px-2 py-0.5 rounded-sm bg-[#151D33] text-[#FFC906] border border-white/5 font-semibold">
                        {member.callsign}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-display uppercase tracking-wider text-white group-hover:text-[#FFC906] transition-colors">
                    {member.name}
                  </h3>

                  {/* Quote */}
                  <div className="my-4 p-4 rounded-sm bg-[#0D1220] border-l-2 border-[#DB0A40] text-xs sm:text-sm font-sans italic text-[#F5F7FA]/90 flex items-start gap-2.5">
                    <span className="p-1 rounded-xs bg-[#FF6A13]/15 text-[#FF6A13] shrink-0 mt-0.5 flex items-center justify-center">
                      <Quote className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span>{member.quote}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-[#8F9CAE] font-sans leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#8F9CAE]">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#FFC906]" strokeWidth={2.2} />
                    <span>Milton Keynes, UK</span>
                  </span>
                  <span className="text-[#DB0A40] font-semibold">Red Bull Technology</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
