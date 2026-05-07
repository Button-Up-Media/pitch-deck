import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";

function joinServices(items: string[]) {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export function CoverPage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const serviceList = joinServices(enabled.map((k) => SERVICES[k].short));
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-200">
          <span className="size-1.5 rounded-full bg-emerald-300" />
          Prepared for {config.client.preparedFor}
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="block bg-gradient-to-b from-ink-50 to-ink-200 bg-clip-text text-transparent">
            {config.client.name}
          </span>
          <span className="mt-2 block shimmer-text">Marketing, end to end.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink-200 md:text-xl">
          A purpose-built {config.client.industry.toLowerCase()} growth program
          covering <span className="text-ink-50">{serviceList}</span>. One team.
          One point of contact. One unified strategy.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/brands"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ink-200 to-ink-50 px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-ink-400/20 transition hover:shadow-ink-200/30"
          >
            Begin walkthrough
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/scope"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-ink-100 transition hover:bg-white/10"
          >
            Skip to scope & pricing
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 text-xs text-ink-300 md:grid-cols-4 md:gap-6">
          <Stat value={String(config.brands.length)} label={config.brands.length === 1 ? "Brand" : "Brands"} />
          <Stat value={String(enabled.length)} label="Services" />
          <Stat value={`${config.scope.contractMonths} mo`} label="Initial term" />
          <Stat value="1" label="Point of contact" />
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-ink-300">
        {config.agency.name} · {config.client.decisionDate}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-semibold text-ink-50">{value}</div>
      <div>{label}</div>
    </div>
  );
}
