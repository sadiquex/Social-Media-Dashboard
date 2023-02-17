import styled from "styled-components";
import React from "react";
import { CardData } from "./CardData";
import upArrow from "../images/icon-up.svg";
import { motion } from "framer-motion";

const SocialMediaCards = () => {
  return (
    <Container>
      {CardData.map((item, index) => (
        <Card key={index}>
          <Handle>
            <img src={item.icon} alt="icon image" className="icon" />
            <div className="name">{item.handle}</div>
          </Handle>
          <Followers>{item.followers}</Followers>
          <Crowd>{item.crowd}</Crowd>
          <Today>
            <img src={upArrow} alt="" />
            {item.today}
          </Today>
        </Card>
      ))}
    </Container>
  );
};

export default SocialMediaCards;
export const Container = styled(motion.div)`
  gap: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const Card = styled(motion.div)`
  padding: 20px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-width: 4px;
  border-style: solid;
  border-image: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))
    1;
  gap: 10px;
  white-space: nowrap;
  &:hover {
    /* background: hsl(228, 34%, 66%); */
    filter: brightness(90%);
  }
`;

export const Handle = styled.div`
  display: flex;
  align-items: center;
  .icon {
  }
  .name {
    font-size: 14px;
  }
`;
export const Followers = styled.p`
  font-size: 40px;
  font-weight: 700;
`;
export const Crowd = styled.p`
  letter-spacing: 4px;
  font-size: 70%;
`;
export const Today = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: hsl(163, 72%, 41%);
  display: flex;
  align-items: center;
`;
