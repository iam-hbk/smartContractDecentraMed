import React from "react";
import styled from "styled-components";
import welcome from "../Assets/Images/Welcome.png";
import { Link } from "react-router-dom";
import "./SignUp.css";
const WelcomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #048ba8;
  box-size: border-box;
  height: 100vh;
  width: 100vw;
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6f3f6;
  border-radius: ${(props) =>
    props.borderLeft
      ? "10px 0 0 10px"
      : props.borderRight
      ? "0 10px 10px 0"
      : "0"};
  width: 380px;
  height: 75%;
  margin: 10px 2px;
`;
const Image = styled.img`
  margin: 0 15px;
  width: 70%;
  height: 70%;
  size: contain;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid green;
  width: 100%;
  height: 90%;
  margin: 25px 0px;
  padding: 10px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  align-items: center;
  width: 100%;
  // border: 1px solid green;
`;
const Title = styled.h1`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-align: center;
  color: #012a32;
  // border: 1px solid red;
  margin: 5px 0;
`;
const Text = styled.span`
  font-family: "Urbanist";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #012a32;
  // border: 1px solid purple;
`;
const Button = styled.button`
  display: inline-block;
  color: #012a32;
  font-size: 1em;
  margin: 5px 0;
  height: 45px;
  width: 100%;
  padding: 0.25em 1em;
  // border: 1.5px solid #012a32;
  border-radius: 5px;
  display: block;
  background-color: #e6f3f6;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: #048ba8;
    color: white;
    border: white;
  }
`;
const ActionButton = styled(Button)`
  background-color: #048ba8;
  color: #e6f3f6;
  // border: 1px solid #e6f3f6;
`;

function SignUp() {
  return (
    <WelcomeContainer>
      <Section borderLeft>
        <Image alt="welcome" src={welcome}></Image>
      </Section>
      <Section borderRight>
        <Form>
          <Box>
            <Title fontFamily="Urban">Doctor Login</Title>
            {/* <Text>Hey Doctor! Please proceed to login</Text> */}
          </Box>

          <div className="inputContainer">
            <label>DecentraMed ID</label>
            <input placeholder="ID" />
            <label>Password</label>
            <input placeholder="******" type="password" />
          </div>
          <Link style={{ textDecoration: "none" }} to="/Dashboard">
            <ActionButton>Sign In</ActionButton>
          </Link>
        </Form>
      </Section>
    </WelcomeContainer>
  );
}

export default SignUp;
