import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage/LandingPage";
import MainLinks from "./components/MainLinks/MainLinks";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      {/* <Cursor /> */}
      <div className="app ">
        <MainLinks />
        <LandingPage />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
