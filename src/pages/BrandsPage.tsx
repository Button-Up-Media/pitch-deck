import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { PageNav } from "../components/PageNav";
import { config } from "../config/client";
import { MapPin, Utensils } from "lucide-react";

export function BrandsPage() {
  const single = config.brands.length === 1;
  return (
    <>
      <Section
        eyebrow="The Portfolio"
        title={
          single ? (
            <>The brand we'll be growing</>
          ) : (
            <>{config.brands.length} brands. One unified strategy.</>
          )
        }
        subtitle={
          single
            ? "Every recommendation in this deck is tailored specifically to this brand's audience, market, and growth opportunities."
            : `Each brand has its own audience, voice, and market — but they share the same playbook, dashboard, and team. Consistency where it helps, customization where it counts.`
        }
      />

      <div
        className={`mx-auto grid max-w-7xl gap-6 px-6 ${
          config.brands.length === 1
            ? "grid-cols-1"
            : config.brands.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {config.brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-ink-200">
                Brand {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-1.5 text-2xl font-semibold text-ink-50 md:text-3xl">
                {brand.name}
              </div>
              <div className="mt-1 text-sm text-ink-100">{brand.tagline}</div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-ink-200">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1">
                  <MapPin className="size-3" /> {brand.city}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1">
                  <Utensils className="size-3" /> {brand.cuisine}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Section
        title={<>Different brands, one operating system.</>}
        subtitle="Each brand keeps its own voice, audience, and creative direction. What changes is the surface — content, ad creative, landing pages. What stays consistent is the engine underneath: tracking, reporting, and a single team that knows your business."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-ink-50">
              Per-brand strategy
            </div>
            <p className="mt-2 text-sm text-ink-200">
              Audience, tone, and creative direction tailored to each concept.
              Nothing copy-pasted.
            </p>
          </Card>
          <Card delay={0.08}>
            <div className="text-sm font-semibold text-ink-50">
              Shared infrastructure
            </div>
            <p className="mt-2 text-sm text-ink-200">
              One pixel, one analytics stack, one reporting dashboard. Consistency
              that compounds.
            </p>
          </Card>
          <Card delay={0.16}>
            <div className="text-sm font-semibold text-ink-50">
              One team, one inbox
            </div>
            <p className="mt-2 text-sm text-ink-200">
              No vendor sprawl. A single strategist owns the relationship across
              every brand and every channel.
            </p>
          </Card>
        </div>
      </Section>

      <PageNav current="/brands" />
    </>
  );
}
