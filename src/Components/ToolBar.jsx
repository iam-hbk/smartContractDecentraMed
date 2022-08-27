import React, { useState } from "react";
import styled from "styled-components";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FiSearch, FiMessageSquare } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const Tb = Toolbar;
const ToolBarContainer = styled(Tb)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #048ba8;
  width: 78%;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid #e6f3f6;
  box-sizing: border-box;
  border-top: none;
  border-radius: 0 0 0 0;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  border: 1px solid #e6f3f6;
  margin: 0 20px;
`;
const LeftContents = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <span className="p-input-icon-left" style={{ borderColor: "#048ba8" }}>
        <FiSearch />
        <InputText
          onFocus={(e) => {
            e.target.style.borderColor = "#048ba8";
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search or Type a command"
        />
      </span>
    </React.Fragment>
  );
};

const rightContents = (
  <React.Fragment>
    <Button
      style={{
        borderColor: "#E6F3F6",
        color: "#E6F3F6",
        backgroundColor: "rgba(1, 42, 53, 0.5)",
      }}
      icon={
        <AiOutlinePlus color="#E6F3F6" size={24} style={{ marginRight: 10 }} />
      }
      label="Create Schedule"
      className="p-button-outlined"
    />
    <Box style={{ width: "200px" }}>
      <Button
        icon={<IoIosNotificationsOutline size={28} color="#E6F3F6" />}
        className="p-button-rounded p-button-text"
        aria-label="Notification"
        badge="2"
      />
      <Button
        icon={<FiMessageSquare size={28} color="#E6F3F6" />}
        className="p-button-rounded p-button-text"
        aria-label="Notification"
        badge="4"
      />
    </Box>
  </React.Fragment>
);
function ToolBarComponent() {
  return <ToolBarContainer left={LeftContents} right={rightContents} />;
}

export default ToolBarComponent;
