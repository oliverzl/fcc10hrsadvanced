import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  // const [name,setName] = useState('peter')
  // const [age,setAge] = useState(24)
  // const [message,setMessage] = useState('random message')

  const changeMessage = () => {
    if (person.message === "random message") {
      // in this example, for the argument in setPerson, we spread out the person object, and access the message property INSIDE the person object, and assign it a new text
      setPerson({ ...person, message: "hello world" });
    } else setPerson({ ...person, message: "random message" });

    // setPerson({ ...person, message: "hello world" });
    // setMessage('hello world')
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.message}</h4>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
