import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
};

export function Section({
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
}: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mb-10 ${align === "center" ? "text-center" : ""}`}
      >
        {eyebrow && (
          <div
            className={`mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-200`}
          >
            <span className="size-1.5 rounded-full bg-gradient-to-r from-emerald-300 to-teal-400" />
            {eyebrow}
          </div>
        )}
        <h2 className="text-balance bg-gradient-to-b from-ink-50 to-ink-200 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent md:text-6xl">
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-5 max-w-3xl text-pretty text-base leading-relaxed text-ink-200 md:text-lg ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </section>
  );
}
