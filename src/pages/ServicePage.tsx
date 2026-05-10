import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { Panel } from "../components/Panel";
import { DeviceMockupHero } from "../components/DeviceMockupHero";
import { DeviceMockupSplit } from "../components/DeviceMockupSplit";
import { GoogleAdsHero } from "../components/GoogleAdsHero";
import { CompactVideo } from "../components/CompactVideo";
import {
  PillarsNumbered,
  PillarsGrid,
  PillarsStack,
  PillarsFlow,
} from "../components/PillarsVariants";
import { SERVICES } from "../config/services";
import type { ServiceKey } from "../config/client";

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const svc = SERVICES[serviceKey];
  const Icon = svc.icon;

  // Different intro framings per service to break the templated feel
  const pillarsHeading = getPillarsHeading(serviceKey);

  // Renders the right hero background based on heroVariant
  function renderHero() {
    switch (svc.heroVariant) {
      case "deviceMockup":
        return <DeviceMockupHero />;
      case "deviceSplit":
        return <DeviceMockupSplit />;
      case "googleAdsSerp":
        return <GoogleAdsHero />;
      default:
        return (
          <>
            <img
              src={svc.imageUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          </>
        );
    }
  }

  function renderPillars() {
    switch (svc.pillarLayout) {
      case "grid":
        return <PillarsGrid pillars={svc.pillars} accent={svc.accent} />;
      case "stack":
        return <PillarsStack pillars={svc.pillars} />;
      case "flow":
        return <PillarsFlow pillars={svc.pillars} accent={svc.accent} />;
      default:
        return <PillarsNumbered pillars={svc.pillars} accent={svc.accent} />;
    }
  }

  return (
    <div className="relative">
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden md:h-[60vh]">
        {renderHero()}

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:max-w-[60vw] md:px-16 md:pb-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex size-9 items-center justify-center rounded-lg bg-gradient-to-br ${svc.accent} shadow-lg`}
              >
                <Icon className="size-4 text-bg-0" strokeWidth={2.4} />
              </div>
              <div className="eyebrow">{svc.label}</div>
            </div>
            <h1 className="mt-5 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-cream-50 md:text-5xl lg:text-6xl">
              {svc.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-[1.7] text-cream-200 md:text-[17px]">
              {svc.subhead}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 pb-32 md:px-8 md:py-16 md:pb-28 lg:px-16 2xl:px-20">
        <Panel>
          <div className="eyebrow">Role in the ecosystem</div>
          <p className="mt-3 text-[15px] leading-relaxed text-cream-100 md:text-base">
            {svc.ecosystemRole}
          </p>
        </Panel>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Panel motion={false}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-coral">
              The gap today
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-200 md:text-base">
              {svc.problem}
            </p>
          </Panel>
          <Panel motion={false}>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-500">
              How we close it
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-100 md:text-base">
              {svc.solution}
            </p>
          </Panel>
        </div>

        {svc.processVideo && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <div className="overflow-hidden rounded-2xl border border-line bg-bg-1">
              <div className="grid items-stretch md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px]">
                {/* Left column — stretches to match video height, splits into
                    top/middle/bottom on md+ so the panel feels intentionally used */}
                <div className="flex flex-col px-5 py-5 md:px-8 md:py-8 md:justify-between lg:px-10 lg:py-10">
                  {/* TOP — eyebrow anchored to top */}
                  <div className="eyebrow">How It Works</div>

                  {/* MIDDLE — display heading + subtitle, centered in remaining space on md+ */}
                  <div className="mt-6 md:my-auto md:mt-0">
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-[-0.02em] text-cream-50 md:text-4xl lg:text-5xl">
                      {svc.processVideo.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-cream-200 md:mt-4 md:text-base">
                      {svc.processVideo.description}
                    </p>
                  </div>

                  {/* BOTTOM — anchor line */}
                  <div className="mt-6 text-sm text-cream-300 md:mt-0">
                    Every shoot is planned, produced, and delivered — start to finish.
                  </div>
                </div>

                <div className="px-5 pb-5 md:px-3 md:py-3">
                  <CompactVideo src={svc.processVideo.url} />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-16">
          <SectionHeading
            eyebrow={pillarsHeading.eyebrow}
            title={pillarsHeading.title}
            subtitle={pillarsHeading.subtitle}
          />
          <div className="mt-10">{renderPillars()}</div>
        </div>

        {/* Google Ads page: budget tiers — what real ad spend looks like */}
        {serviceKey === "googleAds" && <GoogleAdsBudgetTiers />}

        {/* Website page: embed Web Management as a subsection at the bottom */}
        {serviceKey === "websiteCreation" && <WebManagementSubsection />}
      </div>
    </div>
  );
}

const BUDGET_TIERS = [
  {
    label: "Independent / Single Location",
    range: "$1,000–$3,000",
    body: "Steady reservation flow, local visibility, and event inquiries. The right starting point for one well-run brand in one market.",
  },
  {
    label: "Multi-Location Group",
    range: "$3,000–$8,000",
    body: "Per-location campaigns, scaled event marketing, and cross-market brand defense. Each location gets a budget aligned to its size and demand.",
  },
  {
    label: "High-Volume / Fine Dining",
    range: "$5,000–$15,000+",
    body: "Aggressive market capture, seasonal campaign calendars, multi-platform spend, and tight bidding on every high-intent query in the trade area.",
  },
];

function GoogleAdsBudgetTiers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mt-16 md:mt-20"
    >
      <SectionHeading
        eyebrow="Investment"
        title={<>What does ad spend actually look like?</>}
        subtitle="Three tiers, depending on what's being run. Budget determines volume—efficiency determines return. Both matter."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
        {BUDGET_TIERS.map((tier, i) => (
          <motion.div
            key={tier.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex h-full flex-col rounded-2xl border border-line bg-gradient-to-br from-bg-1 to-bg-2 p-6 transition hover:border-gold-500/30 md:p-7"
          >
            {/* tier index */}
            <div className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400/80">
              Tier {String(i + 1).padStart(2, "0")}
            </div>

            <div className="mt-3 font-display text-[15px] font-bold leading-tight text-cream-50 md:text-base">
              {tier.label}
            </div>

            {/* range — the headline number */}
            <div className="mt-5 flex items-baseline gap-1">
              <span className="stat-num bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-2xl text-transparent md:text-3xl">
                {tier.range}
              </span>
              <span className="text-xs text-cream-300">/mo</span>
            </div>

            {/* gradient divider */}
            <div className="mt-5 h-px w-full bg-gradient-to-r from-gold-500/40 via-gold-500/10 to-transparent" />

            <p className="mt-4 flex-1 text-[13.5px] leading-relaxed text-cream-200">
              {tier.body}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-center text-[12px] italic text-cream-300/70 md:text-left">
        Budgets sit alongside the management fee. Every campaign is built around your goals,
        not a fixed package.
      </p>
    </motion.div>
  );
}

function WebManagementSubsection() {
  const wm = SERVICES.websiteManagement;
  const Icon = wm.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mt-16 md:mt-20"
    >
      <div className="rounded-2xl border border-line bg-gradient-to-br from-bg-1 to-bg-2 p-6 md:p-8 lg:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3">
              <div
                className={`flex size-10 items-center justify-center rounded-xl bg-gradient-to-br ${wm.accent} shadow-md`}
              >
                <Icon className="size-5 text-bg-0" strokeWidth={2.4} />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
                Also included with the website
              </div>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-cream-50 md:text-3xl">
              Website Management
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-200">
              The site never goes stale. Text us when you need a change—new menu,
              updated hours, a new event, a hero swap—and it lands in the next batch.
              No tickets, no per-change fees, no waiting on a vendor.
            </p>
          </div>

          <div className="grid flex-1 gap-3">
            <SubItem
              title="Landing pages for your ads"
              body="Every Google or social campaign gets a purpose-built landing page. Generic homepages kill ad performance—dedicated pages convert."
            />
            <SubItem
              title="Batch revision cycles"
              body="Send your team's update list as a batch—copy, photos, menus, hours—and it ships on a predictable schedule."
            />
            <SubItem
              title="Always-on monitoring"
              body="Site speed, uptime, and conversion paths are watched monthly. Things that break get caught before they cost you reservations."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SubItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-line-soft bg-bg-2 px-4 py-3.5 md:px-5 md:py-4">
      <div className="font-display text-[14px] font-bold text-cream-50">{title}</div>
      <p className="mt-1 text-[13px] leading-relaxed text-cream-200">{body}</p>
    </div>
  );
}

/** Different intro copy per service so the section doesn't feel templated */
function getPillarsHeading(key: ServiceKey): {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
} {
  switch (key) {
    case "organicSocial":
      return {
        eyebrow: "How we approach it",
        title: <>Four ideas the program is built around.</>,
        subtitle:
          "These aren't sequential steps. They're principles that run in parallel across every brand.",
      };
    case "googleAds":
      return {
        eyebrow: "Inside the program",
        title: <>What we run, and why.</>,
        subtitle:
          "Each layer of the campaign stack does a different job. Together they capture every guest with active intent.",
      };
    case "paidSocial":
      return {
        eyebrow: "The funnel in motion",
        title: <>From awareness to booking.</>,
        subtitle:
          "Social ads operate as a funnel. Each stage feeds the next, and retargeting closes the loop with anyone who didn't convert the first time.",
      };
    case "websiteCreation":
      return {
        eyebrow: "What we build",
        title: <>The four jobs the site has to do.</>,
        subtitle:
          "Every layout decision, integration, and SEO call ladders up to one of these four.",
      };
    default:
      return {
        eyebrow: "The Four Pillars",
        title: <>Built on a foundation that doesn't move.</>,
        subtitle: "Every program rests on these four. Tweaked per brand, never skipped.",
      };
  }
}
