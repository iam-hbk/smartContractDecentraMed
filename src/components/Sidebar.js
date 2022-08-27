import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Svgs/DentraMedLogo.svg";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";

import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  let links = [
    { path: "/dashboard/home", name: "Dashboard" },
    {
      path: "/dashboard/patients",
      name: "All Patients",
    },
    {
      path: "/dashboard/analysis",
      name: "Analysis",
    },
    {
      path: "/dashboard/medicalReports",
      name: "Medical Reports",
    },
    {
      path: "/dashboard/messages",
      name: "Messages",
    },
    {
      path: "/dashboard/devices",
      name: "Devices",
    },
    {
      path: "/dashboard/appointment",
      name: "Appointment",
    },
  ];
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      {links.map((link) => (
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            isActive ? "linkContainerActive" : "linkContainer"
          }
        >
          <button>{link.name}</button>
        </NavLink>
      ))}
      {/* <div>
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            isActive ? "linkContainerActive" : "linkContainer"
          }
        >
          <button>Dashboard</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="patients">
          <button>All Patients</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="appointments">
          <button>Appointments</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="medicalReports">
          <button>Medical Reports</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="messages">
          <button>Messages</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="devices">
          <button>Devices</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="analysis">
          <button>Analysis</button>
        </NavLink>
      </div> */}
    </div>
  );
}

export default Sidebar;
