"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Flag, Sparkles } from "lucide-react";

export const CareerCoverHero: React.FC = () => {
  return (
    <div className="relative mb-16 rounded-sm overflow-hidden border border-white/20 bg-[#121829] shadow-[0_25px_60px_rgba(0,0,0,0.9)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left Column: Headlines & Championship Creds */}
        <div className="p-8 sm:p-12 lg:col-span-7 space-y-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DB0A40]/15 border border-[#DB0A40]/40 rounded-sm shadow-[0_0_12px_rgba(219,10,64,0.15)]">
            <span className="p-0.5 rounded-xs bg-[#FFC906]/20 text-[#FFC906]">
              <Trophy className="w-3.5 h-3.5" strokeWidth={2.2} />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FFC906]">
              CHAMPIONSHIP CHRONICLES // 2005 - PRESENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-white leading-[0.95]">
            THE ROAD TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">
              FOUR WORLD TITLES
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#8F9CAE] font-sans leading-relaxed">
            From humble karting tracks in Genk to the pinnacle of global motorsport. 4-time FIA Formula One World Champion Max Verstappen has rewritten the record books with an unprecedented combination of raw speed, calculated racecraft, and historic dominance.
          </p>

          {/* Quick Metrics Bar with elevated icons */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-left">
            <div className="p-3 rounded-sm bg-[#0D1220] border border-white/5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#FFC906] mb-1">
                <Trophy className="w-3 h-3 text-[#FFC906]" strokeWidth={2.2} />
                <span>Titles</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display text-white">4x</div>
            </div>
            <div className="p-3 rounded-sm bg-[#0D1220] border border-white/5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#DB0A40] mb-1">
                <ShieldCheck className="w-3 h-3 text-[#DB0A40]" strokeWidth={2.2} />
                <span>Wins</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display text-[#DB0A40]">63</div>
            </div>
            <div className="p-3 rounded-sm bg-[#0D1220] border border-white/5">
              <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#FF6A13] mb-1">
                <Sparkles className="w-3 h-3 text-[#FF6A13]" strokeWidth={2.2} />
                <span>Podiums</span>
              </div>
              <div className="text-2xl sm:text-3xl font-display text-[#FF6A13]">111</div>
            </div>
          </div>
        </div>

        {/* Right Column: User Uploaded Trophy Picture */}
        <div className="lg:col-span-5 relative order-1 lg:order-2 h-[340px] sm:h-[440px] lg:h-[500px] w-full bg-[#080D18] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/career-hero.jpg"
            alt="Max Verstappen holding World Championship trophy with Dutch flag in background"
            fill
            priority
            className="object-cover object-top hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 600px"
          />

          {/* Gradient depth mask */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121829] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#121829] lg:via-transparent lg:to-transparent pointer-events-none" />

          {/* Corner badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#0A0E1A]/90 backdrop-blur-md px-3 py-1.5 border border-white/15 rounded-sm shadow-md">
            <Flag className="w-3.5 h-3.5 text-[#FF6A13]" strokeWidth={2.2} />
            <span className="text-[11px] font-mono uppercase text-white font-bold">
              DUTCH GP CHAMPION
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
