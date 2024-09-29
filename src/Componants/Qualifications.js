import React from "react";

const Qualifications = () => {
  return (
    <div className="qualifications-container">
      <h2>My Qualifications</h2>
      <ul>
        <li>
          <h3>Bachelor Accounting & Business Law</h3>
          <a href="https://www.aau.edu.jo" target="_blank" rel="noreferrer">
            <p>Amman Arab University, Amman</p>
          </a>
        </li>
        <hr />
        <li>
          <h3>Accounting Diploma</h3>
          <a href="http://www.bau.edu.jo" target="_blank" rel="noreferrer">
            <p>Albalqa Applied University, Amman</p>
          </a>
        </li>
        <hr />
      </ul>
      <h3>Self-Taught Developer</h3>
      <p>
        In addition to my formal education, I am a self-taught developer. I have
        completed numerous online courses and projects to enhance my skills in
        programming and software development. My dedication to continuous
        learning has equipped me with a strong foundation in various
        technologies and programming languages.
      </p>
    </div>
  );
};

export default Qualifications;