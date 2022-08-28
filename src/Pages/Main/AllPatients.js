import React from "react";
import AboutUser from "../../components/AboutUser";
import CalendarCard from "../../components/CalendarCard";
import {
  Body,
  BodyContent,
  Side,
  SideContent,
} from "../../components/CustomComponets";
import Sidebar from "../../components/Sidebar";
import ToolBar from "../../components/ToolBar";
import UpcomingApp from "../../components/UpcomingApp";
import UsersList from "../../components/UsersList";

function AllPatients() {
  const [isList, setIsList] = React.useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Sidebar />
      <ToolBar />
      <Body>
        <BodyContent>{isList ? <UsersList /> : <AboutUser />}</BodyContent>
      </Body>
      <Side>
        <SideContent>
          <CalendarCard />
          <UpcomingApp />
        </SideContent>
      </Side>
    </div>
  );
}

export default AllPatients;
