import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dasahboard from "./core/components/core/dashboard/Dashboard";
import InsertRecords from "./core/components/core/record/insert/InsertRecord";
import Login from "./core/components/security/Login";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        {/* <Route path="/main" component={Dasahboard}>
          <Route path="" component={Dasahboard} />
          <Route path="/record" component={InsertRecords} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};
