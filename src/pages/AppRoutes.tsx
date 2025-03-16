// import React from "react";
import { Routes, Route } from "react-router-dom";
import Starting from "./starting";
import Home from "./Home";
import Calendar from "./calendar";
import NotFound from "./NotFound";
import Login from "../components/logIn";
import SignUp from "../components/signUp";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Starting />} />
      <Route path="/starting" element={<Starting />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="*" element={<NotFound />} /> {/* Handles 404 */}
    </Routes>
  );
};

export default AppRoutes;
