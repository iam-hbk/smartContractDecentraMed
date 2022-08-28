import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Svgs/DentraMedLogo.svg";
import { Badge } from "primereact/badge";
import "primeicons/primeicons.css";

import { Link, NavLink } from "react-router-dom";
import AllPatients from "../Assets/Svgs/allPatients.svg";
import Appointments from "../Assets/Svgs/appointments.svg";
import MedicalReports from "../Assets/Svgs/medicalReports.svg";
import Messages from "../Assets/Svgs/messages.svg";
import Devices from "../Assets/Svgs/devices.svg";
import Analysis from "../Assets/Svgs/analysis.svg";
import Dashboard from "../Assets/Svgs/dashboard.svg";
import Logout from "../Assets/Svgs/log-out.svg";
function Sidebar() {
  let links = [
    {
      path: "/dashboard/home",
      name: "Dashboard",
      icon: Dashboard,
    },
    {
      path: "/dashboard/patients",
      name: "All Patients",
      icon: AllPatients,
    },
    {
      path: "/dashboard/analysis",
      name: "Analysis",
      icon: Analysis,
    },
    {
      path: "/dashboard/medicalReports",
      name: "Medical Reports",
      icon: MedicalReports,
    },
    {
      path: "/dashboard/messages",
      name: "Messages",
      icon: Messages,
    },
    {
      path: "/dashboard/devices",
      name: "Devices",
      icon: Devices,
    },
    {
      path: "/dashboard/appointment",
      name: "Appointment",
      icon: Appointments,
    },
  ];
  return (
    <div className="sidebar">
      <div>
        <img className="logo" src={Logo} alt="logo" />
        {links.map((link) => (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? "linkContainerActive" : "linkContainer"
            }
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                // margin: 0,
              }}
            >
              <img style={{ margin: "10px" }} src={link.icon} alt={link.name} />
              {link.name}
            </button>
          </NavLink>
        ))}
      </div>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "linkContainerActive" : "linkContainer"
          }
          style={{
            textDecoration: "none",
            padding: "0px",
          }}
        >
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",

              // margin: 0,
            }}
          >
            <img style={{ margin: "10px" }} src={Logout} alt="Logout" />
            Logout
          </button>
        </NavLink>
      </div>
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
