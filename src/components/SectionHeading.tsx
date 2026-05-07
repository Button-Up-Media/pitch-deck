import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {eyebrow && (
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-300 md:text-sm">
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-50 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-ink-200/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
