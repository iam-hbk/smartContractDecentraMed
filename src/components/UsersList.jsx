import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import {
  Avatar,
  DarkText,
  PageContainer,
  TitlesContainer,
  TitleText,
  UserListContainer,
} from "./CustomComponets";

const { useEffect, useState } = require("react");

const UsersList = () => {
  const [users, setUsers] = useState([
    {
      avatar:
        "https://billiardport.com/assets/pages/media/profile/profile_user.jpg",
      name: "Mr John Doe",
      desease: "malaria",
      date: "2020-01-01",
      time: "10:00",
    },
    {
      avatar:
        "https://billiardport.com/assets/pages/media/profile/profile_user.jpg",
      name: "Mr John Doe",
      desease: "malaria",
      date: "2020-01-01",
      time: "10:00",
    },
    {
      avatar:
        "https://billiardport.com/assets/pages/media/profile/profile_user.jpg",
      name: "Mr John Doe",
      desease: "malaria",
      date: "2020-01-01",
      time: "10:00",
    },
  ]);

  useEffect(() => {
    const dummyUsers = [];
    //Fetch users from database
    //Set users to state
  });

  return (
    <PageContainer>
      <TitlesContainer>
        <TitleText>Name</TitleText>
        <TitleText>Desease</TitleText>
        <TitleText>Date</TitleText>
        <TitleText>Time</TitleText>
      </TitlesContainer>

      {users.map((user) => (
        <UserListContainer>
          <Avatar src={user.avatar} />
          <DarkText>{user.name}</DarkText>
          <DarkText>{user.desease}</DarkText>
          <DarkText>{user.date}</DarkText>
          <DarkText>{user.time}</DarkText>
        </UserListContainer>
      ))}
    </PageContainer>
  );
};

export default UsersList;
