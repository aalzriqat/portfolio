import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfiles = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3>Contact Me</h3>
      {SOCIAL_PROFILES.map(PROFILE => (
        <SocialProfile key={PROFILE.id} socialprofile={PROFILE} />
      ))}
    </div>
  );
};

const SocialProfile = ({ socialprofile }) => {
  const { image, link } = socialprofile;
  return (
    <a href={link}>
      <img src={image} alt="Social" style={{ width: 20, margin: 5 }} />
    </a>
  );
};

export default SocialProfiles;