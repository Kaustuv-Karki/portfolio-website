import React, { useState } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import "./styles.css";

export default function Scrambling({ text }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = (event) => {
    let iteration = 0;

    const id = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.getAttribute("data-value")[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.getAttribute("data-value").length) {
        clearInterval(id);
      }

      iteration += 1;
    }, 100); // <-- Increased interval duration

    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <h1
      className="h1-text"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      data-value={text}>
      {text}
    </h1>
  );
}
