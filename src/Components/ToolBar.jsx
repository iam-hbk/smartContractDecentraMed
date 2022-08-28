import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import Bell from "../Assets/Svgs/bell.svg";
import Chats from "../Assets/Svgs/chatBubbleOutline.svg";
import WebFont from "webfontloader";

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
  z-index: 1;
`;
const Input = styled(InputText)`
  font: 14px Urbanist;
  width: 260px;
  border: 2px solid #012a32;
  &:focus {
    box-shadow: none !important;
    border: 2px solid #e6f3f6 !important;
  }
  &:hover {
    border: 2px solid #e6f3f6 !important;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  margin: 0 20px;
`;
const InfoCenter = styled.div`
  position: relative;
  height: 100%;
`;
const Badge = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #012a32;
  z-index: 1;
  box-sizing: border-box;
  border: 2px solid #048ba8;
  color: #e6f3f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: "Urbanist", sans-serif;
`;
const LeftContents = () => {
  const [search, setSearch] = useState("");
  return (
    <React.Fragment>
      <span className="p-input-icon-left">
        <FiSearch />
        <Input
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
      <InfoCenter>
        <Badge>2</Badge>
        <Button
          icon={<img src={Bell} alt="notification" />}
          className="p-button-rounded p-button-text"
          aria-label="Notification"
        />
      </InfoCenter>
      <InfoCenter>
        <Badge>3</Badge>
        <Button
          icon={<img src={Chats} alt="Chats" />}
          className="p-button-rounded p-button-text"
          aria-label="Notification"
        />
      </InfoCenter>
    </Box>
  </React.Fragment>
);
function ToolBarComponent() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist"],
      },
    });
  });
  return <ToolBarContainer left={LeftContents} right={rightContents} />;
}

export default ToolBarComponent;
