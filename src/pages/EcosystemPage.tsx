import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  Globe,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Panel, HrSoft } from "../components/Panel";

type Channel = {
  icon: LucideIcon;
  number: string;
  label: string;
  role: string;
  speed: string;
  speedNote: string;
  job: string;
  bullets: { title: string; body: string }[];
  accentBar: string;
  iconBg: string;
  iconColor: string;
};

const CHANNELS: Channel[] = [
  {
    icon: Megaphone,
    number: "01",
    label: "Organic Social",
    role: "The community builder",
    speed: "Slow burn",
    speedNote: "Months that compound into years",
    job: "Earn attention, build affinity, humanize the brand. Not selling — entertaining, informing, and creating reasons for guests to follow, like, and care.",
    bullets: [
      {
        title: "Content that doesn't sell",
        body: "Reels, carousels, and Stories that humor, inform, educate, or engage — turning passive scrollers into a community.",
      },
      {
        title: "Compounding brand equity",
        body: "Every post is a deposit into the audience that paid ads will eventually retarget — at a fraction of cold-traffic cost.",
      },
      {
        title: "Cultural relevance",
        body: "Built around food holidays, local events, and trending audio so the brand rides the conversation instead of fighting it.",
      },
    ],
    accentBar: "from-pink-400 to-rose-500",
    iconBg: "bg-rose-500/10 ring-rose-400/20",
    iconColor: "text-rose-300",
  },
  {
    icon: Target,
    number: "02",
    label: "Paid Media",
    role: "The conversion machine",
    speed: "Fast lane",
    speedNote: "Days, with hard numbers behind every dollar",
    job: "Take hot leads — people already searching or scrolling for what you sell — and convert them now. The trackable, fast-moving channel.",
    bullets: [
      {
        title: "Direct response, fast feedback",
        body: "Meta and TikTok ads convert warm audiences within days. Google Ads catch high-intent search traffic at the moment of decision.",
      },
      {
        title: "Every dollar attributed",
        body: "Pixels, Conversions API, and reservation tracking tie each click to a booking, order, or call. No guesswork on ROI.",
      },
      {
        title: "Easily scaled or paused",
        body: "Performance feedback comes in days, not quarters. Scale what's working, kill what isn't, in the same week.",
      },
    ],
    accentBar: "from-violet-400 to-purple-500",
    iconBg: "bg-violet-500/10 ring-violet-400/20",
    iconColor: "text-violet-300",
  },
  {
    icon: Globe,
    number: "03",
    label: "Website",
    role: "The conversion point",
    speed: "Always on",
    speedNote: "The destination every channel points toward",
    job: "Where the revenue actually lands. Every ad click, every social follower, every searcher ends up here — so this is where the money is made or lost.",
    bullets: [
      {
        title: "Mobile-first conversion",
        body: "Every layout starts on a phone. Tap-friendly menus, one-thumb reservations, instant load times even on a 4G connection.",
      },
      {
        title: "SEO + AEO ready",
        body: "Schema, structured data, and clean copy so Google ranks the brand and AI engines (ChatGPT, Perplexity) recommend it by name.",
      },
      {
        title: "Wired for the rest of the stack",
        body: "Reservations, ordering, pixels, and analytics all installed and tested before launch. Nothing leaks.",
      },
    ],
    accentBar: "from-cyan-400 to-blue-500",
    iconBg: "bg-cyan-500/10 ring-cyan-400/20",
    iconColor: "text-cyan-300",
  },
];

export function EcosystemPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-20 md:pb-28 lg:px-16 2xl:px-20">
      <SectionHeading
        eyebrow="The Ecosystem"
        title={
          <>
            <span className="block">Three channels.</span>
            <span className="block shimmer-text">One living organism.</span>
          </>
        }
        subtitle="Marketing isn't three separate disciplines bolted together. Done right, it's a single ecosystem — organic social, paid media, and the website all pulling in the same direction. When one is weak the others suffer. When all three are tuned, every channel performs better than the sum of its parts."
      />

      <div className="mt-16 space-y-6 md:space-y-8">
        {CHANNELS.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.18) }}
          >
            <Panel motion={false}>
              <div className="mb-6 flex items-start gap-4 md:mb-8">
                <div
                  className={`h-16 w-1 flex-shrink-0 rounded-full bg-gradient-to-b ${c.accentBar}`}
                />
                <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl ring-1 ${c.iconBg}`}
                      >
                        <c.icon className={`size-5 ${c.iconColor}`} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono tracking-wider text-ink-300/60">
                          CHANNEL {c.number}
                        </div>
                        <h3 className="text-xl font-semibold text-ink-50 md:text-2xl">
                          {c.label}
                        </h3>
                        <div className="text-sm font-medium text-ink-200/70">
                          {c.role}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block rounded-full border border-ink-400/20 bg-ink-700/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-200">
                      {c.speed}
                    </span>
                    <div className="mt-1.5 text-xs text-ink-300/60">
                      {c.speedNote}
                    </div>
                  </div>
                </div>
              </div>

              <div className="ml-0 mb-6 rounded-xl border border-ink-400/10 bg-ink-700/20 p-4 md:ml-5 md:p-5">
                <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-300/60">
                  The job
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-100/85">
                  {c.job}
                </p>
              </div>

              <div className="ml-0 space-y-4 md:ml-5">
                {c.bullets.map((b, bi) => (
                  <div key={b.title}>
                    {bi > 0 && <HrSoft className="mb-4" />}
                    <div className="flex items-start gap-3 md:gap-4">
                      <div
                        className={`mt-1 h-12 w-0.5 flex-shrink-0 rounded-full bg-gradient-to-b ${c.accentBar} opacity-60`}
                      />
                      <div>
                        <div className="text-sm font-semibold text-ink-50">
                          {b.title}
                        </div>
                        <p className="mt-1 text-[15px] font-medium leading-relaxed text-ink-200/70">
                          {b.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 md:mt-20">
        <SectionHeading
          eyebrow="The compound effect"
          title={<>Pull on one. The others move with it.</>}
          subtitle="This is why the rest of the deck is structured as one program — not three line items."
        />

        <Panel className="mt-10">
          <div className="grid gap-6 md:grid-cols-3">
            <Health
              label="If organic social is weak"
              body="Paid ads run cold. CPMs go up, conversion rates drop, and the website has fewer warm visitors to convert."
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
          <HrSoft className="my-8" />
          <div className="flex items-center justify-center gap-2 text-sm text-ink-200/80">
            <span>One ecosystem. One team. One point of accountability.</span>
            <ArrowRight className="size-4 text-emerald-400" />
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Health({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-xl border border-rose-400/15 bg-rose-500/[0.04] p-5">
      <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-rose-300/80">
        {label}
      </div>
      <p className="mt-2.5 text-[15px] font-medium leading-relaxed text-ink-100/80">
        {body}
      </p>
    </div>
  );
}
