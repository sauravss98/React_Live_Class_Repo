import React, { Component } from "react";

export class EventClass extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  state = {
    name: "Inferno",
  };
  clickHandler = function (e, name) {
    console.log(e, name);
    this.setState({ name: "Appu" });
  };
  render() {
    return (
      <div>
        <p>Events - {this.state.name}</p>
        <input type="text" />
        <button
          onClick={(e) => {
            this.clickHandler(e, "Saurav");
          }}
        >
          Click
        </button>
      </div>
    );
  }
}
