import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Phone,
  Megaphone,
  Target,
  Globe,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Panel, HrSoft } from "../components/Panel";
import { config } from "../config/client";
import { SERVICE_ORDER } from "../config/services";

function blank(value: number | null, prefix = "$") {
  if (value === null || value === 0) {
    return (
      <span className="inline-block rounded-md border border-dashed border-ink-300/40 bg-ink-700/30 px-3 py-1 text-base font-normal text-ink-300">
        ____
      </span>
    );
  }
  return (
    <span>
      {prefix}
      {value.toLocaleString()}
    </span>
  );
}

const REASONS = [
  {
    title: "It's the cheapest option that solves everything",
    body: "Bundling organic, paid, and the website into a single program costs less than running them as three separate engagements.",
  },
  {
    title: "All three channels reinforce each other",
    body: "The compound effect from the ecosystem slide only happens when one team owns all three. Otherwise channels work in silos.",
  },
  {
    title: "One point of contact for everything",
    body: "Stop translating between vendors. One strategist, one Slack channel, one weekly call covering the entire program.",
  },
  {
    title: "Single source of truth on data",
    body: "Pixels, attribution, and reporting all live in one place. No more debating whose dashboard to trust.",
  },
];

const PILLARS: { icon: LucideIcon; label: string; sub: string; accent: string }[] = [
  {
    icon: Megaphone,
    label: "Organic Social",
    sub: "Community + content engine",
    accent: "from-pink-400 to-rose-500",
  },
  {
    icon: Target,
    label: "Paid Media",
    sub: "Meta, TikTok, and Google in lockstep",
    accent: "from-violet-400 to-purple-500",
  },
  {
    icon: Globe,
    label: "Website",
    sub: "The conversion point, fully maintained",
    accent: "from-cyan-400 to-blue-500",
  },
];

export function LetsGoPage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-20 md:pb-28 lg:px-16 2xl:px-20">
      <SectionHeading
        eyebrow="Let's Go"
        title={
          <>
            <span className="block">Everything together.</span>
            <span className="block shimmer-text">One program. One price.</span>
          </>
        }
        subtitle={`The all-in-one program for ${config.client.name} — every channel in this deck wrapped into a single engagement, with one team and one number.`}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mt-12 md:mt-16"
      >
        <Panel motion={false}>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                <Sparkles className="size-3" />
                Recommended for {config.client.shortName}
              </div>

              <h3 className="mt-5 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-ink-50 md:text-4xl lg:text-5xl">
                The All-In-One Program
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-200/70 md:text-base">
                The fastest way to fix every gap from the Opportunities slide,
                the cleanest way to operate, and almost always the cheapest.
                One contract, one invoice, one strategist who owns the whole
                picture.
              </p>

              <div className="mt-8 space-y-3">
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-4 rounded-xl border border-ink-400/15 bg-ink-700/30 p-4"
                  >
                    <div
                      className={`flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} shadow-md`}
                    >
                      <p.icon className="size-5 text-ink-900" strokeWidth={2.4} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink-50">
                        {p.label}
                      </div>
                      <div className="text-xs text-ink-300/70">{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-ink-400/15 bg-gradient-to-br from-ink-700/70 to-ink-800/70 p-6 md:p-8">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-300/70">
                The Investment
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-ink-50 md:text-6xl">
                  {blank(config.bundle.monthlyPrice)}
                </span>
                <span className="text-sm text-ink-300/70">/ month</span>
              </div>
              <p className="mt-1 text-xs text-ink-300/60">
                All channels, fully managed. Ad spend billed separately at cost.
              </p>

              <div className="mt-6 space-y-1">
                <PriceRow
                  label="One-time setup"
                  value={blank(config.bundle.setupFee)}
                />
                <PriceRow
                  label="Initial term"
                  value={
                    config.bundle.contractMonths
                      ? `${config.bundle.contractMonths} months`
                      : blank(null, "")
                  }
                />
                <PriceRow
                  label="Brands covered"
                  value={`${config.brands.length}`}
                />
                <PriceRow label="Channels" value={`${enabled.length}`} />
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <a
                  href={`mailto:${config.agency.contactEmail}?subject=Pitch%20deck%20—%20Let's%20go`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ink-200 to-ink-50 px-5 py-3 text-sm font-semibold text-ink-900 shadow-lg transition hover:shadow-ink-200/30"
                >
                  Sign & Schedule Kickoff
                </a>
                <a
                  href={`tel:${config.agency.contactPhone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-ink-400/15 bg-ink-700/40 px-5 py-3 text-sm font-medium text-ink-100 transition hover:bg-ink-700/60"
                >
                  <Phone className="size-4" />
                  Talk it through first
                </a>
              </div>
            </div>
          </div>
        </Panel>
      </motion.div>

      <div className="mt-16 md:mt-20">
        <SectionHeading
          eyebrow="Why this option"
          title={<>Four reasons most clients land here.</>}
          subtitle="It's not just bundling for the sake of bundling — these are the structural advantages that show up the second the program is live."
        />
        <div className="mt-10 space-y-4 md:space-y-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <Panel padding="compact" motion={false}>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30">
                    <Check className="size-3.5 text-emerald-300" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink-50 md:text-lg">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-ink-200/70">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Panel>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-8 md:mt-20 md:p-12"
      >
        <p className="max-w-3xl text-balance text-2xl font-medium leading-snug text-ink-50 md:text-3xl">
          Marketing isn't a vendor relationship. It's a partnership — and from
          the moment this is signed, your win is our only metric.
        </p>
        <HrSoft className="my-6" />
        <p className="text-sm text-ink-200/60">— {config.agency.name}</p>
      </motion.div>
    </div>
  );
}

function PriceRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between border-t border-ink-400/10 py-2.5 first:border-t-0">
      <span className="text-sm text-ink-300/70">{label}</span>
      <span className="text-right text-sm font-medium text-ink-100">{value}</span>
    </div>
  );
}
