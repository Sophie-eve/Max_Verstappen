"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Flag, ArrowRight, ShieldCheck, Trophy, Sparkles, Zap, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transformations
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[96vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-16"
      aria-label="Max Verstappen Hero Showcase"
    >
      {/* Subtle overlay gradient for crisp typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/40 via-transparent to-[#0A0E1A]/60 pointer-events-none z-0" />

      {/* HUGE PARALLAX OUTLINED TEXT BEHIND HERO - SHIFTED TO LEFT SO FULL WORD IS VISIBLE */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : textY,
          opacity: opacityFade,
        }}
        className="absolute inset-0 flex items-center justify-start pointer-events-none select-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="text-[12vw] sm:text-[10vw] md:text-[8.5vw] lg:text-[7.2vw] xl:text-[6.8vw] 2xl:text-[96px] font-display font-black tracking-tight uppercase whitespace-nowrap text-transparent block"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.12)",
            }}
          >
            VERSTAPPEN
          </span>
        </div>
      </motion.div>

      {/* Giant #1 Parallax Number on right */}
      <motion.div
        style={{
          y: shouldReduceMotion ? 0 : numberY,
          opacity: opacityFade,
        }}
        className="absolute right-4 sm:right-16 top-1/4 pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[26vw] sm:text-[23vw] font-display font-black leading-none text-transparent"
          style={{
            WebkitTextStroke: "2px rgba(219, 10, 64, 0.15)",
          }}
        >
          #1
        </span>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#121829] border border-white/10 shadow-[0_4px_15px_rgba(0,0,0,0.5)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#DB0A40] animate-ping" />
              <span className="text-xs font-mono tracking-widest uppercase text-[#FFC906] font-semibold">
                ORACLE RED BULL RACING • 4X WORLD CHAMPION
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase tracking-tight text-[#F5F7FA] leading-[0.9]"
            >
              BORN TO RACE. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">
                BUILT TO WIN.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-[#8F9CAE] max-w-2xl font-sans leading-relaxed mx-auto lg:mx-0"
            >
              Four consecutive World Championships. 72 Grand Prix victories. 135 podium finishes. The youngest race winner in Formula 1 history and winner of today&apos;s wet-weather Singapore GP Sprint.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                href="#newsletter-strip"
                variant="primary"
                size="lg"
                icon={<Flag className="w-5 h-5" />}
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Join The Grid
              </Button>

              <Button
                href="/career"
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Explore The Career
              </Button>
            </motion.div>

            {/* Quick credentials footer bar with elevated motorsport icon badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-[#8F9CAE]"
            >
              <div className="flex items-center gap-2.5 bg-[#121829]/90 px-3 py-1.5 rounded-sm border border-white/10 hover:border-[#FFC906]/40 transition-colors shadow-sm">
                <span className="p-1 rounded-sm bg-[#FFC906]/15 text-[#FFC906] flex items-center justify-center">
                  <Trophy className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-white font-semibold">4x World Champion</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#121829]/90 px-3 py-1.5 rounded-sm border border-white/10 hover:border-[#DB0A40]/40 transition-colors shadow-sm">
                <span className="p-1 rounded-sm bg-[#DB0A40]/15 text-[#DB0A40] flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-white font-semibold">72 Grand Prix Wins</span>
              </div>
              <div className="flex items-center gap-2.5 bg-[#121829]/90 px-3 py-1.5 rounded-sm border border-white/10 hover:border-[#FF6A13]/40 transition-colors shadow-sm">
                <span className="p-1 rounded-sm bg-[#FF6A13]/15 text-[#FF6A13] flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5" strokeWidth={2.2} />
                </span>
                <span className="text-white font-semibold">135 F1 Podiums</span>
              </div>
              <div className="flex items-center gap-2 bg-[#DB0A40]/15 px-3 py-1.5 rounded-sm border border-[#DB0A40]/40 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#DB0A40] animate-ping" />
                <span className="text-[#FFC906] font-bold">Today: P1 Singapore Sprint (+8 Pts)</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase with User-Uploaded Max Image */}
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : imageY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906] rounded-sm opacity-40 blur-xl" />

              {/* Main Image Card with bevel and carbon styling */}
              <div className="relative rounded-sm overflow-hidden border border-white/20 bg-[#121829] shadow-[0_25px_60px_rgba(0,0,0,0.9)] aspect-[3/4] sm:aspect-[4/5]">
                {/* Max Verstappen Official Photo */}
                <Image
                  src="/images/hero-max.png"
                  alt="Max Verstappen on the Formula 1 podium in Oracle Red Bull Racing team suit"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 550px"
                />

                {/* Bottom Overlay Gradient for cinematic depth */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/70 to-transparent pointer-events-none" />

                {/* Top Badge Tag */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#0A0E1A]/90 backdrop-blur-md px-3 py-1.5 border border-white/15 rounded-sm shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A13]" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold">
                    MAX VERSTAPPEN #1
                  </span>
                </div>

                {/* Floating Telemetry Tag 1 (Bottom Left) */}
                <div className="absolute bottom-6 left-4 z-20 bg-[#0A0E1A]/95 backdrop-blur-md p-3 rounded-sm border border-[#DB0A40]/40 shadow-xl max-w-[210px]">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#DB0A40]">
                    <span className="p-1 rounded-xs bg-[#FFC906]/15 text-[#FFC906] border border-[#FFC906]/30">
                      <Zap className="w-3 h-3" strokeWidth={2.2} />
                    </span>
                    <span className="font-semibold uppercase tracking-wider">DELTA TO FIELD</span>
                  </div>
                  <div className="text-sm font-display uppercase text-white mt-1">
                    -19.34s IN CLEAN AIR
                  </div>
                </div>

                {/* Floating Telemetry Tag 2 (Bottom Right) */}
                <div className="absolute bottom-6 right-4 z-20 bg-[#0A0E1A]/95 backdrop-blur-md p-3 rounded-sm border border-[#FFC906]/40 shadow-xl text-right max-w-[210px]">
                  <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-[#FFC906]">
                    <span className="font-semibold uppercase tracking-wider">WIN RECORD</span>
                    <span className="p-1 rounded-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <Activity className="w-3 h-3" strokeWidth={2.2} />
                    </span>
                  </div>
                  <div className="text-sm font-display uppercase text-white mt-1">
                    10 CONSECUTIVE WINS
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
