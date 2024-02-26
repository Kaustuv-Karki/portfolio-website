// import Moon from "../../assets/Moon.svg";
import Moon from "../../../public/Images/Moon.svg";
import Glow from "../../../public/Images/GlowFinal.png";
import Cloud from "../../../public/Images/Union.svg";
import "./styles.css";
import TwinklingStars from "../Stars/TwinklingStars";
import { useEffect, useState } from "react";
import Opening from "../Opening/Opening";
import { motion } from "framer-motion";
// import {MdArrowDownward} from 'react-icons/md'
import { FaArrowDown } from "react-icons/fa";
import Scrambling from "../../utls/Scrambling";

const TypingAnimation = ({ list }) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState(list[0]);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < list.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 4000); // Change this value to adjust the typing speed

    return () => clearInterval(typingInterval);
  }, [index, list]);

  useEffect(() => {
    const typingText = list[index];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentText(typingText.substring(0, charIndex));
      charIndex++;

      if (charIndex > typingText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIndex((prevIndex) =>
            prevIndex < list.length - 1 ? prevIndex + 1 : 0
          );
        }, 1000); // Change this value to adjust the pause between texts
      }
    }, 100); // Change this value to adjust the typing speed

    return () => clearInterval(typingInterval);
  }, [index, list]);

  return <div>{currentText}</div>;
};

const LandingPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(screenWidth);
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // console.log(showOpening);
  const list = ["FrontEnd Developer", "UI/UX Designer"];

  return (
    <div className="full">
      {showOpening ? (
        <Opening />
      ) : (
        <div className="container">
          <TwinklingStars />
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.7,
            }}
            className="text">
            {screenWidth < 1200 ? (
              <h1 className="text__h1">Kaustuv Karki</h1>
            ) : (
              <div>
                <Scrambling text="KAUSTUV" />
                <Scrambling text="KARKI" />
              </div>
            )}
            {/* <p className="text__p">SOFTWARE DEVELOPER / DESIGNER</p> */}
            <p className="text__p">{<TypingAnimation list={list} />}</p>
            {/* 
                        <div>
              <Scrambling text="KAUSTUV" />
              <Scrambling text="KARKI" />
            </div>
            */}
          </motion.div>
          <div className="main-container">
            <motion.img
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              src={Moon}
              className="moon"
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 2.5,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              src={Glow}
              className="glow"
            />
          </div>
          <motion.div
            style={{ "z-index": "10" }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              duration: 3,
              ease: [0.16, 1, 0.3, 1],
            }}>
            <motion.img
              initial={{ x: -80, y: -10 }} // Initial position (move 100 pixels to the left)
              animate={{ x: 80, y: 10 }} // Final position (move 100 pixels to the right)
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              src={Cloud}
              className="cloud_1"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}>
            <FaArrowDown className="scroll" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
