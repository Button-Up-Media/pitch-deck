import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AmbientBg } from "./AmbientBg";
import { SidebarNav, MobileNav } from "./SidebarNav";
import { useEffect } from "react";
import { useDeckOrder } from "../lib/useDeckOrder";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = useDeckOrder();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLElement &&
        ["INPUT", "TEXTAREA"].includes(e.target.tagName)
      )
        return;
      const idx = order.indexOf(location.pathname);
      if (idx === -1) return;
      if ((e.key === "ArrowRight" || e.key === "ArrowDown") && order[idx + 1]) {
        navigate(order[idx + 1]);
      }
      if ((e.key === "ArrowLeft" || e.key === "ArrowUp") && order[idx - 1]) {
        navigate(order[idx - 1]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [location.pathname, navigate, order]);

  return (
    <div className="relative flex min-h-full">
      <AmbientBg />
      <SidebarNav />
      <main className="flex-1 md:mr-64 xl:mr-72">
        <AnimatePresence mode="sync">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <MobileNav />
    </div>
  );
}
