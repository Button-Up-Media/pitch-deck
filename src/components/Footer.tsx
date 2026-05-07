import { config } from "../config/client";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-[rgba(12,14,24,0.6)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-ink-300 md:flex-row md:items-center md:justify-between">
        <div>
          Prepared for{" "}
          <span className="text-ink-100">{config.client.preparedFor}</span> ·{" "}
          {config.client.decisionDate}
        </div>
        <div className="flex items-center gap-4">
          <span>{config.agency.contactEmail}</span>
          <span className="hidden md:inline">·</span>
          <span>{config.agency.contactPhone}</span>
        </div>
      </div>
    </footer>
  );
}
