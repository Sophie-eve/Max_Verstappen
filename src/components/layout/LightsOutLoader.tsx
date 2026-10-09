"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FastForward } from "lucide-react";

export const LightsOutLoader: React.FC = () => {
  const [show, setShow] = useState<boolean | null>(null);
  const [activeLights, setActiveLights] = useState<number>(0);
  const [lightsOut, setLightsOut] = useState<boolean>(false);
  const [textBanner, setTextBanner] = useState<string>("PREPARING THE GRID");

  const dismiss = () => {
    try {
      sessionStorage.setItem("f1_lights_out_seen", "true");
    } catch {
      // ignore in restricted iframe
    }
    setShow(false);
  };

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Check session storage
    let hasSeen = false;
    try {
      hasSeen = sessionStorage.getItem("f1_lights_out_seen") === "true";
    } catch {
      hasSeen = false;
    }

    if (hasSeen || prefersReducedMotion) {
      setShow(false);
      return;
    }

    setShow(true);

    // ESC key listener to skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Sequence of 5 red lights
    const timeouts: NodeJS.Timeout[] = [];

    // Light 1
    timeouts.push(
      setTimeout(() => {
        setActiveLights(1);
      }, 500)
    );
    // Light 2
    timeouts.push(
      setTimeout(() => {
        setActiveLights(2);
      }, 1100)
    );
    // Light 3
    timeouts.push(
      setTimeout(() => {
        setActiveLights(3);
      }, 1700)
    );
    // Light 4
    timeouts.push(
      setTimeout(() => {
        setActiveLights(4);
      }, 2300)
    );
    // Light 5
    timeouts.push(
      setTimeout(() => {
        setActiveLights(5);
        setTextBanner("HOLDING RPM...");
      }, 2900)
    );

    // Random suspense interval between 1.0s and 1.6s
    timeouts.push(
      setTimeout(() => {
        setActiveLights(0);
        setLightsOut(true);
        setTextBanner("LIGHTS OUT AND AWAY WE GO!");
      }, 4100)
    );

    // Complete loader and dismiss
    timeouts.push(
      setTimeout(() => {
        dismiss();
      }, 5200)
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  if (show === null || show === false) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070A12] text-white px-4 select-none"
        role="dialog"
        aria-label="F1 Starting Sequence"
      >
        {/* Background carbon texture */}
        <div className="absolute inset-0 carbon-pattern opacity-40 pointer-events-none" />

        {/* Skip Button */}
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest text-[#8F9CAE] hover:text-[#FFC906] bg-[#121829]/80 border border-white/10 rounded-sm hover:border-[#FFC906]/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC906]"
          aria-label="Skip introduction animation"
        >
          <span>SKIP INTRO</span>
          <FastForward className="w-3.5 h-3.5" />
          <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 bg-black/40 rounded text-[10px] text-white/50">
            ESC
          </kbd>
        </button>

        {/* Gantry Box */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Official Max Verstappen #1 Logo */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-sm overflow-hidden border border-white/20 bg-black shadow-[0_0_30px_rgba(219,10,64,0.5)]">
            <Image
              src="/images/logo.png"
              alt="Max Verstappen #1 Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          {/* Overhead gantry truss line */}
          <div className="w-72 sm:w-96 h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

          {/* 5 Light Columns Gantry */}
          <div className="flex items-center gap-2 sm:gap-4 p-4 sm:p-6 bg-[#0D1220] border-2 border-white/10 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            {[1, 2, 3, 4, 5].map((index) => {
              const isLit = activeLights >= index;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 px-2 py-3 bg-[#080B14] rounded border border-white/5"
                >
                  {/* Top unlit status light */}
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neutral-900 border border-white/10" />

                  {/* Main Red Signal Light */}
                  <div
                    className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full transition-all duration-150 flex items-center justify-center border-2 ${
                      isLit
                        ? "bg-[#DB0A40] border-[#FF3366] shadow-[0_0_28px_#DB0A40] scale-105"
                        : "bg-[#180509] border-[#3D0A14] shadow-inner"
                    }`}
                  >
                    {isLit && (
                      <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-white/70 blur-[1px]" />
                    )}
                  </div>

                  {/* Second bulb row */}
                  <div
                    className={`w-7 h-7 sm:w-11 sm:h-11 rounded-full transition-all duration-150 flex items-center justify-center border-2 ${
                      isLit
                        ? "bg-[#DB0A40] border-[#FF3366] shadow-[0_0_28px_#DB0A40] scale-105"
                        : "bg-[#180509] border-[#3D0A14] shadow-inner"
                    }`}
                  >
                    {isLit && (
                      <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full bg-white/70 blur-[1px]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Banner message */}
          <div className="mt-8 text-center min-h-[3rem]">
            <motion.p
              key={textBanner}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`font-display uppercase tracking-widest text-lg sm:text-2xl ${
                lightsOut
                  ? "text-[#FFC906] font-bold text-2xl sm:text-3xl drop-shadow-[0_0_20px_rgba(255,201,6,0.6)] animate-pulse"
                  : "text-[#8F9CAE]"
              }`}
            >
              {textBanner}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
