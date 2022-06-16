import React from "react";

const Events = () => {
  const clickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div>
      <h3>Events</h3>
      <input onChange={clickHandler}type="text" />
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default Events;
