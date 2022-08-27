import React from "react";
import "./Sidebar.css";
import Logo from "../Assets/Logo.png";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      {/* <Button label="Dashboard" className="p-button-raised p-button-rounded" /> */}
    </div>
  );
}

export default Sidebar;
