"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
import { Card } from "./Card";

export interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  description?: string;
  highlight?: boolean;
  duration?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = "",
  description,
  highlight = false,
  duration = 2.0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setCount(value);
      return;
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <div ref={ref} className="h-full">
      <Card
        accentBorder={highlight ? "racing" : "none"}
        className={`h-full p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 ${
          highlight
            ? "border-[#DB0A40]/40 bg-gradient-to-b from-[#161F33] to-[#121829]"
            : "bg-[#121829]"
        }`}
      >
        <div>
          {/* Top category label & dot */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8F9CAE]">
              Telemetry // Stat
            </span>
            <span
              className={`w-2 h-2 rounded-full ${
                highlight ? "bg-[#DB0A40] animate-pulse" : "bg-[#FFC906]"
              }`}
            />
          </div>

          {/* Number Value */}
          <div className="flex items-baseline gap-1">
            <span
              className={`text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight leading-none ${
                highlight
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F7FA] to-[#FFC906]"
                  : "text-[#F5F7FA]"
              }`}
            >
              {count}
            </span>
            {suffix && (
              <span className="text-2xl sm:text-3xl font-display text-[#FF6A13]">
                {suffix}
              </span>
            )}
          </div>

          {/* Metric Label */}
          <h3 className="mt-3 text-lg sm:text-xl font-display uppercase tracking-wide text-[#F5F7FA] group-hover:text-[#FFC906] transition-colors">
            {label}
          </h3>
        </div>

        {/* Description */}
        {description && (
          <p className="mt-4 text-xs sm:text-sm text-[#8F9CAE] font-sans border-t border-white/5 pt-3">
            {description}
          </p>
        )}
      </Card>
    </div>
  );
};
