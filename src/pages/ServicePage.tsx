import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { SERVICES } from "../config/services";
import type { ServiceKey } from "../config/client";

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const svc = SERVICES[serviceKey];
  const Icon = svc.icon;

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <Section
        eyebrow={svc.label}
        title={svc.headline}
        subtitle={svc.subhead}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-white/10"
      >
        <img
          src={svc.imageUrl}
          alt={svc.label}
          className="h-72 w-full object-cover md:h-[28rem]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-6 md:p-10">
          <div
            className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.accent} shadow-2xl`}
          >
            <Icon className="size-7 text-ink-900" strokeWidth={2.4} />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-200">
              Role in the ecosystem
            </div>
            <div className="mt-1 max-w-2xl text-sm text-ink-100 md:text-base">
              {svc.ecosystemRole}
            </div>
          </div>
        </div>
      </motion.div>

      <Section
        title={<>The gap, and how we close it.</>}
        subtitle="Every service is built on the same loop — name the gap, build the engine, optimize relentlessly."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-rose-300">
              The gap today
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink-100">
              {svc.problem}
            </p>
          </Card>
          <Card strong>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">
              How we close it
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink-50">
              {svc.solution}
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title={<>The four pillars.</>}
        subtitle="Every program rests on these four. Tweaked per brand, never skipped."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {svc.pillars.map((p, i) => (
            <Card key={p.title} delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${svc.accent} text-xs font-bold text-ink-900`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-50">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                    {p.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title={<>What's in scope every month.</>}
        subtitle="No surprise add-ons. No fine print. This is the deliverables list."
      >
        <Card strong className="mx-auto max-w-3xl">
          <ul className="space-y-3">
            {svc.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                  <Check className="size-3" strokeWidth={3} />
                </div>
                <span className="text-sm leading-relaxed text-ink-100">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </Section>
    </section>
  );
}
