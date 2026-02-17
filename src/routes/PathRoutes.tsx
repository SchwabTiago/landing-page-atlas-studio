import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import ContactPage from "../pages/contact/ContactPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import ServicesPage from "../pages/services/ServicesPage";

import RootLayout from "./RootLayout";

export function PathRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
