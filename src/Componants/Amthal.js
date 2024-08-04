import React, { Component } from "react";
import { serverUrl } from "../utils";
class Amthal extends Component {
  constructor() {
    super();
    this.state = { mathal: {},amthal:[] };
    this.fetchAmthal=this.fetchAmthal.bind(this);
  }
  componentDidMount() {
    fetch(`${serverUrl}/amthal/random`)
      .then((response) => response.json())
      .then((json) => this.setState({ mathal: json }));
  }
  fetchAmthal() {
    fetch(`${serverUrl}/amthal/ten`)
      .then((response) => response.json())
      .then((json) => this.setState({ amthal: json }));
  }
  render() {
    return (
      <div>
        <h2>Today's Mathal</h2>
        <p>{this.state.mathal.title}</p>
        <hr />
        <h3>More Amthal?</h3>
        <button className="btn" onClick={this.fetchAmthal}>
          Amthal
        </button>
        {
            this.state.amthal.map(mathal =>{
                return <p>  {mathal.title}</p>
            })
        }
      </div>
    );
  }
}

export default Amthal;
