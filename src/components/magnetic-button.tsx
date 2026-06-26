import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "ghost" | "outline";
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 10 });
  const springY = useSpring(y, { stiffness: 200, damping: 10 });

  const baseVariants = {
    primary:
      "bg-oklch(0.45 0.12 220) text-white hover:shadow-[0_8px_30px_oklch(0.45_0.12_220/0.3)]",
    ghost:
      "text-oklch(0.15 0.015 200) hover:bg-black/5",
    outline:
      "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors cursor-pointer select-none magnetic-btn"
      style={{ x: springX, y: springY }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity hover:opacity-100 pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.div>
  );

  const combinedClass = `${baseVariants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClass}
    >
      {content}
    </button>
  );
}
