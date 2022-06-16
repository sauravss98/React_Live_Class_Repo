import React, { Children, Component } from "react";

export default class PropsClass extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <>
        <div>
          PropsClass {children} Name: {name} ,Age:{age}{" "}
        </div>
      </>
    );
  }
}
