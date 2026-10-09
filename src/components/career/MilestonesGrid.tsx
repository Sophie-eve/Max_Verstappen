"use client";

import React from "react";
import { motion } from "framer-motion";
import { RECORDS_AND_MILESTONES, RecordMilestone } from "@/data/records";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Trophy, Award, History } from "lucide-react";

export const MilestonesGrid: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0E1424]/75 backdrop-blur-[2px] overflow-hidden" aria-label="Records and Milestones">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FIA HISTORICAL ARCHIVES // BENCHMARKS"
          title="RECORDS &"
          highlightText="MILESTONES"
          subtitle="A comprehensive record of Formula 1 benchmarks shattered, rewritten, and elevated into unprecedented territory."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECORDS_AND_MILESTONES.map((record: RecordMilestone, index: number) => (
            <motion.div
              key={record.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                accentBorder="none"
                className="p-6 h-full flex flex-col justify-between group hover:border-[#FFC906]/50 transition-all duration-300"
              >
                <div>
                  {/* Top Category & Year */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4">
                    <span className="text-[#FF6A13] flex items-center gap-1.5 uppercase tracking-wider font-semibold">
                      <span className="p-0.5 rounded-xs bg-[#DB0A40]/15 text-[#DB0A40] flex items-center justify-center">
                        <Award className="w-3.5 h-3.5" strokeWidth={2.2} />
                      </span>
                      <span>{record.category}</span>
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-white/5 text-[#8F9CAE]">
                      {record.year}
                    </span>
                  </div>

                  {/* Primary Metric */}
                  <div className="text-3xl sm:text-4xl font-display uppercase tracking-tight text-[#FFC906] group-hover:text-white transition-colors">
                    {record.metric}
                  </div>

                  {/* Title */}
                  <h3 className="mt-1 text-lg font-display uppercase tracking-wider text-[#F5F7FA]">
                    {record.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#8F9CAE] font-sans leading-relaxed">
                    {record.description}
                  </p>
                </div>

                {/* Previous record comparison */}
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#8F9CAE]">
                  <span className="flex items-center gap-1.5">
                    <History className="w-3 h-3 text-[#DB0A40]" strokeWidth={2.2} />
                    <span>Prev:</span>
                  </span>
                  <span className="text-[#F5F7FA]/80 text-right truncate max-w-[180px]">
                    {record.previousRecord}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#121829] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-[#FFC906]/15 border border-[#FFC906]/30 text-[#FFC906] flex items-center justify-center shadow-[0_0_15px_rgba(255,201,6,0.2)]">
              <Trophy className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-sm font-display uppercase tracking-wider text-white">
                ALL-TIME HISTORIC DATA
              </p>
              <p className="text-xs text-[#8F9CAE]">
                Continuously audited against official FIA & Formula 1 historical annals.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-[#FFC906]">
            DRIVER CODE: VER // #1
          </div>
        </div>
      </div>
    </section>
  );
};
