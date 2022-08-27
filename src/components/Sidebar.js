import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Svgs/DentraMedLogo.svg";
function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default Sidebar;
