import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import { AlertTriangle, EyeOff, LineChart, Users } from "lucide-react";

const PROBLEMS = [
  {
    icon: EyeOff,
    title: "You're invisible to high-intent guests",
    body: "Diners are searching, scrolling, and asking AI for recommendations every day. If you're not showing up in those moments — with strong content, paid placement, and SEO — a competitor is.",
  },
  {
    icon: Users,
    title: "Your social presence isn't pulling its weight",
    body: "Inconsistent posting, generic captions, and zero engagement turn social from a growth channel into a vanity exercise. Followers don't pay rent — fans do.",
  },
  {
    icon: LineChart,
    title: "You can't tell what's actually working",
    body: "Without proper tracking, attribution, and reporting, you're guessing where every marketing dollar goes. That makes it impossible to scale what works and cut what doesn't.",
  },
  {
    icon: AlertTriangle,
    title: "Vendor sprawl is killing momentum",
    body: "A different agency for social, ads, web, and SEO means four different stories, four invoices, and zero coordination. Marketing channels that should reinforce each other are working in silos.",
  },
];

export function ProblemPage() {
  return (
    <>
      <Section
        eyebrow="The Opportunity"
        title={<>The cost of a fragmented marketing stack.</>}
        subtitle="Hospitality marketing fails not from lack of effort, but from lack of integration. Here's where most operators are leaving money on the table — and what we'll fix together."
      />

      <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2">
        {PROBLEMS.map((p, i) => (
          <Card key={p.title} delay={i * 0.06}>
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-400/20 to-amber-400/20 text-rose-300 ring-1 ring-rose-300/20">
                <p.icon className="size-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-50">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-200">
                  {p.body}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Section
        title={<>The fix: one team, every channel, one strategy.</>}
        subtitle="The next pages walk through exactly how we solve each of these — channel by channel — and what it looks like when they all work together."
      >
        <div className="mx-auto max-w-3xl rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-teal-500/10 p-8 text-center">
          <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
            Our Approach
          </div>
          <p className="mt-3 text-2xl font-medium text-ink-50 md:text-3xl">
            Marketing channels are like a band. Solo, each is fine. Together,
            they're a hit.
          </p>
          <p className="mt-3 text-sm text-ink-200">
            Organic social, paid ads, and a strong website don't compete — they
            multiply each other. When all three are tuned, every channel
            performs better than the sum of its parts.
          </p>
        </div>
      </Section>

      <PageNav current="/problem" />
    </>
  );
}
