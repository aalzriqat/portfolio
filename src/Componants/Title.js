import React, { useState, useEffect } from "react";

const TITLES = ["A software engineer", "a pc games lover", "an enthusiastic learner"];

const Title = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const animateTitles = () => {
      const titleInterval = setInterval(() => {
        const index = (titleIndex + 1) % TITLES.length;
        setTitleIndex(index);
        setFadeIn(true);
        setTimeout(() => setFadeIn(false), 2000);
      }, 4000);

      return () => {
        clearInterval(titleInterval);
      };
    };

    animateTitles();
  }, [titleIndex]);

  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      I am {TITLES[titleIndex]}
    </p>
  );
};

export default Title;