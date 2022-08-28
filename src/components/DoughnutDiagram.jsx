import React, { useState } from "react";
import { Chart } from "primereact/chart";

const DoughnutChart = ({ chartData }) => {
  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
    },
  });

  return (
    <div className="card flex justify-content-center">
      <Chart
        type="doughnut"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "90%", height: "50%" }}
      />
    </div>
  );
};

export default DoughnutChart;
