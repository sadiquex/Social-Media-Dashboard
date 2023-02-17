import Heading from "./components/Heading";
import Overview from "./components/Overview";
import SocialMediaCards from "./components/SocialMediaCards";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import ThemeBtn from "./components/ThemeBtn";
function App() {
  // theme
  const themeColours = {
    dark: {
      primary: "hsl(228, 28%, 20%);",
      text: "#fff",
    },
    light: {
      primary: "#fff",
      text: "hsl(228, 28%, 20%);",
    },
  };

  // theme switch
  const [theme, setTheme] = useState("dark");
  const [modeText, setModeText] = useState("Dark Mode");

  // if theme is dark, make it dark
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    // if dark mode is true
    setTheme(isDarkTheme ? "light" : "dark");
    setModeText(isDarkTheme ? "Dark Mode" : "Light Mode");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? themeColours.dark : themeColours.light}>
      <div className="App">
        <div className="container">
          <TopSection>
            <div>
              <SocialMedia>Social Media Dashboard</SocialMedia>
              <TotalFollowers>Total followers:23,004</TotalFollowers>
            </div>
            <SwitchMode>
              <p>{modeText}</p>
              <ThemeBtn toggleTheme={toggleTheme} />
            </SwitchMode>
          </TopSection>
          <SocialMediaCards />
          <Overview />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  @media screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const SocialMedia = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
export const TotalFollowers = styled.p``;
export const SwitchMode = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
