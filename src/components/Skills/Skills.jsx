import "./styles.css";
import CPlus from "../../../public/Images/Skills/c++.png";
import Figma from "../../../public/Images/Skills/figma.png";
import C from "../../../public/Images/Skills/c.png";
import HTML from "../../../public/Images/Skills/HTML.png";
import CSS from "../../../public/Images/Skills/css.png";
import Python from "../../../public/Images/Skills/PYTHON.png";
import JS from "../../../public/Images/Skills/JS.png";
import Github from "../../../public/Images/Skills/github_white.png";
import Illustrator from "../../../public/Images/Skills/illustrator.png";
import Next from "../../../public/Images/Skills/next.png";
import React from "../../../public/Images/Skills/react.svg";
import Jupyter from "../../../public/Images/Skills/jupyter.png";
import Git from "../../../public/Images/Skills/git.svg";
import SkillCard from "../SkillCard/SkillCard";

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
    <div className="skills__main">
      <h1 className="skills__header">Skills</h1>
      <div className="skills__table">
        {frontEndSkills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
