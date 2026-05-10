import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

/**
 * Visual proof of the "great ad, weak landing page" problem.
 *
 * Three horizontal funnel bars that animate in sequence — same 167 clicks,
 * same 167 page visits, near-zero conversions. The coral stage 3 bar is given
 * an extra delay so the drop-off lands as a beat, not a fade-in.
 *
 * Pure-div bars (no SVG), Tailwind-only, animates from width 0 to target %.
 */
export function LandingPageDropoffGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mt-6 rounded-2xl border border-line bg-bg-1 p-6 md:p-8 lg:p-10"
    >
      {/* dashboard-style header strip */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cream-300">
          <span className="size-2 rounded-full bg-teal" />
          Real campaign example
        </div>
        <div className="flex items-center gap-4 font-mono text-[10.5px] text-cream-300">
          <span>
            CTR <span className="font-bold text-teal">6.6%</span>
          </span>
          <span>
            CONV <span className="font-bold text-coral">0.0%</span>
          </span>
          <span>
            ROAS <span className="font-bold text-coral">0.00x</span>
          </span>
        </div>
      </div>

      {/* funnel — bars + connectors */}
      <div className="mt-7">
        <FunnelBar
          pct={100}
          color="teal"
          leftLabel="Ad clicks"
          rightLabel="167 people"
          sublabel="6.6% CTR — ad is working"
          delay={0.1}
        />
        <ArrowConnector label="land on your page" />
        <FunnelBar
          pct={100}
          color="gold"
          leftLabel="Page visits"
          rightLabel="167 people"
          sublabel="100% arrived. Now what?"
          delay={0.35}
        />
        <ArrowConnector label="attempt to convert" />
        <FunnelBar
          pct={8}
          color="coral"
          leftLabel="Conversions"
          rightLabel="0 bookings"
          sublabel="0.0% conversion rate"
          delay={0.85}
        />
      </div>

      {/* summary lines — coral first (the loss), teal second (the recovery) */}
      <div className="mt-8 space-y-3 border-t border-line-soft pt-6">
        <div className="flex items-baseline gap-2.5">
          <span className="size-1.5 flex-shrink-0 translate-y-1.5 rounded-full bg-coral" />
          <p className="font-display text-[15px] font-bold leading-snug text-coral md:text-base">
            The ad worked perfectly. The landing page lost everyone.
          </p>
        </div>
        <div className="flex items-baseline gap-2.5">
          <span className="size-1.5 flex-shrink-0 translate-y-1.5 rounded-full bg-teal" />
          <p className="text-[14px] leading-relaxed text-teal md:text-[15px]">
            A conversion-optimized landing page turns this into 8–15 bookings
            from the same 167 clicks.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type BarColor = "teal" | "gold" | "coral";

const BAR_FILL: Record<BarColor, string> = {
  teal: "bg-teal",
  gold: "bg-gold-500",
  coral: "bg-coral",
};

const BAR_GLOW: Record<BarColor, string> = {
  teal: "shadow-[0_0_24px_-6px_rgba(69,176,140,0.55)]",
  gold: "shadow-[0_0_24px_-6px_rgba(226,168,77,0.55)]",
  coral: "shadow-[0_0_24px_-6px_rgba(208,106,80,0.55)]",
};

const VALUE_TEXT: Record<BarColor, string> = {
  teal: "text-teal",
  gold: "text-gold-300",
  coral: "text-coral",
};

function FunnelBar({
  pct,
  color,
  leftLabel,
  rightLabel,
  sublabel,
  delay,
}: {
  pct: number;
  color: BarColor;
  leftLabel: string;
  rightLabel: string;
  sublabel: string;
  delay: number;
}) {
  return (
    <div>
      {/* labels above */}
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream-200 md:text-[11px]">
          {leftLabel}
        </span>
        <span
          className={`font-display text-base font-bold tabular-nums md:text-lg ${VALUE_TEXT[color]}`}
        >
          {rightLabel}
        </span>
      </div>

      {/* bar track + animated fill */}
      <div className="relative h-9 w-full overflow-hidden rounded-md bg-bg-2 ring-1 ring-inset ring-line-soft md:h-10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.85,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative h-full rounded-md ${BAR_FILL[color]} ${BAR_GLOW[color]}`}
          style={{ minWidth: pct > 0 ? "10px" : 0 }}
        >
          {/* subtle highlight gloss along the top edge */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-md bg-gradient-to-b from-cream-50/15 to-transparent" />
        </motion.div>
      </div>

      {/* sublabel below */}
      <div className="mt-2 text-[11.5px] leading-snug text-cream-300 md:text-xs">
        {sublabel}
      </div>
    </div>
  );
}

function ArrowConnector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 py-3 pl-1">
      <ArrowDown className="size-3.5 text-cream-300/70" strokeWidth={2.4} />
      <span className="text-[11px] italic text-cream-300/70">{label}</span>
    </div>
  );
}
