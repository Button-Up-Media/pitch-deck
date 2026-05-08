import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
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
            <span className="block">A clear price</span>
            <span className="block shimmer-text">for each piece.</span>
          </>
        }
        subtitle="Each channel is priced as a standalone monthly investment, so you can see exactly what each piece contributes and what it costs to run."
      />

      <div className="mt-12 space-y-5 md:mt-16">
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
              <Panel motion={false}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex size-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${svc.accent} shadow-md`}
                    >
                      <Icon className="size-5 text-bg-0" strokeWidth={2.4} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-cream-50 md:text-xl">
                        {svc.label}
                      </h3>
                      <p className="mt-0.5 text-[14px] text-cream-200">
                        {svc.subhead}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end">
                    {price > 0 ? (
                      <>
                        <span className="stat-num text-3xl md:text-4xl">
                          {fmt(price)}
                        </span>
                        <span className="text-xs text-cream-300">
                          per month
                        </span>
                      </>
                    ) : (
                      <span className="rounded-full bg-gold-500/12 px-3 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-gold-400">
                        Custom quote
                      </span>
                    )}
                  </div>
                </div>

                <HrSoft className="my-5" />

                <div className="eyebrow mb-3">What's included</div>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {svc.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <div className="mt-1 flex size-4 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15">
                        <Check
                          className="size-2.5 text-gold-400"
                          strokeWidth={3}
                        />
                      </div>
                      <span className="text-[13px] leading-relaxed text-cream-200">
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
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
              <div className="eyebrow">A la carte total</div>
              <h3 className="mt-2 font-display text-2xl font-bold text-cream-50 md:text-3xl">
                Run as separate engagements
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream-200 md:text-base">
                The full program priced as standalone services. The next slide
                shows the bundle, and why most clients choose it.
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="stat-num text-4xl md:text-5xl lg:text-6xl">
                {fmt(totalMonthly) ?? "$0"}
              </div>
              <div className="mt-1 text-sm text-cream-300">per month</div>
            </div>
          </div>
          <HrSoft className="my-6" />
          <Link
            to="/lets-go"
            className="group inline-flex items-center gap-3 font-semibold text-cream-50"
          >
            <Sparkles className="size-4 text-gold-400" />
            <span>See the bundle pricing</span>
            <ArrowRight className="size-4 text-gold-400 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </Panel>
      </motion.div>
    </div>
  );
}
