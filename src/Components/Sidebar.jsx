import React, { useEffect } from "react";
import styled from "styled-components";
import WebFont from "webfontloader";

const SideBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #048ba8;
  box-size: border-box;
  height: 100vh;
  width: 300px;
`;

function Sidebar() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist"],
      },
    });
  });


  return (
    <SideBarContainer>
		
	</SideBarContainer>
  )
}

export default Sidebar