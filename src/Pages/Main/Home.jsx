import React from "react";
import Sidebar from "../../Components/Sidebar";
import ToolBar from "../../Components/ToolBar";
import styled from "styled-components";
import "./Home.css";
import HomeBody from "../../Components/HomeBody";
const DashboardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <DashboardContainer>
      <ToolBar />
      <Sidebar />
      <HomeBody />
    </DashboardContainer>
  );
}

export default Home;
