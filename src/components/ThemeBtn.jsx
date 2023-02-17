import React from "react";
import styled from "styled-components";
import { useState } from "react";

const ThemeBtn = ({ toggleTheme }) => {
  const [switched, setSwitched] = useState(false);

  const changePosition = () => {
    setSwitched(!switched);
  };

  const toggle = () => {
    toggleTheme();
    changePosition();
  };

  return (
    <div>
      <Button>
        <SwitchDot onClick={() => toggle()} />
      </Button>
    </div>
  );
};

export default ThemeBtn;

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
  left: 2px;
  top: 2px;
  transition: transform 0.3s ease;
  /* transform: translateX(25px); */
  transform: translateX(${({ switched }) => (switched ? "25px" : "0")});
`;
export const ModeName = styled.p``;
