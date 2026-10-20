"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 52 },
  left: { x: -120 },
  right: { x: 120 },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  // Respect users who ask for less motion: render plain, fully visible.
  if (reduce) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94, ...offsets[direction] }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 15,
        mass: 0.9,
        delay,
        opacity: { duration: 0.45, delay },
      }}
    >
      {children}
    </motion.div>
  );
}
