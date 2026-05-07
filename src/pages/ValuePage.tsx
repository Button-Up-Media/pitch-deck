import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "../components/SectionHeading";
import { Panel, HrSoft } from "../components/Panel";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";

function fmt(n: number) {
  if (!n) return null;
  return `$${n.toLocaleString()}`;
}

export function ValuePage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const totalMonthly = enabled.reduce(
    (sum, k) => sum + (config.services[k].monthlyPrice || 0),
    0
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-20 md:pb-28 lg:px-16 2xl:px-20">
      <SectionHeading
        eyebrow="The Value"
        title={
          <>
            <span className="block">A clear price for each piece.</span>
            <span className="block shimmer-text">No mystery, no surprises.</span>
          </>
        }
        subtitle="Each channel is priced as a standalone monthly investment so it's easy to see exactly what each piece contributes — and what it costs to run."
      />

      <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-2 md:flex md:flex-wrap md:gap-x-14 md:gap-y-6 md:mb-16">
        <BigStat
          value={String(enabled.length)}
          label="Channels included"
          caption="In the proposed program"
        />
        <BigStat
          value={fmt(totalMonthly) ?? "—"}
          label="A la carte total"
          caption="Standalone monthly sum"
        />
        <BigStat
          value={config.bundle.contractMonths ? `${config.bundle.contractMonths} mo` : "—"}
          label="Initial term"
          caption="Then month-to-month"
        />
        <BigStat
          value={String(config.brands.length)}
          label="Brands covered"
          caption="No per-brand surcharge"
        />
      </div>

      <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
        {enabled.map((key, i) => {
          const svc = SERVICES[key];
          const price = config.services[key].monthlyPrice;
          const Icon = svc.icon;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: Math.min(i * 0.05, 0.2) }}
            >
              <Panel padding="compact" motion={false}>
                <div className="mb-1 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex size-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${svc.accent} shadow-md md:size-10`}
                    >
                      <Icon className="size-4 text-ink-900 md:size-5" strokeWidth={2.4} />
                    </div>
                    <h3 className="text-base font-semibold text-ink-50 md:text-lg">
                      {svc.label}
                    </h3>
                  </div>
                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                      price > 0
                        ? "bg-ink-700/60 text-ink-100"
                        : "bg-emerald-500/8 text-emerald-300"
                    }`}
                  >
                    {price > 0 ? `${fmt(price)}/mo` : "Custom quote"}
                  </span>
                </div>
                <p className="ml-0 mb-4 mt-2 text-[15px] font-medium leading-relaxed text-ink-200/70 md:ml-13 md:mb-5">
                  {svc.subhead}
                </p>

                <div className="ml-0 md:ml-13">
                  {[
                    {
                      label: svc.pillars[0].title,
                      tag: "Pillar 01",
                      detail: svc.pillars[0].body,
                    },
                    {
                      label: svc.pillars[1].title,
                      tag: "Pillar 02",
                      detail: svc.pillars[1].body,
                    },
                    {
                      label: svc.pillars[2]?.title ?? svc.deliverables[0],
                      tag: "Pillar 03",
                      detail:
                        svc.pillars[2]?.body ?? "Included in monthly scope",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline border-t border-ink-400/10 py-2 first:border-t-0"
                    >
                      <span className="flex-1 min-w-0 truncate text-sm font-medium text-ink-100">
                        {row.label}
                      </span>
                      <span className="mr-3 w-20 flex-shrink-0 text-right text-sm font-semibold text-ink-200 md:mr-6">
                        {row.tag}
                      </span>
                      <span className="hidden w-44 flex-shrink-0 truncate text-right text-xs text-ink-300/60 sm:block md:w-56">
                        {row.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </Panel>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-12 md:mt-16"
      >
        <Panel motion={false}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-300/60">
                A la carte total
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-ink-50 md:text-3xl">
                Run as separate engagements
              </h3>
              <p className="mt-3 max-w-xl text-[15px] font-medium leading-relaxed text-ink-200/70 md:text-base">
                The full program priced as standalone services. The next slide
                shows the bundle — and why most clients choose it.
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="stat-num text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {fmt(totalMonthly) ?? "—"}
              </div>
              <div className="mt-1 text-sm text-ink-200/60">per month</div>
            </div>
          </div>
          <HrSoft className="my-6" />
          <Link
            to="/lets-go"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-ink-50"
          >
            <Sparkles className="size-4 text-emerald-300" />
            <span>See the bundle pricing</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Panel>
      </motion.div>
    </div>
  );
}

function BigStat({
  value,
  label,
  caption,
}: {
  value: string;
  label: string;
  caption: string;
}) {
  return (
    <div>
      <div className="stat-num text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium text-ink-200/80 md:text-sm">
        {label}
      </div>
      <div className="text-[10px] text-ink-300/60 md:text-xs">{caption}</div>
    </div>
  );
}
