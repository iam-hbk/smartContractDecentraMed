import styled from "styled-components";

// componets used in UserList.jsx
export const PageContainer = styled.div`
  background-color: #048ba8;
  padding: 10px;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  //   align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
`;

export const TitleText = styled.span`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  width: 20%;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(1, 42, 50, 0.9);

  opacity: 0.5;
  &:hover: {
    background-color: red;
  }
`;

export const UserListContainer = styled(TitlesContainer)`
  //   justify-content: space-evenly;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid #048ba8;
  margin-right: 10%;
  margin: auto;
`;

export const DarkText = styled.span`
  color: #000000;
`;

// ----------- End of UserList.jsx -----------

// ----------- Start of AboutUser.jsx -----------

export const AboutUserContainer = styled.div`
  background-color: #048ba8;
  padding: 10px;
`;

// ----------- End of AboutUser.jsx -----------

// ----------- Start of ProfileCard.jsx -----------

export const ProfileCardContainer = styled.div`
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 10px;
  width: 30%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const InnerCardContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const IconButton = styled.button`
  width: 100%;
  border: none;
  text-align: right;
  background-color: transparent;
`;

export const DarkTitle = styled(DarkText)`
  font-weight: bold;
`;

export const BlueText = styled(DarkText)`
  color: #048ba8;
`;

export const InlineInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

// ----------- End of ProfileCard.jsx -----------

// ----------- Start of VaccineCard.jsx -----------
export const VaccineCardContainer = styled(ProfileCardContainer)``;

export const Notification = styled.span`
  background: rgba(1, 42, 50, 0.5);
  border-radius: 50%;
  padding: 5px 10px 5px 10px;
  margin-left: 5px;
`;

export const DownloadCard = styled(InlineInfo)`
  background: rgba(4, 139, 168, 0.1);
  border: 1px solid rgba(1, 42, 50, 0.5);
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;

// ----------- End of VaccineCard.jsx -----------

// ----------- Start of BMICard.jsx -----------

export const BMICardContainer = styled(ProfileCardContainer)``;

export const NumberSliderContainer = styled.div`
  border: 1px solid rgba(1, 42, 50, 0.5);
  border-radius: 10px;
  margin-top: 10px;
  width: 45%;
`;

export const NumberSlider = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 5px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NumberSliderItem = styled.span`
  font-size: 3em;
  font-style: normal;
  font-weight: 700;
  font-size: 24pt;
  line-height: 29px;
  margin-right: 20px;
  color: rgba(1, 42, 50, 0.5);
`;

export const Center = styled.div`
  align-items: center;
  align-text: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 5px;
`;

// ----------- End of BMICard.jsx -----------

// ----------- Start of UnderlayingCondiitions.jsx -----------
export const ConditionsContainer = styled(ProfileCardContainer)``;

export const ConditionsItem = styled.div`
  padding: 10px;
  background: #ffffff;
  border: 1px solid rgba(1, 42, 50, 0.5);
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const LightText = styled(DarkText)`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: rgba(1, 42, 50, 0.5);
`;

// ----------- End of UnderlayingCondiitions.jsx -----------

// ----------- Start of BodyComposition.jsx -----------
export const BodyCompositionContainer = styled(ProfileCardContainer)``;

export const CompositionInfo = styled.div``;
export const CompositionImageContainer = styled.div``;
export const CompositionImage = styled.img`
  width: 100%;
`;
