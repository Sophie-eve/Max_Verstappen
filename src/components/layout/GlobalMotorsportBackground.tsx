"use client";

import React from "react";
import { MicroSlats } from "@/components/ui/MicroSlatsWrapper";

export const GlobalMotorsportBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep motorsport dark foundation */}
      <div className="absolute inset-0 bg-[#0A0E1A]" />

      {/* Subtle carbon fiber woven texture */}
      <div className="absolute inset-0 carbon-pattern opacity-25" />

      {/* Atmospheric motorsport radial ambient lighting */}
      {/* 1. Red Bull Red & Dutch Orange upper atmospheric glow */}
      <div className="absolute -top-32 left-1/4 -translate-x-1/2 w-[850px] h-[850px] bg-gradient-to-tr from-[#DB0A40]/18 via-[#FF6A13]/12 to-transparent rounded-full blur-[150px]" />

      {/* 2. Championship Yellow accent glow mid-right */}
      <div className="absolute top-1/3 -right-24 w-[700px] h-[700px] bg-[#FFC906]/08 rounded-full blur-[140px]" />

      {/* 3. Deep Red Bull Red accent glow in lower viewport */}
      <div className="absolute -bottom-28 left-10 w-[750px] h-[750px] bg-[#DB0A40]/12 rounded-full blur-[160px]" />

      {/* Interactive MicroSlats WebGL fluid grid (React Bits) */}
      <div className="absolute inset-0 opacity-45">
        <MicroSlats
          preset="swell"
          color="#162238"
          glintColor="#DB0A40"
          backgroundColor="#0A0E1A"
          slatWidth={11}
          slatHeight={26}
          gap={3}
          roundness={0.45}
          interactive
          cursorStrength={1.2}
          cursorSize={40}
          swirl={0.1}
          trail={1.6}
          lean={0.2}
          intro
          speed={0.85}
          direction={180}
          fog={0.5}
        />
      </div>

      {/* Cinematic vignette overlay for crisp readability across all pages */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E1A]/40 via-transparent to-[#0A0E1A]/60" />
    </div>
  );
};
