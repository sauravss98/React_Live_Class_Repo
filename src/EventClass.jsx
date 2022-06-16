import React, { Component } from "react";

export default class EventClass extends Component {
  state = {
    name: "Saurav",
  };
  clickHandler = () => {
    this.setState({ name: "Appu" });
  };
  render() {
    return (
      <div>
        <h3>Event-{this.state.name}</h3>
        <input type="text" />
        <button onClick={(this.clickHandler)}>Click</button>
      </div>
    );
  }
}
