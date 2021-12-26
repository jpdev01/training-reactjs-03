import React from "react";
import { Route, BrowserRouter, Routes, Router } from "react-router-dom";
import Dasahboard from "./core/components/core/dashboard/Dashboard";
import Calendar from "./core/components/core/calendar/Calendar";
import Login from "./core/components/security/Login";

var AppRoutes = function(){
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

export default AppRoutes; 