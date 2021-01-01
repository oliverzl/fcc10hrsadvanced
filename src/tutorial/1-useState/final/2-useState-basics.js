import React, { useState } from "react";
//useState is a named import, surround it with {} when importing

//react hooks: begin with use: useState, useEffect
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  //this sets the initial value, which is 'random title'
  //text is the state variable name, setText is the 'function' to change it
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      //changing the value of the state variable text conditionally

      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
