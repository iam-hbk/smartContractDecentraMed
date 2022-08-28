import {
  BodyCompositionContainer,
  CompositionImage,
  CompositionImageContainer,
  CompositionInfo,
  DarkTitle,
  InlineInfo,
  LightText,
} from "./CustomComponets";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

const BodyComposition = () => {
  return (
    <BodyCompositionContainer>
      <InlineInfo>
        <DarkTitle>Body Composition</DarkTitle>
      </InlineInfo>
      <InlineInfo>
        <CompositionInfo>
          <CircularProgressbar value={50} text={"Excellent\nCompostion"} />;
          <InlineInfo>
            <div>
              <ProgressBar completed={80} maxCompleted={100} />
              <LightText>Oxygen</LightText>
            </div>
            <div>
              <ProgressBar completed={80} maxCompleted={100} />
              <LightText>Nitrogen</LightText>
            </div>
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
