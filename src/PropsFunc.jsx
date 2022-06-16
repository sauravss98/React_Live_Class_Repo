import React from "react";

const PropsFunc = ({ name, age, children }) => {
  return (
    <div>
      {children} {name} Age: {age}
    </div>
  );
};

export default PropsFunc;
