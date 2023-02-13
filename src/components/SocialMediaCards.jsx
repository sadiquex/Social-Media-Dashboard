import styled from "styled-components";
import React from "react";
import { CardData } from "./CardData";

const SocialMediaCards = () => {
  return (
    <Container>
      {CardData.map((item) => (
        <Card>
          <Handle>
            <img src={item.icon} className="icon" />
            <div className="name">{item.handle}</div>
          </Handle>
          <Followers>{item.followers}</Followers>
          <Crowd>{item.crowd}</Crowd>
          <Today>
            <img src="../images/icon-up.svg" alt="" />
            {item.today}
          </Today>
        </Card>
      ))}
    </Container>
  );
};

export default SocialMediaCards;
export const Container = styled.div`
  gap: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const Card = styled.div`
  padding: 20px;
  background: hsl(228, 28%, 20%);
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
    filter: brightness(150%);
  }
`;

export const Handle = styled.p`
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
`;
