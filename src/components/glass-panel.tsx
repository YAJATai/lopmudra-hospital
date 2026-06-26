import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function GlassPanel({ children, className = "", glass = false }: CardProps) {
  return (
    <div className={`${glass ? "glass-widget" : "card"} ${className}`}>
      {children}
    </div>
  );
}
