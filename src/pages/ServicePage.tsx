import { Check } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import { SERVICES } from "../config/services";
import type { ServiceKey } from "../config/client";
import { config } from "../config/client";

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const svc = SERVICES[serviceKey];
  const cfg = config.services[serviceKey];
  const Icon = svc.icon;

  return (
    <>
      <Section
        eyebrow={svc.label}
        title={svc.headline}
        subtitle={svc.subhead}
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10">
          <img
            src={svc.imageUrl}
            alt={svc.label}
            className="h-72 w-full object-cover md:h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6 md:p-8">
            <div
              className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${svc.accent} shadow-lg`}
            >
              <Icon className="size-6 text-ink-900" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-ink-200">
                Service Module
              </div>
              <div className="text-xl font-semibold text-ink-50 md:text-2xl">
                {svc.label}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section
        title={<>Where we are vs. where we're going.</>}
        subtitle="Every channel works the same way: identify the gap, build the engine, optimize relentlessly."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-rose-300">
              The Gap Today
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink-100">
              {svc.problem}
            </p>
          </Card>
          <Card strong>
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-300">
              How We Fix It
            </div>
            <p className="mt-3 text-base leading-relaxed text-ink-50">
              {svc.solution}
            </p>
          </Card>
        </div>
      </Section>

      <Section
        title={<>The four pillars.</>}
        subtitle="Every program is built on these foundations. Tweaked per brand, never skipped."
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
        title={<>What's included every month.</>}
        subtitle="No surprises, no upcharges. This is the deliverables list."
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

          {cfg.monthlyPrice > 0 && (
            <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <span className="text-xs uppercase tracking-widest text-ink-300">
                Standalone monthly
              </span>
              <span className="text-xl font-semibold text-ink-50">
                ${cfg.monthlyPrice.toLocaleString()}
                <span className="ml-1 text-xs font-normal text-ink-300">
                  / month
                </span>
              </span>
            </div>
          )}
        </Card>
      </Section>

      <PageNav current={svc.route} />
    </>
  );
}
