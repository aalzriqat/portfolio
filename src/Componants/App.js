import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import Courses from "./Courses";
import "../index.css";
import SocialProfiles from "./SocialProfiles";
import TitleWithHooks from "./TitleWithHooks";
import Header from "./Header";

const App = () => {
  return (
    <div className="container">
      <TitleWithHooks />
      <div className="row">
        <div className="column">
          <Profile />
        </div>
        <div className="column">
          <Qualifications />
        </div>
      </div>
      <hr />
      <Courses />
      <hr />
      <SocialProfiles />
    </div>
  );
};

export default App;