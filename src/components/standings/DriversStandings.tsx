"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DRIVERS_STANDINGS_2026, DriverStanding } from "@/data/standings";
import { Card } from "@/components/ui/Card";
import { Trophy, Search, Flag, Award, Zap, ShieldCheck } from "lucide-react";

export const DriversStandings: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("All");

  const teams = [
    "All",
    "Oracle Red Bull Racing",
    "McLaren F1 Team",
    "Scuderia Ferrari",
    "Mercedes-AMG PETRONAS",
    "Williams Racing",
    "Aston Martin Aramco",
    "Visa Cash App RB",
    "BWT Alpine F1 Team",
    "Stake F1 / Audi Revolut",
    "Haas F1 Team",
  ];

  const filteredDrivers = DRIVERS_STANDINGS_2026.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.shortCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      driver.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam =
      selectedTeam === "All" || driver.team.toLowerCase().includes(selectedTeam.toLowerCase());
    return matchesSearch && matchesTeam;
  });

  return (
    <section className="relative py-20 bg-[#0A0E1A]/60 backdrop-blur-[2px] overflow-hidden" aria-label="2026 Drivers Standings">
      {/* Background carbon texture */}
      <div className="absolute inset-0 carbon-pattern-subtle opacity-35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Championship Leader Spotlight Card for Max Verstappen */}
        <div className="mb-12 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#180A10] via-[#151D33] to-[#121829] border-2 border-[#DB0A40] shadow-[0_15px_50px_rgba(219,10,64,0.35)] relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-[18vw] sm:text-[14vw] font-display font-black text-white/5 pointer-events-none select-none">
            #1
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-xs bg-[#DB0A40] text-white font-mono text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-md">
                  <Trophy className="w-3.5 h-3.5 text-[#FFC906]" strokeWidth={2.2} /> P1 WORLD CHAMPIONSHIP LEADER
                </span>
                <span className="text-xs font-mono text-[#FFC906]">2026 SEASON</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-display uppercase tracking-tight text-white">
                MAX VERSTAPPEN <span className="text-[#FFC906]">#1</span>
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8F9CAE]">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#DB0A40]" strokeWidth={2.2} /> Oracle Red Bull Racing
                </span>
                <span>•</span>
                <span>Championship Delta: <strong className="text-emerald-400">+54 PTS over P2</strong></span>
                <span>•</span>
                <span>Nationality: <strong className="text-[#FF6A13]">Netherlands (NED)</strong></span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-4 sm:gap-6 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-display text-white">412</div>
                <div className="text-[10px] font-mono uppercase text-[#8F9CAE]">Points</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-display text-[#DB0A40]">9</div>
                <div className="text-[10px] font-mono uppercase text-[#8F9CAE]">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-display text-[#FF6A13]">16</div>
                <div className="text-[10px] font-mono uppercase text-[#8F9CAE]">Podiums</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-display text-[#FFC906]">7</div>
                <div className="text-[10px] font-mono uppercase text-[#8F9CAE]">Fast Laps</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8F9CAE]">
              <Search className="w-4 h-4" strokeWidth={2.2} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search driver name, code (e.g. VER, NOR), or country..."
              className="w-full pl-9 pr-4 py-2.5 bg-[#121829] border border-white/10 rounded-sm text-xs font-mono text-white placeholder-[#8F9CAE]/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8F9CAE] whitespace-nowrap">Filter Team:</span>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="px-3 py-2 bg-[#121829] border border-white/10 rounded-sm text-xs font-mono text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FFC906]"
            >
              {teams.map((t) => (
                <option key={t} value={t} className="bg-[#0A0E1A] text-white">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Complete 26-Driver Standings Table */}
        <div className="rounded-sm border border-white/10 bg-[#121829] shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0D1220] border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#8F9CAE]">
                  <th className="py-3 px-4 text-center w-14">POS</th>
                  <th className="py-3 px-3 text-center w-12">NO</th>
                  <th className="py-3 px-4">DRIVER</th>
                  <th className="py-3 px-4">NAT</th>
                  <th className="py-3 px-4">CONSTRUCTOR / TEAM</th>
                  <th className="py-3 px-4 text-right">WINS</th>
                  <th className="py-3 px-4 text-right">PODIUMS</th>
                  <th className="py-3 px-4 text-right">FL</th>
                  <th className="py-3 px-4 text-right font-bold text-white">PTS</th>
                  <th className="py-3 px-4 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {filteredDrivers.map((driver: DriverStanding) => {
                  const isMax = driver.isMax;
                  return (
                    <motion.tr
                      key={driver.position + driver.shortCode}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                      className={`transition-colors ${
                        isMax
                          ? "bg-gradient-to-r from-[#DB0A40]/15 via-transparent to-transparent font-semibold border-l-4 border-l-[#DB0A40]"
                          : ""
                      }`}
                    >
                      {/* Position */}
                      <td className="py-3 px-4 text-center">
                        {driver.position === 1 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#FFC906] text-[#0A0E1A] font-bold font-display text-sm">
                            1
                          </span>
                        ) : driver.position === 2 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-300 text-[#0A0E1A] font-bold font-display text-sm">
                            2
                          </span>
                        ) : driver.position === 3 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white font-bold font-display text-sm">
                            3
                          </span>
                        ) : (
                          <span className="text-[#8F9CAE]">{driver.position}</span>
                        )}
                      </td>

                      {/* Car Number */}
                      <td className="py-3 px-3 text-center font-display text-sm">
                        <span className={isMax ? "text-[#FFC906] font-bold" : "text-[#8F9CAE]"}>
                          {driver.driverNumber}
                        </span>
                      </td>

                      {/* Driver Name */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm uppercase text-white tracking-wide">
                            {driver.name}
                          </span>
                          <span className="text-[10px] text-[#8F9CAE] px-1 py-0.5 rounded bg-white/5">
                            {driver.shortCode}
                          </span>
                          {isMax && (
                            <span className="px-1.5 py-0.5 rounded-xs bg-[#DB0A40] text-white text-[9px] uppercase font-bold tracking-wider">
                              #1
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Nationality */}
                      <td className="py-3 px-4 text-[#8F9CAE]">
                        <span title={driver.country}>{driver.countryCode}</span>
                      </td>

                      {/* Team */}
                      <td className="py-3 px-4">
                        <div className="flex flex-col">
                          <span className={isMax ? "text-white font-semibold" : "text-[#F5F7FA]/90"}>
                            {driver.team}
                          </span>
                          <span className="text-[10px] text-[#8F9CAE]/70">{driver.engine}</span>
                        </div>
                      </td>

                      {/* Wins */}
                      <td className="py-3 px-4 text-right">
                        <span className={driver.wins > 0 ? "text-[#DB0A40] font-bold" : "text-[#8F9CAE]/50"}>
                          {driver.wins}
                        </span>
                      </td>

                      {/* Podiums */}
                      <td className="py-3 px-4 text-right">
                        <span className={driver.podiums > 0 ? "text-[#FF6A13] font-bold" : "text-[#8F9CAE]/50"}>
                          {driver.podiums}
                        </span>
                      </td>

                      {/* Fastest Laps */}
                      <td className="py-3 px-4 text-right">
                        <span className={driver.fastestLaps > 0 ? "text-[#FFC906]" : "text-[#8F9CAE]/50"}>
                          {driver.fastestLaps}
                        </span>
                      </td>

                      {/* Points */}
                      <td className="py-3 px-4 text-right font-display text-base text-white">
                        <span className={isMax ? "text-[#FFC906] font-bold" : ""}>
                          {driver.points}
                        </span>
                      </td>

                      {/* Status / Delta */}
                      <td className="py-3 px-4 text-right text-[11px]">
                        {isMax ? (
                          <span className="text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/30">
                            LEADER
                          </span>
                        ) : driver.statusBadge ? (
                          <span className="text-[#8F9CAE]">{driver.statusBadge}</span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="p-4 bg-[#0D1220] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#8F9CAE]">
            <div className="flex items-center gap-2">
              <Flag className="w-3.5 h-3.5 text-[#DB0A40]" strokeWidth={2.2} />
              <span>Showing {filteredDrivers.length} of 26 classified FIA Formula One drivers</span>
            </div>
            <div className="text-[11px] text-[#FFC906]">
              Points System: 25-18-15-12-10-8-6-4-2-1 + 1pt Fastest Lap
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
