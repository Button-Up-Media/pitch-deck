import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import {
  EyeOff,
  Users,
  Search,
  Globe,
  LineChart,
  Layers,
} from "lucide-react";

const OPPORTUNITIES = [
  {
    icon: Users,
    title: "Weak organic social presence",
    body: "Posting is sporadic, the content looks generic, and engagement has plateaued. Followers are watching but not converting into a community of regulars.",
    accent: "from-pink-400/30 to-rose-500/30 text-rose-200 ring-rose-300/20",
  },
  {
    icon: Globe,
    title: "Thin online presence overall",
    body: "Outside of social, the digital footprint is missing. The website is dated, the Google Business Profile hasn't been touched in months, and AI search engines can't even find the brand by name.",
    accent: "from-cyan-400/30 to-blue-500/30 text-cyan-200 ring-cyan-300/20",
  },
  {
    icon: Search,
    title: "Poor discoverability on search",
    body: "When guests search for 'best [cuisine] in [city],' a competitor shows up — even though the food and experience here are stronger. The menus aren't ranking, the schema is missing, and the local pack is dominated by someone else.",
    accent: "from-amber-400/30 to-orange-500/30 text-amber-200 ring-amber-300/20",
  },
  {
    icon: EyeOff,
    title: "Hard-to-find online presence",
    body: "Even people who know the brand have trouble finding the right link. Old menus rank above the new site, third-party listings outrank owned channels, and ChatGPT recommends the wrong restaurant.",
    accent: "from-violet-400/30 to-purple-500/30 text-violet-200 ring-violet-300/20",
  },
  {
    icon: LineChart,
    title: "No conversion tracking, no attribution",
    body: "Reservations, orders, and form fills aren't being tracked. There's no pixel firing, no conversion API, no way to know which dollar produced which booking. So every marketing spend is a guess.",
    accent: "from-emerald-300/30 to-teal-500/30 text-emerald-200 ring-emerald-300/20",
  },
  {
    icon: Layers,
    title: "Vendor sprawl killing momentum",
    body: "One agency for social, another for ads, a freelancer for the website. Four invoices, four versions of the strategy, zero coordination. Channels that should reinforce each other are working in silos.",
    accent: "from-indigo-400/30 to-blue-500/30 text-indigo-200 ring-indigo-300/20",
  },
];

export function OpportunitiesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
      <Section
        eyebrow="The Opportunities"
        title={
          <>
            <span className="block">Where the leverage is.</span>
            <span className="block shimmer-text">Six gaps, one program.</span>
          </>
        }
        subtitle="Hospitality marketing rarely fails because of effort. It fails because of fragmentation. Here is exactly where most operators are leaving covers — and revenue — on the table."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {OPPORTUNITIES.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <Card className="h-full">
              <div
                className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${o.accent} ring-1`}
              >
                <o.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink-50">
                {o.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {o.body}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-16 max-w-3xl rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-teal-500/10 p-8 text-center md:p-10"
      >
        <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
          The unifying theme
        </div>
        <p className="mt-3 text-pretty text-2xl font-medium text-ink-50 md:text-3xl">
          None of these are unfixable. They're just being fixed in pieces, by
          different people, on different timelines.
        </p>
        <p className="mt-3 text-sm text-ink-200">
          The next slide shows the operating model that ties all of this
          together.
        </p>
      </motion.div>
    </section>
  );
}
