import Heading from "./components/Heading";
import Overview from "./components/Overview";
import SocialMediaCards from "./components/SocialMediaCards";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeBtn from "./components/ThemeBtn";
import {
  AppContainer,
  SocialMedia,
  SwitchMode,
  TopSection,
  TotalFollowers,
} from "./AppStyles";
function App() {
  // theme
  const themeColours = {
    dark: {
      primary: "hsl(228, 28%, 20%);",
      text: "#fff",
      mainBg: "hsl(230, 17%, 14%)",
    },
    light: {
      primary: "hsl(227, 47%, 96%)",
      text: "hsl(228, 28%, 20%);",
      mainBg: "hsl(0, 0%, 100%)",
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
      <AppContainer>
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
      </AppContainer>
    </ThemeProvider>
  );
}
export default App;
