import React from "react";
import styled from "styled-components";

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #048BA8;
  width: 78%;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid #e6f3f6;
  box-sizing: border-box;
  border-top: none;
`;

function ToolBar() {
  return <ToolBarContainer></ToolBarContainer>;
}

export default ToolBar;
