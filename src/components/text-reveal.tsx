import { motion } from "motion/react";

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
}

export function TextReveal({
  children,
  as: Tag = "p",
  className = "",
  delay = 0,
  stagger = 0.04,
}: TextRevealProps) {
  const words = children.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{children}</span>
      <span aria-hidden>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em] last:mr-0">
            <motion.span
              initial={{ y: "100%", rotate: 5, opacity: 0 }}
              whileInView={{ y: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: delay + i * stagger,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
}
