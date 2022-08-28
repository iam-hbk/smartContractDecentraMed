import { MdOutlineMoreHoriz } from "react-icons/md";
import {
  BlueText,
  ConditionsContainer,
  ConditionsItem,
  DarkTitle,
  InlineInfo,
  LightText,
} from "./CustomComponets";

const Conditions = () => {
  // Get conditions from parent component
  // const conditions = props.conditions;

  return (
    <ConditionsContainer>
      <InlineInfo>
        <DarkTitle>Underlaying Conditions</DarkTitle>
        <MdOutlineMoreHoriz size={25} />
      </InlineInfo>
      {[1, 2, 3, 4].map((condition) => (
        <ConditionsItem>
          <BlueText>
            <b>Dental Health</b>
          </BlueText>
          <br />
          <LightText>
            <b>08 December 2021</b>
          </LightText>
        </ConditionsItem>
      ))}
    </ConditionsContainer>
  );
};

export default Conditions;
