import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";

function priceLabel(price: number) {
  if (!price) return "Custom";
  return `$${price.toLocaleString()}`;
}

export function ValuePage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const totalMonthly = enabled.reduce(
    (sum, k) => sum + (config.services[k].monthlyPrice || 0),
    0
  );

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <Section
        eyebrow="The Value"
        title={
          <>
            <span className="block">A clear price for each piece.</span>
            <span className="block shimmer-text">No mystery, no surprises.</span>
          </>
        }
        subtitle="Each service is priced as a standalone monthly investment so it's easy to see exactly what each channel contributes — and what it costs to run."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {enabled.map((key, i) => {
          const svc = SERVICES[key];
          const price = config.services[key].monthlyPrice;
          const Icon = svc.icon;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col">
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.accent}`}
                >
                  <Icon className="size-6 text-ink-900" strokeWidth={2.4} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-50">
                  {svc.label}
                </h3>
                <p className="mt-1 text-sm text-ink-200">{svc.subhead}</p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold text-ink-50">
                    {priceLabel(price)}
                  </span>
                  {price > 0 && (
                    <span className="text-sm text-ink-300">/ month</span>
                  )}
                </div>

                <div className="mt-auto pt-5 text-[11px] uppercase tracking-widest text-ink-300">
                  Standalone investment
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-12 max-w-4xl"
      >
        <Card strong>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-ink-200">
                A la carte total
              </div>
              <p className="mt-2 text-pretty text-lg text-ink-100">
                Run as standalone services, the full program comes in at the
                number on the right. The next slide shows what it looks like
                bundled together — and why most clients choose that option.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-ink-700/80 to-ink-800/80 p-6 text-right ring-1 ring-white/10">
              <div className="text-[10px] uppercase tracking-widest text-ink-300">
                Sum of standalone monthly
              </div>
              <div className="mt-1 text-4xl font-semibold text-ink-50 md:text-5xl">
                ${totalMonthly.toLocaleString()}
                <span className="ml-1 text-sm font-normal text-ink-300">
                  / month
                </span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-300"
      >
        Pricing assumes a {config.bundle.contractMonths ?? "—"}-month initial
        term. Setup fees, ad spend, and platform costs are quoted separately.
      </motion.div>
    </section>
  );
}
