import React from "react";
import { cn } from "../../lib/utils";

export function DotPattern({ className = "", size = 1, gap = 16 }) {
  const backgroundSize = `${gap}px ${gap}px`;
  const dotSize = size;
  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 -z-10 opacity-60 dark:opacity-40",
        className
      )}
      style={{
        backgroundImage:
          `radial-gradient(circle, rgba(148,163,184,0.35) ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize,
        backgroundPosition: "0 0",
      }}
    />
  );
}
