import React from "react";
import Sidebar from "../../components/Sidebar";
import ToolBar from "../../components/ToolBar";
import styled from "styled-components";
import "./Home.css";
import HomeBody from "../../components/HomeBody";
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
