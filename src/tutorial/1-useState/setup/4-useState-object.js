import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });
  const changeMessage = () => {
    if (person.message === "random message") {
      setPerson({ ...person, message: "hello world" }); //this is a way to use useState in objects, through object destructuring
    } else setPerson({ ...person, message: "random message" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
