import React, { useState } from "react";
import "./HomeBody.css";
import { Button } from "primereact/button";
import { Chart } from "primereact/chart";

import { AiFillCalendar } from "react-icons/ai";
import { Divider } from "primereact/divider";

// import { Chart } from 'primereact/chart';

import styled from "styled-components";
import CalendarCard from "./CalendarCard";
import UpcomingApp from "./UpcomingApp";

function HomeBody() {
  const [basicData] = useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "2021",
        backgroundColor: "#008080",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "2022",
        backgroundColor: "#42A5F5",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ],
  });

  const getLightTheme = () => {
    let basicOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let horizontalOptions = {
      indexAxis: "y",
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let stackedOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltips: {
          mode: "index",
          intersect: false,
        },
        legend: {
          labels: {
            color: "#495057",
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
      },
    };

    let multiAxisOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: "#495057",
          },
        },
        tooltips: {
          mode: "index",
          intersect: true,
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            min: 0,
            max: 100,
            color: "#495057",
          },
          grid: {
            color: "#ebedef",
          },
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
            color: "#ebedef",
          },
          ticks: {
            min: 0,
            max: 100,
            color: "#495057",
          },
        },
      },
    };

    return {
      basicOptions,
      horizontalOptions,
      stackedOptions,
      multiAxisOptions,
    };
  };

  const { basicOptions, horizontalOptions, multiAxisOptions, stackedOptions } =
    getLightTheme();
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
    // border: 3px solid purple;
    padding: 10px;
    font: 14px "Urbanist", sans-serif;
  `;
  const BodyContentInfo = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: flex-start;
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    // height: 100vh;
    width: 100%;
    margin-top: 10px;
  `;
  const Side = styled.div`
    position: fixed;
    right: 0;
    top: 82px;
    border-top: none;
    width: 20%;
    height: 550px;
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
  return (
    <div>
      <Body>
        <BodyContent>
          <BodyContentInfo>
            <h4>This week's Events</h4>
            <h5 style={{ margin: "5px" }}>3 Events and 4 Uncompleted tasks</h5>

            <div className="container">
              <div className="row">
                <h5 style={{ marginTop: "8px" }}>
                  Global Health Hackhathon In South Africa
                </h5>
                <AiFillCalendar />
                27th August 2022, 08:00 AM
                <Divider />
                <div style={{ display: "flex" }}>
                  <div className="item">4 Topics</div>
                  <div className="item">Multiple Topics</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="item">Multiple Speaker</div>
                  <div className="item">Over 100 Attendance</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    className="p-button-outlined"
                    style={{ margin: "7px" }}
                    label="Event Details"
                  />
                  <Button style={{ margin: "7px" }} label="Join Event" />
                </div>
              </div>
              <div className="row">
                <h5 style={{ marginTop: "8px" }}>
                  Global Health Hackhathon In South Africa
                </h5>
                <AiFillCalendar />
                27th August 2022, 08:00 AM
                <Divider />
                <div style={{ display: "flex" }}>
                  <div className="item">4 Topics</div>
                  <div className="item">Multiple Topics</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="item">Multiple Speaker</div>
                  <div className="item">Over 100 Attendance</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                  className="p-button-outlined"
                    style={{ margin: "7px" }}
                    label="Event Details"
                  />
                  <Button style={{ margin: "7px" }} label="Join Event" />
                </div>
              </div>
            </div>
          </BodyContentInfo>
          <BodyContentInfo>
            Monthly Attendance
            <Chart type="bar" data={basicData} options={basicOptions} />
          </BodyContentInfo>
        </BodyContent>
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

export default HomeBody;
