import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "strong" | "dark";
  tilt?: boolean;
  as?: "div" | "section" | "article" | "aside";
}

export function GlassPanel({
  children,
  className = "",
  intensity = "light",
  tilt = false,
  as: Tag = "div",
}: GlassPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const baseClass =
    intensity === "strong"
      ? "glass-panel-strong"
      : intensity === "dark"
        ? "glass-panel-dark"
        : "glass-panel";

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  const style = tilt
    ? {
        transform: `perspective(1000px) rotateX(${(0.5 - springY.get()) * 6}deg) rotateY(${(springX.get() - 0.5) * 6}deg)`,
        transition: "transform 0.1s ease",
      }
    : undefined;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`${baseClass} rounded-2xl ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
