import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicesPage from "../pages/ServicesPage";

export function PathRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
