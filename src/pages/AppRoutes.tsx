import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Calendar from "./calendar";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="*" element={<NotFound />} /> {/* Handles 404 */}
    </Routes>
  );
};

export default AppRoutes;
