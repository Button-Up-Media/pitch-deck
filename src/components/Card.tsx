import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  strong?: boolean;
};

export function Card({ children, className, delay = 0, strong }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        strong ? "glass-strong" : "glass",
        "rounded-2xl p-6 md:p-7",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
