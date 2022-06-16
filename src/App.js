import React from "react";
import First from "./First";
import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";
import PropsClass from "./PropsClass";
import PropsFunc from "./PropsFunc";
import State from "./State";
import Events from "./Events";
import EventClass from "./EventClass";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Welcome to react App</h3>
      <First />
      <ClassComp />
      <FuncComp />
      <PropsClass name="Saurav" age={33}>
        Hello
      </PropsClass>
      <PropsFunc name="Appu" age={12}>
        Hi there
      </PropsFunc>
      <State/>
      <Events/>
      <EventClass/>
    </div>
  );
}

export default App;
