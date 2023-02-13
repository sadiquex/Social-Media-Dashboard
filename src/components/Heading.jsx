import React from "react";
import styled from "styled-components";

const Heading = () => {
  // change theme

  return (
    <Container>
      <headingText>
        <Title className="title">Social Media Dashboard</Title>
        <TotalFollowers className="total-followers">
          Total Followers: 23,004
        </TotalFollowers>
      </headingText>
      <SwitchMode>
        <ModeText>Dark Mode</ModeText>
        <Button>
          <SwitchDot />
        </Button>
      </SwitchMode>
    </Container>
  );
};

export default Heading;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const headingText = styled.p``;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
export const TotalFollowers = styled.p``;
export const SwitchMode = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
`;
export const Button = styled.div`
  background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  width: 50px;
  height: 20px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 2px;
  position: relative;
`;
export const SwitchDot = styled.div`
  background: hsl(230, 17%, 14%);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  /* top: 0; */
  left: 0;
`;
export const ModeText = styled.p``;
