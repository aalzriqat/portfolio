import React, { useState, useEffect } from "react";
import AMTHAL from "../data/Amthal.json";

const getRandomIndex = () => Math.floor(Math.random() * AMTHAL.length);

const randomMathal = () => AMTHAL[getRandomIndex()];

const randomTen = () => {
  const randomList = new Set();
  while (randomList.size < 10) {
    randomList.add(getRandomIndex());
  }
  return Array.from(randomList).map(index => AMTHAL[index]);
};

const Amthal = () => {
  const [mathal, setMathal] = useState({});
  const [amthal, setAmthal] = useState([]);

  useEffect(() => {
    setMathal(randomMathal());
  }, []);

  const fetchAmthal = () => {
    setAmthal(randomTen());
  };

  return (
    <div>
      <h2>Today's Mathal</h2>
      <p>{mathal.title}</p>
      <hr />
      <h3>More Amthal?</h3>
      <button className="btn" onClick={fetchAmthal}>
        Amthal
      </button>
      {amthal.map((mathal, index) => (
        <p key={index}>{mathal.title}</p>
      ))}
    </div>
  );
};

export default Amthal;