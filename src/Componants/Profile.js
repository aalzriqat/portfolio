import React, { useState } from "react";
import profilepicture from "../assets/ProfilePic.jpeg";

const Profile = () => {
  const [displayBio, setDisplayBio] = useState(false);

  const toggle = () => {
    console.log("Toggle button clicked");
    setDisplayBio(!displayBio);
  };

  return (
    <div className="profile-container">
      <img src={profilepicture} className="profile" alt="profile" />
      <div className="profile-details">
        <h1 className="gradient-text">Hello, I'm Abdulkareem!</h1>
        <p className="gradient-text">A Passionate Software Engineer</p>
        {displayBio ? (
          <div>
            <p className="gradient-text">
              Motivated and results-driven with expertise in C++, C#, and the MERN stack.
            </p>
            <p className="gradient-text">
              Seeking to apply my skills in a challenging Backend or Full Stack Developer role.
            </p>
            <button onClick={toggle} className="btn">Hide</button>
          </div>
        ) : (
          <button onClick={toggle} className="btn">Show More</button>
        )}
      </div>
    </div>
  );
};

export default Profile;