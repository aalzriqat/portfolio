
import React from "react";
import profilepicture from "../assets/ProfilePic.jpeg";

class Profile extends React.Component {
  constructor() {
    super();
   
    this.state = { displayBio: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({displayBio: !this.state.displayBio})

  }
  render() {
    return (
      <div>
        <img src={profilepicture} className="profile" alt="profile"/>
        <h1>Hello</h1>
        <p>My name is Abdulkareem, and I am a software enginner.</p>
        {this.state.displayBio? (
          <div>
            <p> I have a strong passion for continuous learning,</p>
            <p>and I find working with React to be particularly enjoyable.</p>
            <button onClick={this.toggle} className="btn">
              Hide
            </button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btn">
            Show More
          </button>
        )}
      </div>
    );
  }
}

export default Profile;
