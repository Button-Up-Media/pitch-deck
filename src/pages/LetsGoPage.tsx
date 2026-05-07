import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { config } from "../config/client";
import { SERVICE_ORDER } from "../config/services";
import {
  Check,
  Sparkles,
  Phone,
  Megaphone,
  Target,
  Globe,
} from "lucide-react";

function blank(value: number | null, prefix = "$") {
  if (value === null || value === 0)
    return (
      <span className="rounded-md border border-dashed border-ink-300/50 bg-white/[0.02] px-3 py-1 text-base text-ink-300">
        ____
      </span>
    );
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
    body: "Bundling organic, paid, and the website into a single program costs less than running the same services as three separate engagements.",
  },
  {
    title: "All three channels reinforce each other",
    body: "The compound effect we walked through in the ecosystem slide — that only happens when one team owns all three. Otherwise channels work in silos.",
  },
  {
    title: "One point of contact for everything",
    body: "Stop translating between vendors who don't talk to each other. One strategist, one Slack channel, one weekly call covering the entire program.",
  },
  {
    title: "Single source of truth on data",
    body: "Pixels, attribution, and reporting all live in one place. No more debating whose dashboard to trust.",
  },
];

export function LetsGoPage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <Section
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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
      >
        <Card strong className="overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <Sparkles className="size-3" />
                Recommended for {config.client.shortName}
              </div>

              <h3 className="mt-5 text-3xl font-semibold text-ink-50 md:text-4xl">
                The All-In-One Program
              </h3>
              <p className="mt-3 max-w-xl text-ink-200">
                The fastest way to fix every gap from the Opportunities slide,
                the cleanest way to operate, and almost always the cheapest. One
                contract, one invoice, one strategist who owns the whole picture.
              </p>

              <div className="mt-7 grid gap-2.5">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-pink-400 to-rose-500">
                    <Megaphone className="size-4 text-ink-900" />
                  </div>
                  <div className="text-sm text-ink-100">
                    Organic Social — community + content engine
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-400 to-purple-500">
                    <Target className="size-4 text-ink-900" />
                  </div>
                  <div className="text-sm text-ink-100">
                    Paid Media — Meta, TikTok, and Google in lockstep
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                    <Globe className="size-4 text-ink-900" />
                  </div>
                  <div className="text-sm text-ink-100">
                    Website — built and maintained as the conversion point
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-ink-700/80 to-ink-800/80 p-6 ring-1 ring-white/10 md:p-8">
              <div className="text-xs uppercase tracking-widest text-ink-300">
                The Investment
              </div>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-ink-50">
                  {blank(config.bundle.monthlyPrice)}
                </span>
                <span className="text-sm text-ink-300">/ month</span>
              </div>
              <p className="mt-1 text-xs text-ink-400">
                All channels, fully managed. Ad spend billed separately at cost.
              </p>

              <div className="mt-6 grid gap-2 text-sm">
                <Row
                  label="One-time setup"
                  value={blank(config.bundle.setupFee)}
                />
                <Row
                  label="Initial term"
                  value={
                    config.bundle.contractMonths
                      ? `${config.bundle.contractMonths} months`
                      : blank(null, "")
                  }
                />
                <Row
                  label="Brands covered"
                  value={`${config.brands.length}`}
                />
                <Row label="Services" value={`${enabled.length}`} />
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
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-100 transition hover:bg-white/10"
                >
                  <Phone className="size-4" />
                  Talk it through first
                </a>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      <Section
        title={<>Why this is the option to choose.</>}
        subtitle="It's not just bundling for the sake of bundling. There are four real reasons most clients land here."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <Card key={r.title} delay={i * 0.06}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                  <Check className="size-3.5" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-50">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-200">
                    {r.body}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-12 max-w-3xl rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-teal-500/10 p-8 text-center md:p-12"
      >
        <p className="text-pretty text-2xl font-medium text-ink-50 md:text-3xl">
          Marketing isn't a vendor relationship. It's a partnership — and from
          the second this is signed, your win is our only metric.
        </p>
        <p className="mt-4 text-sm text-ink-200">— {config.agency.name}</p>
      </motion.div>
    </section>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5">
      <span className="text-ink-300">{label}</span>
      <span className="text-right text-ink-100">{value}</span>
    </div>
  );
}
