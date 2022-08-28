import {
  Avatar,
  BlueText,
  DarkText,
  IconButton,
  InlineInfo,
  InnerCardContainer,
  ProfileCardContainer,
  SettingsIconButton,
  SettingsIconDiv,
} from "./CustomComponets";
import { MdOutlineSettings } from "react-icons/md";
import { useEffect } from "react";

const ProfileCard = (props) => {
  // componet gets data from parent componet
  // const UserInfo = props.info
  const UserInfo = {
    id: "xxxxxxxxxxxxx",
    problem: "xxxxxxxxxxxxx",
    lastVisit: "19 November 2020",
    sex: "Female",
    birthdate: "19 Jun  1989",
    avatar:
      "https://billiardport.com/assets/pages/media/profile/profile_user.jpg",
  };

  return (
    <ProfileCardContainer>
      <InnerCardContainer>
        <IconButton>
          <MdOutlineSettings size={35} />
        </IconButton>
        <Avatar src={UserInfo.avatar} />
        <br />
        <DarkText>Name Surname</DarkText>
        <BlueText>Last Visti: {UserInfo.lastVisit}</BlueText>
        <InlineInfo>
          <DarkText>Sex</DarkText>
          <BlueText>{UserInfo.sex}</BlueText>
        </InlineInfo>
        <InlineInfo>
          <DarkText>Birth Date</DarkText>
          <BlueText>{UserInfo.birthdate}</BlueText>
        </InlineInfo>
        <InlineInfo>
          <DarkText>Id No.</DarkText>
          <BlueText>{UserInfo.id}</BlueText>
        </InlineInfo>
        <InlineInfo>
          <DarkText>Main Problem</DarkText>
          <BlueText>{UserInfo.problem}</BlueText>
        </InlineInfo>
      </InnerCardContainer>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
