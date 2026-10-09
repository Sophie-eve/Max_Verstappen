import React from "react";

export interface AngledDividerProps {
  direction?: "skew-left" | "skew-right";
  fillColor?: string;
  hasStripe?: boolean;
  className?: string;
}

export const AngledDivider: React.FC<AngledDividerProps> = ({
  direction = "skew-left",
  fillColor = "#0A0E1A",
  hasStripe = true,
  className = "",
}) => {
  const isLeft = direction === "skew-left";

  return (
    <div
      className={`relative w-full overflow-hidden leading-none select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Optional decorative racing stripe line */}
      {hasStripe && (
        <div className="h-[4px] w-full racing-stripe-accent relative z-10" />
      )}

      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-12 block"
        style={{ fill: fillColor }}
      >
        {isLeft ? (
          <polygon points="0,0 1200,48 0,48" />
        ) : (
          <polygon points="0,48 1200,0 1200,48" />
        )}
      </svg>
    </div>
  );
};
