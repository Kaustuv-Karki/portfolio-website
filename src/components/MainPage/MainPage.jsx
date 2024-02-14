import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage__main">
      <Skills />
      <Projects />
    </div>
  );
};

export default MainPage;
