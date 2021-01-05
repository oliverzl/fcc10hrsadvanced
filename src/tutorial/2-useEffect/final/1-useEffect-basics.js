import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  });

  useEffect(() => {
    console.log(
      "this effect has empty array dependancies, so it will only run on mount"
    );
  }, []);

  console.log("render component");
  return (
    <>
      <h4 style={{ width: "50%", margin: " 0 auto" }}>
        useEffect will run on mount, and on re-render. to run only on mount, add
        an empty array at useEffect, we can have muliple useEffect
      </h4>
      <h1>{value}</h1>
      <ul>
        <li>data-fetching</li>
        <li>event listening</li>
        <li>subscriptions</li>

        <li style={{ fontStyle: "bold", fontWeight: "900" }}>
          RUNS AFTER EVERY RENDER
        </li>
      </ul>
      <p style={{ width: "50%", margin: " 0 auto" }}>
        since there is a change(re-render) after every click utilising useState,
        useEffect will kick in
      </p>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me to increase
      </button>
    </>
  );
};

export default UseEffectBasics;
