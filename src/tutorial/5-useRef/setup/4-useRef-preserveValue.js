import React, { useState, useEffect, useRef } from "react";

//this is the useRef Hook 3rd Example from youtuber WEB DEV SIMPLIFIED, to preserve the previous value without triggering re-render:

//you can technically access the previous value of the state, but it is only available in the setState function itself.

const UseRefBasics = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);
  return (
    <>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
};

export default UseRefBasics;
