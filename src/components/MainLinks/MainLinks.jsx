import React from "react";
import "./styles.css";
import { IoMdDownload } from "react-icons/io";
import pdf from "../../../public/CV_Kaustuv_Karki.pdf";

const MainLinks = () => {
  return (
    <div className="mainlinks__main">
      <a
        href={pdf}
        download="CV_Kaustuv_Karki.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mainlinks__cv ">
        <IoMdDownload className="mainlinks__icons" />
        <p>CV</p>
      </a>
    </div>
  );
};

export default MainLinks;
