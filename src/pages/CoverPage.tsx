import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config/client";
import { SERVICE_ORDER } from "../config/services";

export function CoverPage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const heroImage =
    config.brands[0]?.imageUrl ??
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e18]/95 via-[#0c0e18]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e18]/85 via-transparent to-[#0c0e18]/30" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-6 pb-28 md:max-w-[55vw] md:px-16 md:pb-32 lg:px-24 2xl:max-w-[48vw]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-sm font-light tracking-[0.08em] text-ink-200/50 md:text-base">
            Prepared for {config.client.preparedFor}
          </div>
          <div className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-ink-50 md:text-sm">
            {config.agency.name} · A Marketing Blueprint
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-semibold leading-[1.05] tracking-[-0.02em] text-ink-50 text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem]"
        >
          {config.client.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-ink-100/50 md:text-lg"
        >
          A complete {config.client.industry.toLowerCase()} growth program covering
          organic social, paid media, and the website that ties them together —
          designed to be built, run, and reported on by a single team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-9 flex items-center gap-6"
        >
          <Link
            to="/opportunities"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-ink-50"
          >
            <span>Begin walkthrough</span>
            <span className="flex size-9 items-center justify-center rounded-full border border-ink-300/40 transition-all group-hover:border-ink-100 group-hover:bg-ink-50/10">
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
          <Link
            to="/lets-go"
            className="text-sm text-ink-200/60 underline-offset-4 transition hover:text-ink-100 hover:underline"
          >
            Skip to proposal
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/[0.08] pt-6"
        >
          <Stat
            value={String(config.brands.length)}
            label={config.brands.length === 1 ? "Brand" : "Brands covered"}
          />
          <Stat value={String(enabled.length)} label="Channels in program" />
          <Stat
            value={
              config.bundle.contractMonths
                ? `${config.bundle.contractMonths} mo`
                : "—"
            }
            label="Initial term"
          />
          <Stat value="1" label="Point of contact" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-ink-200 to-ink-100 bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl lg:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold text-ink-200/60">{label}</div>
    </div>
  );
}
