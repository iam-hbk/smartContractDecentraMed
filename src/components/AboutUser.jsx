import { useEffect, useState } from "react";
import BMICard from "./BMI";
import BodyComposition from "./BodyComposition";
import { AboutUserContainer } from "./CustomComponets";
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
      <ProfileCard info={user} />
      <VaccineCard />
      <BMICard />
      <Conditions />
      <BodyComposition />
    </AboutUserContainer>
  );
};

export default AboutUser;
