import styled from "styled-components";
import React from "react";
import { OverviewData } from "./OverviewData";

const Overview = () => {
  return (
    <div>
      <Title>Overview - Today</Title>
      <Container>
        {OverviewData.map((item) => (
          <Card>
            <LeftSide>
              <Name>{item.title}</Name>
              <Count>{item.count}</Count>
            </LeftSide>
            <RightSide>
              <Icon>
                <img src={item.icon} alt="" />
                fb
              </Icon>
              <Percent>{item.percent}</Percent>
            </RightSide>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Overview;

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

export const Container = styled.div`
  gap: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;

const Card = styled.div`
  height: 100px;
  padding: 20px;
  background: hsl(228, 28%, 20%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
  &:hover {
    filter: brightness(150%);
  }
`;

export const LeftSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RightSide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Name = styled.p`
  font-size: 12px;
`;
export const Count = styled.p`
  font-weight: 700;
  font-size: 30px;
`;
export const Percent = styled.p``;
export const Icon = styled.div``;
