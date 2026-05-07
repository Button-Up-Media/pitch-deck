import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { config } from "../config/client";
import { SERVICES, SERVICE_ORDER } from "../config/services";

export function Nav() {
  const enabledServices = SERVICE_ORDER.filter(
    (k) => config.services[k].enabled
  );

  const links = [
    { to: "/", label: "Cover" },
    { to: "/brands", label: "Brands" },
    { to: "/problem", label: "Opportunity" },
    ...enabledServices.map((k) => ({
      to: SERVICES[k].route,
      label: SERVICES[k].short,
    })),
    ...(config.bundle.enabled ? [{ to: "/bundle", label: "Bundle" }] : []),
    { to: "/reporting", label: "Reporting" },
    { to: "/scope", label: "Scope & Sign" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(12,14,24,0.7)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-gradient-to-br from-ink-200 to-ink-400 shadow-lg shadow-ink-400/30" />
          <div className="flex flex-col leading-none">
            <span className="text-xs font-medium tracking-widest text-ink-200 uppercase">
              {config.agency.name}
            </span>
            <span className="text-[10px] text-ink-300 mt-0.5">
              for {config.client.shortName}
            </span>
          </div>
        </NavLink>
        <div className="hide-scrollbar flex items-center gap-1 overflow-x-auto max-w-[70%]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  isActive
                    ? "bg-white/10 text-ink-50"
                    : "text-ink-200 hover:text-ink-50 hover:bg-white/5"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
