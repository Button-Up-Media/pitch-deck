import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";
import { useMemo } from "react";

function buildOrder() {
  const enabled = SERVICE_ORDER.filter((k) => config.services[k].enabled);
  const order = ["/", "/brands", "/problem"];
  enabled.forEach((k) => order.push(SERVICES[k].route));
  if (config.bundle.enabled) order.push("/bundle");
  order.push("/reporting", "/scope");
  return order;
}

const labels: Record<string, string> = {
  "/": "Cover",
  "/brands": "Brands",
  "/problem": "The Opportunity",
  "/bundle": "All-in-One Package",
  "/reporting": "Reporting",
  "/scope": "Scope & Sign",
};

export function PageNav({ current }: { current: string }) {
  const { prev, next } = useMemo(() => {
    const order = buildOrder();
    const idx = order.indexOf(current);
    return { prev: order[idx - 1], next: order[idx + 1] };
  }, [current]);

  function label(path: string) {
    if (labels[path]) return labels[path];
    const svc = SERVICE_ORDER.find((k) => SERVICES[k].route === path);
    return svc ? SERVICES[svc].label : "";
  }

  return (
    <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between gap-4 px-6 pb-12">
      {prev ? (
        <Link
          to={prev}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-ink-200 transition hover:bg-white/10 hover:text-ink-50"
        >
          <ArrowLeft className="size-4 transition group-hover:-translate-x-0.5" />
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-widest text-ink-300">
              Previous
            </span>
            <span>{label(prev)}</span>
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-r from-ink-400/30 to-ink-500/30 px-5 py-3 text-sm text-ink-50 transition hover:from-ink-400/50 hover:to-ink-500/50"
        >
          <span className="flex flex-col leading-tight text-right">
            <span className="text-[10px] uppercase tracking-widest text-ink-200">
              Next
            </span>
            <span>{label(next)}</span>
          </span>
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
