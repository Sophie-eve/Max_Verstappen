"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import MicroSlats to prevent SSR issues with WebGL & OGL
const MicroSlatsComponent = dynamic<any>(() => import("./MicroSlats"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#0A0E1A]" />,
});

export interface MicroSlatsProps {
  preset?: "swell" | "tide" | "storm" | "signal";
  color?: string;
  glintColor?: string;
  backgroundColor?: string;
  slatWidth?: number;
  slatHeight?: number;
  gap?: number;
  roundness?: number;
  scale?: number;
  speed?: number;
  direction?: number;
  chop?: number;
  stretch?: number;
  glint?: number;
  contrast?: number;
  perspective?: number;
  fog?: number;
  interactive?: boolean;
  cursorStrength?: number;
  cursorSize?: number;
  swirl?: number;
  trail?: number;
  lean?: number;
  intro?: boolean;
  introDuration?: number;
  paused?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MicroSlats: React.FC<MicroSlatsProps> = (props) => {
  return <MicroSlatsComponent {...props} />;
};

export default MicroSlats;
