import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Logo.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Sidebar;
