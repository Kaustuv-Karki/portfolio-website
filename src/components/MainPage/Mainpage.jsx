import Skills from "../Skills/Skills.jsx";
import "./styles.css";
import ProjectPage from "../ProjectPage/ProjectPage";
import Footer from "../Footer/Footer";

const Mainpage = () => {
  return (
    <div className="mainpage-container">
      <Skills />
      <ProjectPage />
      <Footer />
    </div>
  );
};

export default Mainpage;
