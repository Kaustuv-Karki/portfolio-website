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
        <BsLinkedin />
        <AiFillGithub />
      </div>
    </div>
  );
};

export default Footer;
