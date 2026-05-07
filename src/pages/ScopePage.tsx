import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import { Check, Calendar, FileSignature, Rocket } from "lucide-react";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";

const PHASES = [
  {
    icon: FileSignature,
    title: "Week 0 — Sign & Onboard",
    body: "Contract, kickoff call, brand asset transfer, access provisioning, and 30/60/90 plan delivered.",
  },
  {
    icon: Rocket,
    title: "Weeks 1–4 — Build & Launch",
    body: "Tracking installed, campaigns built, first content shot, websites and ad accounts live.",
  },
  {
    icon: Calendar,
    title: "Month 2+ — Optimize & Scale",
    body: "Weekly creative refreshes, monthly strategy reviews, quarterly leadership read-outs.",
  },
];

export function ScopePage() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const useBundle = config.bundle.enabled;

  const standaloneTotal = enabled.reduce(
    (sum, k) => sum + config.services[k].monthlyPrice,
    0
  );
  const monthlyTotal = useBundle
    ? config.bundle.monthlyPrice +
      enabled
        .filter((k) => !["organicSocial", "paidSocial", "websiteCreation"].includes(k))
        .reduce((sum, k) => sum + config.services[k].monthlyPrice, 0)
    : standaloneTotal;

  return (
    <>
      <Section
        eyebrow="Scope & Sign"
        title={<>Ready when you are.</>}
        subtitle="Everything you need to make a decision — what's included, what it costs, and what happens after we sign."
      />

      <div className="mx-auto max-w-7xl px-6">
        <Card strong>
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
                What's included
              </div>
              <ul className="mt-4 space-y-2.5">
                {useBundle && (
                  <li className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                      <Check className="size-3" strokeWidth={3} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-ink-50">
                        All-In-One Bundle
                      </div>
                      <div className="text-xs text-ink-300">
                        Organic social, paid ads, website
                      </div>
                    </div>
                  </li>
                )}
                {enabled
                  .filter(
                    (k) =>
                      !useBundle ||
                      !["organicSocial", "paidSocial", "websiteCreation"].includes(
                        k
                      )
                  )
                  .map((k) => (
                    <li key={k} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-ink-50">
                          {SERVICES[k].label}
                        </div>
                        <div className="text-xs text-ink-300">
                          {SERVICES[k].subhead}
                        </div>
                      </div>
                    </li>
                  ))}
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                    <Check className="size-3" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink-50">
                      Cross-channel reporting dashboard
                    </div>
                    <div className="text-xs text-ink-300">
                      Live data, monthly reviews, plain-English insights
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-ink-700/80 to-ink-800/80 p-6 ring-1 ring-white/10">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-ink-300">
                  Monthly investment
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-ink-50">
                  ${monthlyTotal.toLocaleString()}
                </span>
                <span className="text-ink-300">/ month</span>
              </div>

              <div className="mt-6 grid gap-2 text-sm">
                <Row label="Setup fee" value={`$${config.scope.setupFee.toLocaleString()}`} note="One-time" />
                <Row
                  label="Initial term"
                  value={`${config.scope.contractMonths} months`}
                  note="Then month-to-month"
                />
                <Row
                  label="Start date"
                  value={config.scope.startDate}
                  note="From signature"
                />
                <Row label="Brands covered" value={`${config.brands.length}`} />
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`mailto:${config.agency.contactEmail}?subject=Pitch%20Deck%20Sign-off`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-ink-200 to-ink-50 px-5 py-3 text-sm font-semibold text-ink-900 shadow-lg transition hover:shadow-ink-200/30"
                >
                  Sign & Schedule Kickoff
                </a>
                <a
                  href={`tel:${config.agency.contactPhone.replace(/[^0-9]/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-ink-100 transition hover:bg-white/10"
                >
                  Have a few questions first
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Section
        title={<>From signature to live in 30 days.</>}
        subtitle="Here's exactly how the first 90 days unfold so there are no surprises."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {PHASES.map((p, i) => (
            <Card key={p.title} delay={i * 0.06}>
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-ink-200 to-ink-400 text-ink-900">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-50">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-200">{p.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title={<>One last thing.</>}
        subtitle={`Whichever direction ${config.client.shortName} chooses, ${config.agency.name} is already cheering for you. We'd love to be the team that helps you get there.`}
      >
        <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-teal-500/10 p-8 text-center">
          <p className="text-pretty text-2xl font-medium text-ink-50">
            "Marketing isn't a vendor relationship. It's a partnership."
          </p>
          <p className="mt-3 text-sm text-ink-200">
            — {config.agency.name}
          </p>
        </div>
      </Section>

      <PageNav current="/scope" />
    </>
  );
}

function Row({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
      <span className="text-ink-300">{label}</span>
      <span className="text-right text-ink-100">
        {value}
        {note && (
          <span className="ml-2 text-[10px] uppercase tracking-widest text-ink-400">
            {note}
          </span>
        )}
      </span>
    </div>
  );
}
