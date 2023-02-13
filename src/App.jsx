import Heading from "./components/Heading";
import Overview from "./components/Overview";
import SocialMediaCards from "./components/SocialMediaCards";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Heading />
        <SocialMediaCards />
        <Overview />
      </div>
    </div>
  );
}

export default App;
