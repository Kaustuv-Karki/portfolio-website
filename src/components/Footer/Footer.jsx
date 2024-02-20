import "./styles.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
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
