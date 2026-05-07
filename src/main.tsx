import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import { CoverPage } from "./pages/CoverPage";
import { BrandsPage } from "./pages/BrandsPage";
import { ProblemPage } from "./pages/ProblemPage";
import { ServicePage } from "./pages/ServicePage";
import { BundlePage } from "./pages/BundlePage";
import { ReportingPage } from "./pages/ReportingPage";
import { ScopePage } from "./pages/ScopePage";
import { config } from "./config/client";
import { SERVICES, SERVICE_ORDER } from "./config/services";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CoverPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/problem" element={<ProblemPage />} />
          {SERVICE_ORDER.filter((k) => config.services[k].enabled).map((k) => (
            <Route
              key={k}
              path={SERVICES[k].route}
              element={<ServicePage serviceKey={k} />}
            />
          ))}
          {config.bundle.enabled && (
            <Route path="/bundle" element={<BundlePage />} />
          )}
          <Route path="/reporting" element={<ReportingPage />} />
          <Route path="/scope" element={<ScopePage />} />
          <Route path="*" element={<CoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
