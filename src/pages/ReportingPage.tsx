import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import {
  BarChart3,
  Eye,
  Users,
  TrendingUp,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { config } from "../config/client";

const KPIS = [
  { label: "Reach", value: "1.2M", trend: "+18%", icon: Eye },
  { label: "Engagements", value: "42K", trend: "+24%", icon: Users },
  { label: "Cost per booking", value: "$8.40", trend: "-22%", icon: TrendingUp },
  { label: "Reservations", value: "1,847", trend: "+31%", icon: Calendar },
];

export function ReportingPage() {
  return (
    <>
      <Section
        eyebrow="Reporting & Dashboard"
        title={
          <>
            <span className="block">One dashboard.</span>
            <span className="block shimmer-text">Every channel. Every brand.</span>
          </>
        }
        subtitle="Pull numbers from Meta, TikTok, Google Ads, GA4, and your reservation system into a single source of truth — sliceable by brand, channel, and time period."
      />

      <div className="mx-auto max-w-7xl px-6">
        <Card strong className="overflow-hidden">
          <div className="grid gap-4 md:grid-cols-4">
            {KPIS.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between text-ink-200">
                  <k.icon className="size-4" />
                  <span className="text-[10px] font-semibold text-emerald-300">
                    {k.trend}
                  </span>
                </div>
                <div className="mt-3 text-2xl font-semibold text-ink-50 md:text-3xl">
                  {k.value}
                </div>
                <div className="text-xs text-ink-300">{k.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-xs font-medium uppercase tracking-widest text-ink-300">
                Cross-channel performance — last 30 days
              </div>
              <div className="text-[10px] text-ink-400">Sample data</div>
            </div>
            <FakeChart />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {config.brands.map((brand, i) => (
              <div
                key={brand.name}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between text-xs text-ink-300">
                  <span>{brand.name}</span>
                  <span className="text-emerald-300">
                    +{12 + i * 4}% vs prev
                  </span>
                </div>
                <div className="mt-2 text-lg font-semibold text-ink-50">
                  ${(28 + i * 6).toFixed(1)}K
                </div>
                <div className="text-xs text-ink-400">attributed revenue</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Section
        title={<>What you actually get.</>}
        subtitle="Every report is built around three questions: what's working, what's not, and what we're going to do about it next."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <BarChart3 className="size-5 text-cyan-300" />
            <h3 className="mt-3 text-base font-semibold text-ink-50">
              Live Dashboard
            </h3>
            <p className="mt-1 text-sm text-ink-200">
              24/7 access to all KPIs across every brand and channel. No more
              waiting for end-of-month decks.
            </p>
          </Card>
          <Card delay={0.06}>
            <Calendar className="size-5 text-violet-300" />
            <h3 className="mt-3 text-base font-semibold text-ink-50">
              Monthly Strategy Review
            </h3>
            <p className="mt-1 text-sm text-ink-200">
              A 60-minute call with leadership covering wins, losses, and the
              plan for the next 30 days. Documented and shareable.
            </p>
          </Card>
          <Card delay={0.12}>
            <ShieldCheck className="size-5 text-emerald-300" />
            <h3 className="mt-3 text-base font-semibold text-ink-50">
              Plain-English Insights
            </h3>
            <p className="mt-1 text-sm text-ink-200">
              No jargon dumps. Every number is paired with what it means and
              what we recommend doing about it.
            </p>
          </Card>
        </div>
      </Section>

      <PageNav current="/reporting" />
    </>
  );
}

function FakeChart() {
  const points = [22, 30, 26, 38, 34, 42, 47, 44, 52, 58, 54, 62];
  const max = 65;
  return (
    <div className="relative h-44 w-full">
      <svg
        viewBox="0 0 600 180"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8a98c4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4a5a94" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          fill="none"
          stroke="#d9deeb"
          strokeWidth="2.5"
          points={points
            .map(
              (p, i) =>
                `${(i / (points.length - 1)) * 600},${180 - (p / max) * 160}`
            )
            .join(" ")}
        />
        <polygon
          fill="url(#grad)"
          points={`0,180 ${points
            .map(
              (p, i) =>
                `${(i / (points.length - 1)) * 600},${180 - (p / max) * 160}`
            )
            .join(" ")} 600,180`}
        />
      </svg>
    </div>
  );
}
