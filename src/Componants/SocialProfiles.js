import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

class SocialProfiles extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Contact Me</h3>
        {
          SOCIAL_PROFILES.map(PROFILE => {
            return <SocialProfile key={PROFILE.id} socialprofile={PROFILE} />
          })
        }
      </div>
    );
  }
}

class SocialProfile extends React.Component {
  render() {
    const { image, link } = this.props.socialprofile;
    return (
      <a href={link}>
        <img src={image} alt="Social" style={{ width: 20, margin: 5 }} />
      </a>
    );
  }
}

export default SocialProfiles;
