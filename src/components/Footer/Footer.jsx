import "./styles.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Contact from "../Contact/Contact";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer__header bouncy">Contact Me</h1>
      <Contact />
      <a className="email" href="mailto:karkikaustuv@gmail.com">
        karkikaustuv@gmail.com
      </a>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/kaustuvkarki/"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Kaustuv-Karki"
          target="_blank"
          rel="noreferrer">
          <AiFillGithub className="github__icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
