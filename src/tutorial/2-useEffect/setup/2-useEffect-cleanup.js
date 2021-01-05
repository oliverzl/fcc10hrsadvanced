import React, { useState, useEffect } from "react";

//the function below helps to remove the event listener before executing the useEffect again.
// this ensures that the window will only have one event listener regardless of how many useEffects are triggered by re-render.

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);

    //below is a cleanup function inside the useEffect.
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");
  return (
    <>
      <p style={{ width: "50%", margin: " 0 auto" }}>
        when we have the useEfect, we also have an option of returning a
        function.
      </p>
      <p style={{ width: "50%", margin: " 0 auto" }}>
        this ensures that the window will only have one event listener
        regardless of how many useEffects are triggered by re-render.
      </p>
      <h1>window size</h1>
      <h2>{size} PX</h2>
    </>
  );
};
export default UseEffectCleanup;

//on mount: RENDER FIRST, THEN USEEFFECT
//on re-render: RENDER, then CLEANUP(if any) THEN useEffect
