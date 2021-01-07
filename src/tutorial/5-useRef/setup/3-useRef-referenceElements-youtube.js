import React, { useState, useEffect, useRef } from "react";

//this is the useRef Hook 2nd Example from youtuber WEB DEV SIMPLIFIED, to reference elements inside the HTML, and this is so popular that each element inside the document has a ref attribute, and we can set it to any ref that we want.

const UseRefBasics = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();

  //this is the second example from WDS youtube, which shows the common use scenarios for useRef, which is to target specific elements inside the document.
  //in this example, we will focus the input with a click of the button BELOW the input field.

  function focus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefBasics;
