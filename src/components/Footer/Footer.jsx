import "./styles.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import Contact from "../Contact/Contact";
import pdf from "../../../public/CV_Kaustuv_Karki.pdf";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1 className="footer__header bouncy">Contact Me</h1>
      <Contact />
      {/* <a className="email" href="mailto:karkikaustuv@gmail.com">
        karkikaustuv@gmail.com
      </a> */}
      <div className="cv__download">
        <div className="button__background"></div>
        <div className="cv__button">
          <a
            href={pdf}
            download="CV_Kaustuv_Karki.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mainlinks__cv ">
            Download CV
          </a>
        </div>
      </div>
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
