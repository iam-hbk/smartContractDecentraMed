import React from "react";
import styled from "styled-components";

function UpcomingApp() {
  const Appointment = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #048ba820;
    box-size: border-box;
    height: 80px;
    width: 400px;
    padding: 0px 10px;
    border-left: 5px solid #048ba8;
  `;

  return (
    <Appointment>
      <p style={{ color: "#048ba8", fontSize: 14, margin: 0, padding: 0 }}>
        10:30 - 11:55 AM
      </p>

      <h6
        style={{
          color: "#048ba8",
          fontSize: 16,
          margin: 5,
          marginLeft: 0,
          padding: 0,
        }}
      >
        Kidney Failure Treatment
      </h6>

      <p style={{ color: "#048ba8", fontSize: 14, margin: 0, padding: 0 }}>
        Ms. Name Surname
      </p>
    </Appointment>
  );
}

export default UpcomingApp;
