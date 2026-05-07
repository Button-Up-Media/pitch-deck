import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { Panel, HrSoft } from "../components/Panel";
import {
  EyeOff,
  Users,
  Search,
  Globe,
  LineChart,
  Layers,
  AlertCircle,
} from "lucide-react";

const OPPORTUNITIES = [
  {
    icon: Users,
    title: "Weak organic social presence",
    bullets: [
      "Posting cadence is sporadic and unbranded",
      "Content looks generic — could be any restaurant",
      "Comments and DMs go unanswered for days",
      "No system in place to turn followers into regulars",
    ],
  },
  {
    icon: Globe,
    title: "Thin online presence overall",
    bullets: [
      "Website is dated and slow on mobile",
      "Google Business Profile hasn't been updated in months",
      "AI search engines (ChatGPT, Perplexity) can't recommend the brand by name",
      "Third-party listings outrank the owned website",
    ],
  },
  {
    icon: Search,
    title: "Poor discoverability on search",
    bullets: [
      "Competitors appear above the brand for high-intent local searches",
      "Menu pages aren't indexed with proper schema markup",
      "Local pack on Google Maps is dominated by another concept",
      "Long-tail occasion searches (date night, brunch) go uncaptured",
    ],
  },
  {
    icon: EyeOff,
    title: "Hard-to-find online presence",
    bullets: [
      "Old or duplicate menus rank above the new site",
      "Reservations link is buried, not the first thing on mobile",
      "Reviews are scattered across platforms with no unified response",
      "Brand SEO is being intercepted by aggregators",
    ],
  },
  {
    icon: LineChart,
    title: "No conversion tracking, no attribution",
    bullets: [
      "Meta Pixel and Conversions API aren't installed",
      "Reservations and orders aren't tied to source channels",
      "Reporting is impressions and likes — not revenue",
      "Marketing spend is being approved without proof of return",
    ],
  },
  {
    icon: Layers,
    title: "Vendor sprawl killing momentum",
    bullets: [
      "A different agency or freelancer for each channel",
      "Four invoices, four versions of the strategy",
      "Channels work in silos and rarely reinforce each other",
      "Time spent translating between vendors instead of executing",
    ],
  },
];

export function OpportunitiesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-20 md:pb-28 lg:px-16 2xl:px-20">
      <SectionHeading
        eyebrow="The Opportunities"
        title={
          <>
            <span className="block">Where the leverage is.</span>
            <span className="block shimmer-text">Six gaps, one program.</span>
          </>
        }
        subtitle="Hospitality marketing rarely fails because of effort. It fails because of fragmentation. Below is exactly where most operators are leaving covers — and revenue — on the table."
      />

      <div className="mt-12 grid grid-cols-2 gap-x-12 gap-y-2 md:flex md:flex-wrap md:gap-x-14 md:gap-y-6">
        <BigStat value="6" label="Opportunity areas" caption="Mapped below" />
        <BigStat value="3" label="Marketing channels" caption="Affected by all six" />
        <BigStat value="1" label="Operating model" caption="Fixes them together" />
        <BigStat value="0" label="Single-channel cures" caption="Fragmentation can't be patched" />
      </div>

      <div className="mt-12 space-y-6 md:mt-16 md:space-y-8">
        {OPPORTUNITIES.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.25) }}
          >
            <Panel motion={false}>
              <div className="mb-5 flex items-start gap-3 md:mb-6 md:gap-4">
                <div className="flex size-9 flex-shrink-0 items-center justify-center rounded-xl bg-rose-500/10 ring-1 ring-rose-400/20 md:size-10">
                  <o.icon className="size-4 text-rose-300 md:size-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-rose-300/80">
                    Opportunity {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-ink-50 md:text-xl">
                    {o.title}
                  </h3>
                </div>
              </div>
              <div className="ml-0 space-y-4 md:ml-14">
                {o.bullets.map((b, bi) => (
                  <div key={b}>
                    {bi > 0 && <HrSoft className="mb-4" />}
                    <div className="flex items-start gap-3">
                      <div className="mt-1 size-1.5 flex-shrink-0 rounded-full bg-ink-200/40" />
                      <p className="text-[15px] font-medium leading-relaxed text-ink-200/70">
                        {b}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-10 flex items-center gap-3 rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-4 md:p-5"
      >
        <AlertCircle className="size-5 flex-shrink-0 text-emerald-400" />
        <p className="text-sm text-emerald-200 md:text-base">
          <span className="font-semibold text-emerald-100">
            None of these are unfixable.
          </span>{" "}
          They're being fixed in pieces, by different people. The next slide
          shows the operating model that ties them together.
        </p>
      </motion.div>
    </div>
  );
}

function BigStat({
  value,
  label,
  caption,
}: {
  value: string;
  label: string;
  caption: string;
}) {
  return (
    <div>
      <div className="stat-num text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-medium text-ink-200/80 md:text-sm">
        {label}
      </div>
      <div className="text-[10px] text-ink-300/60 md:text-xs">{caption}</div>
    </div>
  );
}
