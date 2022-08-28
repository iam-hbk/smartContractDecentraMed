import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import ToolBar from "../../Components/ToolBar";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Column } from "@ant-design/plots";

let MedRecordsData = [
  {
    title: "New Medical Record",
    value: "123 298",
  },
  {
    title: "New Medical Record",
    value: "123 298",
  },
  {
    title: "New Medical Record",
    value: "123 298",
  },
  {
    title: "New Medical Record",
    value: "123 298",
  },
];

const Container = styled.div`
  position: relative;
`;

const Body = styled.div`
  position: absolute;
  right: 20%;
  top: 80px;
  padding: 10px;
  border-left: 1px solid #e6f3f6;
  border-top: none;
  width: 58%;
  height: auto;
`;
const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  border: 3px solid purple;
  padding: 10px;
  font: 14px "Urbanist", sans-serif;
`;
const Side = styled.div`
  position: fixed;
  right: 0;
  top: 82px;
  border-top: none;
  width: 20%;
  height: 500px;
  padding: 8px;
`;
const SideContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #e6f3f6;
  border-radius: 5px;
  height: 100%;
  padding: 10px;
`;
const BodyContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  height: 75px;
`;
function Analysis() {
  return (
    <Container>
      <Sidebar />
      <ToolBar />
      <Body>
        <BodyContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {MedRecordsData.map((data, index) => {
              return (
                <BodyContentInfo key={index}>
                  <div>{data.title}</div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <div>{data.value}</div>
                    <div>
                      <Estimate data={parseInt(data.value)} />
                    </div>
                  </div>
                </BodyContentInfo>
              );
            })}
          </div>
          <h1>MapCharts And Stuff</h1>
          <ChartComponent />
        </BodyContent>
      </Body>
      <Side>
        <SideContent>Calendar and Appointments</SideContent>
      </Side>
    </Container>
  );
}

export default Analysis;

const Estimate = ({ data }) => {
  // random number in the range of data and data + 100 and data
  const random = Math.floor(Math.random() * (data + 100 - data)) + data;
  // difference between random number and data in percentage two decimal places
  const difference = (((random - data) / data) * 100).toFixed(2);
  // if difference is positive, return green, else return red
  return difference > 0 ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "5px",
        background: "#048BA850",
        borderRadius: "5px",
      }}
    >
      <AiOutlineArrowUp color="green" />
      <div>{difference}%</div>
    </div>
  ) : (
    <div style={{ color: "red" }}>{difference.toFixed(2)}%</div>
  );
};

const ChartComponent = () => {
  const [data] = useState([
    {
      city: "JHB",
      type: "Asthma",
      Month: "January",
      value: 14500,
    },
    {
      city: "JHB",
      type: "Cancer",
      Month: "January",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Soweto",
      type: "Diabetes",
      Month: "January",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Cape Town",
      type: "Heart Disease",
      Month: "January",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "JHB",
      type: "Asthma",
      Month: "February",
      value: 1500,
    },
    {
      city: "JHB",
      type: "Cancer",
      Month: "February",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Soweto",
      type: "Diabetes",
      Month: "February",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Cape Town",
      type: "Heart Disease",
      Month: "February",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "JHB",
      type: "Asthma",
      Month: "March",
      value: 11500,
    },
    {
      city: "JHB",
      type: "Cancer",
      Month: "March",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Soweto",
      type: "Diabetes",
      Month: "March",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Cape Town",
      type: "Heart Disease",
      Month: "March",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },{
      city: "JHB",
      type: "Asthma",
      Month: "April",
      value: 14500,
    },
    {
      city: "JHB",
      type: "Cancer",
      Month: "April",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Soweto",
      type: "Diabetes",
      Month: "April",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
    {
      city: "Cape Town",
      type: "Heart Disease",
      Month: "April",
      value: Math.floor(Math.random() * (14500 - 5000) + 5000),
    },
  ]);

  const config = {
    data,
    xField: "Month",
    yField: "value",
    seriesField: "type",
    isGroup: true,
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };

  return (
    <div
      style={{
        background: "#fff",
        padding: "10px",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Column {...config} />
    </div>
  );
};
