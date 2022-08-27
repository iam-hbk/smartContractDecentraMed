import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function Main() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      {/* <Route path="signIn" element={<SignUp />} /> */}

    </Routes>
  );
}

export default Main;
