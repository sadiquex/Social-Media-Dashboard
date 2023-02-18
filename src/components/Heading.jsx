import styled from "styled-components";
import { useState, React } from "react";

const Heading = () => {
  // change theme
  const [isOn, setIsOn] = useState(false);

  return (
    <Container>
      <HeadingText>
        <Title className="title">Social Media Dashboard</Title>
        <TotalFollowers className="total-followers">
          Total Followers: 23,004
        </TotalFollowers>
      </HeadingText>
      <Line />
      <SwitchMode>
        <ModeText>Dark Mode</ModeText>
        <Button>
          <SwitchDot onClick={() => setIsOn(!isOn)} isOn={isOn} />
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

  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Line = styled.div`
  height: 10px;
  width: 100px;
  background: red;
  border: 2px solid red;
`;

export const HeadingText = styled.p``;
export const Title = styled.p`
  font-size: 14px;
  /* font-size: 30px; */
  font-weight: 600;
`;
export const TotalFollowers = styled.p``;
export const SwitchMode = styled.div`
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  left: ${({ isOn }) => (isOn ? "20px" : "0%")};
`;
export const ModeText = styled.p``;
