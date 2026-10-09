"use client";

import React from "react";
import { motion } from "framer-motion";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightText,
  subtitle,
  align = "left",
  className = "",
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 mb-3 text-xs font-mono font-semibold tracking-widest uppercase text-[#FFC906] ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="w-2 h-2 bg-[#DB0A40] rotate-45 inline-block" />
          <span>{badge}</span>
          <span className="w-6 h-[1px] bg-[#FFC906]/60 inline-block" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-[#F5F7FA] leading-none"
      >
        {title}{" "}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB0A40] via-[#FF6A13] to-[#FFC906]">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#8F9CAE] leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Livery underline */}
      <div
        className={`mt-6 h-[3px] w-20 racing-stripe-accent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
