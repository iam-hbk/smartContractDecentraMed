import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import {
  Avatar,
  DarkText,
  ListText,
  PageContainer,
  TitlesContainer,
  TitleText,
  UserListContainer,
} from "./CustomComponets";
import { Link } from "react-router-dom";

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
        <Link
          to={{
            pathname: `/dashboard/patient-details/?user=user213`,
            query: { id: "user123" },
          }}
          style={{ textDecoration: "none" }}
        >
          <UserListContainer>
            <Avatar src={user.avatar} />
            <ListText style={{ marginRight: "10px" }}>{user.name}</ListText>
            <ListText>{user.desease}</ListText>
            <ListText>{user.date}</ListText>
            <ListText style={{ paddingLeft: "6%" }}>{user.time}</ListText>
          </UserListContainer>
        </Link>
      ))}
    </PageContainer>
  );
};

export default UsersList;
