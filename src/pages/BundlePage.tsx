import { Megaphone, Globe, Target, Sparkles, Check, Phone } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import { config } from "../config/client";

const PILLARS = [
  {
    icon: Megaphone,
    title: "Organic Social",
    body: "Daily presence, community, and brand-building content that warms the audience your ads will eventually convert.",
    accent: "from-pink-400 to-rose-500",
  },
  {
    icon: Target,
    title: "Paid Advertising",
    body: "Conversion-driven Meta, TikTok, and Google campaigns that put your best content in front of the right people at the right time.",
    accent: "from-violet-400 to-purple-500",
  },
  {
    icon: Globe,
    title: "Website",
    body: "The destination every channel points toward. Fast, mobile-first, conversion-optimized — turning interest into reservations.",
    accent: "from-cyan-400 to-blue-500",
  },
];

const STANDALONE_TOTAL = 2500 + 3500 + 0;

export function BundlePage() {
  const totalSavings = config.bundle.savings;
  return (
    <>
      <Section
        eyebrow="The All-In-One Package"
        title={
          <>
            <span className="block">Three channels.</span>
            <span className="block shimmer-text">One growth engine.</span>
          </>
        }
        subtitle="Organic social, paid advertising, and your website are not three separate strategies. They are one system that grows or stalls together. The bundle reflects that — one team, one fee, one accountable point of contact."
      />

      <div className="mx-auto max-w-7xl px-6">
        <Card strong className="overflow-hidden">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                <Sparkles className="size-3" />
                Recommended for {config.client.shortName}
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-ink-50 md:text-4xl">
                The Full Marketing Bundle
              </h3>
              <p className="mt-3 text-ink-200">
                Organic social + paid ads + website, fully integrated and
                managed by a single strategy team. The cleanest way to operate
                a multi-channel marketing program without the chaos of multiple
                vendors.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-100">
                {[
                  "One contract, one invoice, one point of contact",
                  "One unified strategy across all three channels",
                  "Shared creative pipeline — content shoots feed every channel",
                  "Single dashboard with cross-channel attribution",
                  "Quarterly strategy reviews with leadership",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-300/20 text-emerald-300 ring-1 ring-emerald-300/30">
                      <Check className="size-3" strokeWidth={3} />
                    </div>
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-ink-700/80 to-ink-800/80 p-6 ring-1 ring-white/10">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-widest text-ink-300">
                  Bundle Monthly
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-300">
                  Save ${totalSavings.toLocaleString()}/mo
                </span>
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-5xl font-semibold text-ink-50">
                  ${config.bundle.monthlyPrice.toLocaleString()}
                </span>
                <span className="text-ink-300">/ month</span>
              </div>
              <div className="mt-3 text-xs text-ink-300">
                A la carte equivalent: $
                {(STANDALONE_TOTAL + totalSavings).toLocaleString()}/month
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-ink-200">Organic Social</span>
                  <Check className="size-4 text-emerald-300" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-ink-200">Paid Advertising</span>
                  <Check className="size-4 text-emerald-300" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <span className="text-ink-200">Website Build</span>
                  <Check className="size-4 text-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Section
        title={<>Why these three together — not separately.</>}
        subtitle="Each channel has a job. Skip one and the others have to work twice as hard for half the result."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Card key={p.title} delay={i * 0.06}>
              <div
                className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent}`}
              >
                <p.icon className="size-6 text-ink-900" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {p.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-ink-700/40 to-ink-800/40 p-8">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
            The compound effect
          </div>
          <p className="mt-3 text-pretty text-xl text-ink-50 md:text-2xl">
            Organic social warms cold audiences so paid ads convert cheaper.
            Paid ads send traffic to a website built to capture it. The website
            captures the lead so social and ads have someone to retarget. If one
            of these is broken, the other two leak money.
          </p>
        </div>
      </Section>

      <Section
        title={<>One contact. Zero coordination tax.</>}
        subtitle="Stop translating between vendors who don't talk to each other. One strategist owns the whole program — from ad creative to landing page to caption."
      >
        <Card strong className="mx-auto flex max-w-3xl items-center gap-5">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-ink-200 to-ink-400">
            <Phone className="size-6 text-ink-900" />
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-50">
              Direct line, one Slack channel, one weekly call.
            </div>
            <div className="text-sm text-ink-200">
              No more "let me check with the social team" while the ads team is
              doing the opposite. One brain, one plan, one execution layer.
            </div>
          </div>
        </Card>
      </Section>

      <PageNav current="/bundle" />
    </>
  );
}
