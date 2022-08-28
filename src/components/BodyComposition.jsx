import {
  BodyCompositionContainer,
  ColorSpan,
  CompositionImage,
  CompositionImageContainer,
  CompositionInfo,
  CompositionItem,
  DarkTitle,
  Diaglabel,
  InlineInfo,
  LightText,
} from "./CustomComponets";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import DoughnutChart from "./DoughnutDiagram";
import { useState } from "react";

const BodyComposition = () => {
  const [chartData] = useState({
    labels: ["Oxygen", "Nitrogen", "Carbon"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgb(0,255,255)", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  });
  //   get sum of all values in array
  const sum = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  return (
    <BodyCompositionContainer>
      <InlineInfo>
        <DarkTitle>Body Composition</DarkTitle>
      </InlineInfo>
      <InlineInfo>
        <CompositionInfo>
          <DoughnutChart chartData={chartData} />
          <InlineInfo>
            <CompositionItem style={{ marginRight: "20px" }}>
              <ColorSpan color={chartData.datasets[0].backgroundColor[0]} />
              <InlineInfo>
                <LightText style={{ marginRight: "20px" }}>
                  {(sum(chartData.datasets[0].data) /
                    chartData.datasets[0].data[0]) *
                    100}
                  %
                </LightText>
                <LightText>{chartData.labels[0]}</LightText>
              </InlineInfo>
            </CompositionItem>
            <CompositionItem>
              <ColorSpan color={chartData.datasets[0].backgroundColor[0]} />
              <InlineInfo>
                <LightText style={{ marginRight: "20px" }}>
                  {(sum(chartData.datasets[0].data) /
                    chartData.datasets[0].data[0]) *
                    100}
                  %
                </LightText>
                <LightText>{chartData.labels[0]}</LightText>
              </InlineInfo>
            </CompositionItem>
          </InlineInfo>
        </CompositionInfo>
        <CompositionImageContainer>
          <CompositionImage src="https://media.istockphoto.com/illustrations/abstract-human-body-with-molecules-dna-illustration-id947186478?k=20&m=947186478&s=170667a&w=0&h=P4UwKySTOpv48lSaV4kv5GD3lmZSKFNYM0F9mYIYAcU=" />
        </CompositionImageContainer>
      </InlineInfo>
    </BodyCompositionContainer>
  );
};

export default BodyComposition;
