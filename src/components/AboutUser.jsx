import { useEffect, useState } from "react";
import BMICard from "./BMI";
import BodyComposition from "./BodyComposition";
import { AboutUserContainer, InlineInfo } from "./CustomComponets";
import ProfileCard from "./ProfileCard";
import Conditions from "./UndelayinConditionsCard";
import VaccineCard from "./VaccineCard";

const AboutUser = (props) => {
  //Get user Id from params
  // const userId = props.match.params.id;

  const [user, setUser] = useState({});

  useEffect(() => {
    //Fetch user info from database
    //Set user info to state
  });

  return (
    <AboutUserContainer>
      {/* <InlineInfo> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <ProfileCard info={user} />
        <div style={{ width: "50%" }}>
          <VaccineCard info={user} />
          <BMICard />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <BodyComposition />
        <Conditions />
      </div>
    </AboutUserContainer>
  );
};

export default AboutUser;
