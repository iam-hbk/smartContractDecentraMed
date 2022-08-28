import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Main/Home";
import AllPatients from "../Pages/Main/AllPatients";
import Analysis from "../Pages/Main/Analysis";
import Appointment from "../Pages/Main/Appointment";
import Devices from "../Pages/Main/Devices";
import MedicalReport from "../Pages/Main/MedicalReport";
import Messages from "../Pages/Main/Messages";

function Main() {
  return (
    <Routes>
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/patients" element={<AllPatients />} />
      <Route path="/dashboard/analysis" element={<Analysis />} />
      <Route path="/dashboard/medicalReports" element={<MedicalReport />} />
      <Route path="/dashboard/messages" element={<Messages />} />
      <Route path="/dashboard/devices" element={<Devices />} />
      <Route path="/dashboard/appointment" element={<Appointment />} />

      {/* <Route path="signIn" element={<SignUp />} /> */}
    </Routes>
  );
}

export default Main;
