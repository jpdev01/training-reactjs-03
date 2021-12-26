import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dasahboard from "../components/core/dashboard/Dashboard";
import Calendar from "../components/core/calendar/Calendar";
import Login from "../components/security/Login";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="" exact element={<Dasahboard />} />
        <Route path="/main" element={<Dasahboard />} >
          <Route path="" element={<Dasahboard />} />
        </Route>
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}