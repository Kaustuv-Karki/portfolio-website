import "./styles.css";
import CPlus from "../../../public/Images/Skills/C++.png";
import Figma from "../../../public/Images/Skills/figma.png";
import C from "../../../public/Images/Skills/C.png";
import HTML from "../../../public/Images/Skills/HTML.png";
import CSS from "../../../public/Images/Skills/CSS.png";
import Python from "../../../public/Images/Skills/python.png";
import JS from "../../../public/Images/Skills/JS.png";
import Github from "../../../public/Images/Skills/github.png";
import Illustrator from "../../../public/Images/Skills/illustrator.png";
import Next from "../../../public/Images/Skills/next.svg";
import React from "../../../public/Images/Skills/react.svg";
import Jupyter from "../../../public/Images/Skills/jupyter.png";
import Git from "../../../public/Images/Skills/git.svg";
import SkillsCard from "./SkillsCard";

const frontEndSkills = [
  {
    name: "HTML",
    image: HTML,
  },
  {
    name: "CSS",
    image: CSS,
  },
  {
    name: "C",
    image: C,
  },
  {
    name: "C++",
    image: CPlus,
  },
  {
    name: "Python",
    image: Python,
  },
  {
    name: "Figma",
    image: Figma,
  },
  {
    name: "JS",
    image: JS,
  },
  {
    name: "Jupyter",
    image: Jupyter,
  },
  {
    name: "Git",
    image: Git,
  },
  {
    name: "Github",
    image: Github,
  },
  {
    name: "Adobe Illustrator",
    image: Illustrator,
  },
  {
    name: "React",
    image: React,
  },
  {
    name: "Next JS",
    image: Next,
  },
];

const Skills = () => {
  return (
    <div className="skill-container">
      <span className="skill-title">
        <h1 className="skill-h1">Skills</h1>
        {/* <p>The things that I excel in</p> */}
      </span>
      <div className="skills-table">
        {frontEndSkills.map((skill, index) => (
          <SkillsCard key={index} name={skill.name} image={skill.image} />
        ))}
      </div>
      {/* <div className="skill-main">
        <div className="skill-frontend">
          <h2 className="skill-subtitle">FrontEnd</h2>
          <div className="skill-subcontainer">
            <div className="skill-button">HTML</div>
            <div className="skill-button">CSS</div>
            <div className="skill-button">JS</div>
            <div className="skill-button">REACT</div>
            <div className="skill-button">Tailwind</div>
          </div>
        </div>
        <div className="skill-frontend">
          <h2 className="skill-subtitle">Design</h2>
          <div className="skill-subcontainer">
            <div className="skill-button">Figma</div>
            <div className="skill-button">Adobe Illustrator</div>
          </div>
        </div>
        <div className="skill-frontend">
          <h2 className="skill-subtitle">Other Tools</h2>
          <div className="skill-subcontainer">
            <div className="skill-button">Git</div>
            <div className="skill-button">Github</div>
            <div className="skill-button">VS Code</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
