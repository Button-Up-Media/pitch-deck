import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  Globe,
  ArrowRight,
  Users,
  Zap,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

type Channel = {
  icon: LucideIcon;
  label: string;
  role: string;
  speed: string;
  speedNote: string;
  job: string;
  bullets: string[];
  accent: string;
  ring: string;
  glow: string;
};

const CHANNELS: Channel[] = [
  {
    icon: Megaphone,
    label: "Organic Social",
    role: "The community builder",
    speed: "Slow burn",
    speedNote: "Months, then years of compounding interest",
    job: "Earn attention, build affinity, humanize the brand. Not selling — entertaining, informing, and creating a reason to care.",
    bullets: [
      "Content that doesn't sell directly — it humors, informs, educates, or engages",
      "Turns casual scrollers into followers, then followers into fans",
      "Warms the audience that paid ads will eventually retarget",
      "Compounds — every post adds to the bank of brand equity",
    ],
    accent: "from-pink-400 to-rose-500",
    ring: "ring-rose-300/30",
    glow: "shadow-rose-500/20",
  },
  {
    icon: Target,
    label: "Paid Media",
    role: "The conversion machine",
    speed: "Fast lane",
    speedNote: "Days, with hard numbers behind every dollar",
    job: "Take hot leads — people already searching or scrolling for what you sell — and convert them now. Trackable, measurable, and ruthlessly efficient.",
    bullets: [
      "Google Ads catches high-intent search traffic at the moment of decision",
      "Meta and TikTok ads convert warm audiences into bookings within days",
      "Every dollar tracked to a reservation, order, or call",
      "The fastest, most measurable channel — perfect for direct revenue",
    ],
    accent: "from-violet-400 to-purple-500",
    ring: "ring-violet-300/30",
    glow: "shadow-violet-500/20",
  },
  {
    icon: Globe,
    label: "Website",
    role: "The conversion point",
    speed: "Always on",
    speedNote: "The destination every other channel points toward",
    job: "Where revenue actually lands. Every ad click, every social follower, every Google searcher ends up here — so this is where the money is made or lost.",
    bullets: [
      "Mobile-first design built for one-thumb conversion",
      "SEO so guests searching for the brand find the brand",
      "AEO (answer engine optimization) so ChatGPT and Perplexity recommend the brand by name",
      "Reservations, ordering, and inquiries wired in cleanly — no friction",
    ],
    accent: "from-cyan-400 to-blue-500",
    ring: "ring-cyan-300/30",
    glow: "shadow-cyan-500/20",
  },
];

export function EcosystemPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <Section
        eyebrow="The Ecosystem"
        title={
          <>
            <span className="block">Three channels.</span>
            <span className="block shimmer-text">One living organism.</span>
          </>
        }
        subtitle="Marketing isn't three separate disciplines bolted together. Done right, it's a single ecosystem — organic social, paid media, and the website all pulling in the same direction. When one is weak, the others suffer. When all three are tuned, every channel performs better than the sum of its parts."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {CHANNELS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <Card strong className="relative h-full overflow-hidden">
              <div
                className={`absolute -right-20 -top-20 size-48 rounded-full bg-gradient-to-br ${c.accent} opacity-20 blur-3xl`}
              />
              <div
                className={`relative flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.accent} shadow-xl ${c.glow}`}
              >
                <c.icon className="size-7 text-ink-900" strokeWidth={2.4} />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-ink-50">
                  {c.label}
                </h3>
                <span
                  className={`rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-ink-200 ring-1 ${c.ring}`}
                >
                  {c.speed}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-ink-200">
                {c.role}
              </div>
              <p className="mt-1 text-xs text-ink-300">{c.speedNote}</p>

              <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-[10px] font-medium uppercase tracking-widest text-ink-300">
                  The job
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-100">
                  {c.job}
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 text-sm text-ink-200">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      className={`mt-1.5 block size-1.5 shrink-0 rounded-full bg-gradient-to-r ${c.accent}`}
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      <Section
        title={<>How they feed each other.</>}
        subtitle="The compound effect — why pulling on one channel without the others is a losing game."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <FlowCard
            from="Organic Social"
            to="Paid Media"
            icon={Users}
            body="Months of organic content build the audience. Paid ads then retarget that audience for a fraction of cold-traffic cost."
            color="from-rose-400 via-violet-400 to-purple-500"
          />
          <FlowCard
            from="Paid Media"
            to="Website"
            icon={Zap}
            body="Paid clicks land on the site. The site converts them — or doesn't. A weak website is a leaking bucket no ad budget can fill."
            color="from-violet-400 via-cyan-400 to-blue-500"
          />
          <FlowCard
            from="Website"
            to="Organic Social"
            icon={Layers}
            body="The site captures emails, points, and reservations. Those guests become future content subjects, retargeting audiences, and loyal followers."
            color="from-cyan-400 via-emerald-300 to-teal-500"
          />
        </div>
      </Section>

      <Section
        title={<>Pull on one. The others move with it.</>}
        subtitle="This is why the rest of the deck is structured as one program — not three line items."
      >
        <Card strong className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-3">
            <Health
              label="If organic social is weak"
              body="Paid ads run cold. CPMs go up, conversion rates go down, and the website has fewer warm visitors to convert."
            />
            <Health
              label="If paid media is weak"
              body="The slow burn of social never reaches direct revenue fast enough. Cash flow lags behind brand momentum."
            />
            <Health
              label="If the website is weak"
              body="Both channels send traffic into a leaking bucket. Best content and best ads don't matter — the conversion never happens."
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-200">
            <span>One ecosystem. One team. One point of accountability.</span>
            <ArrowRight className="size-4 text-emerald-300" />
          </div>
        </Card>
      </Section>
    </section>
  );
}

function FlowCard({
  from,
  to,
  icon: Icon,
  body,
  color,
}: {
  from: string;
  to: string;
  icon: LucideIcon;
  body: string;
  color: string;
}) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-xs text-ink-200">
        <span className="rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-white/10">
          {from}
        </span>
        <ArrowRight className="size-3 text-ink-300" />
        <span className="rounded-full bg-white/5 px-2 py-0.5 ring-1 ring-white/10">
          {to}
        </span>
      </div>
      <div
        className={`mt-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${color}`}
      >
        <Icon className="size-5 text-ink-900" strokeWidth={2.4} />
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-200">{body}</p>
    </Card>
  );
}

function Health({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-[10px] font-medium uppercase tracking-widest text-rose-300">
        {label}
      </div>
      <p className="mt-2 text-sm text-ink-100">{body}</p>
    </div>
  );
}
