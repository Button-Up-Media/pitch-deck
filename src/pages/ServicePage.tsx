import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Panel, HrSoft } from "../components/Panel";
import { SERVICES } from "../config/services";
import type { ServiceKey } from "../config/client";

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const svc = SERVICES[serviceKey];
  const Icon = svc.icon;

  return (
    <div className="relative">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden md:h-[60vh]">
        <img
          src={svc.imageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:max-w-[60vw] md:px-16 md:pb-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex size-9 items-center justify-center rounded-lg bg-gradient-to-br ${svc.accent} shadow-lg`}
              >
                <Icon className="size-4 text-bg-0" strokeWidth={2.4} />
              </div>
              <div className="eyebrow">{svc.label}</div>
            </div>
            <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-cream-50 md:text-5xl lg:text-6xl">
              {svc.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-cream-200 md:text-[17px]">
              {svc.subhead}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-16 md:pb-28 lg:px-16 2xl:px-20">
        <Panel>
          <div className="eyebrow">Role in the ecosystem</div>
          <p className="mt-3 text-[15px] leading-relaxed text-cream-100 md:text-base">
            {svc.ecosystemRole}
          </p>
        </Panel>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Panel motion={false}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral">
              The gap today
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-200 md:text-base">
              {svc.problem}
            </p>
          </Panel>
          <Panel motion={false}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-500">
              How we close it
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-100 md:text-base">
              {svc.solution}
            </p>
          </Panel>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="The Four Pillars"
            title={<>Built on a foundation that doesn't move.</>}
            subtitle="Every program rests on these four. Tweaked per brand, never skipped."
          />
          <div className="mt-10 space-y-5">
            {svc.pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
              >
                <Panel padding="compact" motion={false}>
                  <div className="flex items-start gap-4 md:gap-6">
                    <div
                      className={`flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${svc.accent} font-display text-sm font-bold text-bg-0 shadow-md md:size-12 md:text-base`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-cream-50 md:text-lg">
                        {p.title}
                      </h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-cream-200">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Panel>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <SectionHeading
            eyebrow="What's Included"
            title={<>The full deliverables list.</>}
            subtitle="No surprise add-ons, no fine print. This is what lands every month."
          />
          <Panel className="mt-10">
            <ul className="space-y-4">
              {svc.deliverables.map((d, i) => (
                <li key={d}>
                  {i > 0 && <HrSoft className="mb-4" />}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30">
                      <Check className="size-3 text-gold-400" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] leading-relaxed text-cream-100">
                      {d}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
