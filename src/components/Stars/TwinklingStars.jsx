import './styles.css';
import { useState, useEffect } from 'react';

const TwinklingStars = () => {
  // Generate an array of stars
   const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 50; 
    const maxSize = 4;
    const minSize = 2;

    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight, 
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: (Math.random() * 4) +2
      })
    }
    setStars(newStars);
  },[])


  return (
    <div className="star-container">
      {stars.map((star, index) => (
        <div className={`star`} key={index} style={{left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          animation: `twinkle ${star.duration}s infinite`}}></div>
      ))}
    </div>
  );
};

export default TwinklingStars;
