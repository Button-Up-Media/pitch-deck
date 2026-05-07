import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDeckOrder, SLIDE_LABELS } from "../lib/useDeckOrder";
import { SERVICES, SERVICE_ORDER } from "../config/services";

function labelFor(path: string) {
  if (SLIDE_LABELS[path]) return SLIDE_LABELS[path];
  const svc = SERVICE_ORDER.find((k) => SERVICES[k].route === path);
  return svc ? SERVICES[svc].short : path;
}

export function SlideRail() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = useDeckOrder();
  const idx = order.indexOf(location.pathname);
  const total = order.length;
  if (idx === -1) return null;
  const prev = order[idx - 1];
  const next = order[idx + 1];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 px-4 pb-4 md:px-8 md:pb-6">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-3">
        {prev ? (
          <button
            onClick={() => navigate(prev)}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(12,14,24,0.7)] px-3 py-2 text-xs text-ink-200 backdrop-blur-md transition hover:border-white/20 hover:text-ink-50"
            aria-label={`Previous: ${labelFor(prev)}`}
          >
            <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" />
            <span className="hidden md:inline">{labelFor(prev)}</span>
          </button>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[rgba(12,14,24,0.7)] px-3 py-2 backdrop-blur-md">
          {order.map((path, i) => {
            const active = i === idx;
            return (
              <Link
                to={path}
                key={path}
                aria-label={`Go to ${labelFor(path)}`}
                className="group relative flex items-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    active
                      ? "h-1.5 w-6 bg-ink-50"
                      : "h-1.5 w-1.5 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </Link>
            );
          })}
          <span className="ml-2 text-[10px] font-medium uppercase tracking-widest text-ink-300">
            {String(idx + 1).padStart(2, "0")}
            <span className="text-ink-400"> / {String(total).padStart(2, "0")}</span>
          </span>
        </div>

        {next ? (
          <button
            onClick={() => navigate(next)}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-ink-400/40 to-ink-500/40 px-3 py-2 text-xs text-ink-50 backdrop-blur-md transition hover:from-ink-400/60 hover:to-ink-500/60"
            aria-label={`Next: ${labelFor(next)}`}
          >
            <span className="hidden md:inline">{labelFor(next)}</span>
            <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
          </button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
