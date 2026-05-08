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
      <span className="inline-block rounded-md border border-dashed border-cream-300/40 bg-bg-2 px-3 py-1 text-base font-normal text-cream-300">
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
    accent: "from-coral to-gold-500",
  },
  {
    icon: Target,
    label: "Paid Media",
    sub: "Meta, TikTok, and Google in lockstep",
    accent: "from-teal to-gold-500",
  },
  {
    icon: Globe,
    label: "Website",
    sub: "The conversion point, fully maintained",
    accent: "from-gold-400 to-gold-600",
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
        subtitle={`The all-in-one program for ${config.client.name}: every channel in this deck wrapped into a single engagement, with one team and one number.`}
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
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-soft px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-400">
                <Sparkles className="size-3" />
                Recommended for {config.client.shortName}
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-cream-50 md:text-4xl lg:text-5xl">
                The All-In-One Program
              </h3>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream-200 md:text-base">
                The fastest way to fix every gap from the Opportunities slide,
                the cleanest way to operate, and almost always the cheapest.
                One contract, one invoice, one strategist who owns the whole
                picture.
              </p>

              <div className="mt-8 space-y-3">
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-4 rounded-xl border border-line bg-bg-2 p-4"
                  >
                    <div
                      className={`flex size-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} shadow-md`}
                    >
                      <p.icon className="size-5 text-bg-0" strokeWidth={2.4} />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-cream-50">
                        {p.label}
                      </div>
                      <div className="text-xs text-cream-300">{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-gold-500/20 bg-gradient-to-br from-bg-3 to-bg-2 p-6 md:p-8">
              <div className="eyebrow">The Investment</div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="stat-num text-5xl md:text-6xl">
                  {blank(config.bundle.monthlyPrice)}
                </span>
                <span className="text-sm text-cream-300">/ month</span>
              </div>
              <p className="mt-1 text-xs text-cream-300">
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
                  href={`mailto:${config.agency.contactEmail}?subject=Pitch%20deck:%20Let's%20go`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-400 to-gold-500 px-5 py-3 text-sm font-bold text-bg-0 shadow-lg transition hover:from-gold-300 hover:to-gold-400"
                >
                  Sign & Schedule Kickoff
                </a>
                <a
                  href={`tel:${config.agency.contactPhone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-bg-2 px-5 py-3 text-sm font-medium text-cream-100 transition hover:bg-bg-3"
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
          subtitle="It's not just bundling for the sake of bundling. These are the structural advantages that show up the second the program is live."
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
                  <div className="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/30">
                    <Check className="size-3.5 text-gold-400" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-cream-50 md:text-lg">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-cream-200">
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
        className="mt-16 rounded-3xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-coral/5 p-8 md:mt-20 md:p-12"
      >
        <p className="font-accent max-w-3xl text-balance text-2xl italic leading-snug text-cream-50 md:text-3xl">
          "Marketing isn't a vendor relationship. It's a partnership, and from
          the moment this is signed, your win is our only metric."
        </p>
        <HrSoft className="my-6" />
        <p className="text-sm text-cream-300">{config.agency.name}</p>
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
    <div className="flex items-baseline justify-between border-t border-line-soft py-2.5 first:border-t-0">
      <span className="text-sm text-cream-300">{label}</span>
      <span className="text-right text-sm font-medium text-cream-100">{value}</span>
    </div>
  );
}
