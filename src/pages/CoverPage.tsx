import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config/client";

export function CoverPage() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-200"
      >
        <span className="size-1.5 rounded-full bg-emerald-300" />
        Prepared for {config.client.preparedFor}
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-balance text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl lg:text-[5.5rem]"
      >
        <span className="block bg-gradient-to-b from-ink-50 to-ink-200 bg-clip-text text-transparent">
          {config.client.name}
        </span>
        <span className="mt-3 block shimmer-text">A Marketing Blueprint</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-8 max-w-2xl text-pretty text-lg text-ink-200 md:text-xl"
      >
        A purpose-built {config.client.industry.toLowerCase()} growth program from{" "}
        <span className="text-ink-50">{config.agency.name}</span>. One team, one
        ecosystem, one growth engine.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-3"
      >
        <Link
          to="/opportunities"
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ink-200 to-ink-50 px-7 py-3.5 text-sm font-semibold text-ink-900 shadow-lg shadow-ink-400/20 transition hover:shadow-ink-200/30"
        >
          Begin walkthrough
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
        <Link
          to="/lets-go"
          className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-medium text-ink-100 transition hover:bg-white/10"
        >
          Skip to the proposal
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.32em] text-ink-300"
      >
        {config.agency.name} · {config.client.decisionDate} · Use ← → to navigate
      </motion.div>
    </section>
  );
}
