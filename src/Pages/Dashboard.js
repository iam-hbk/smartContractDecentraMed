import React from "react";
import Sidebar from "../Components/Sidebar";
import ToolBar from "../Components/ToolBar";
import "./Dashboard.css";
import styled from "styled-components";

const DashboardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Sidebar />
      <ToolBar />
    </DashboardContainer>
  );
}

export default Dashboard;
