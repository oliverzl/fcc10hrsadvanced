import React, { useState, useEffect } from "react";

//when we have the useEfect, we also have an option of returning a function.

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

    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    }; //this is a cleanup function inside the useEffect.
  });

  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};
export default UseEffectCleanup;

//on mount: RENDER FIRST, THEN USEEFFECT
//on re-render: RENDER, then CLEANUP(if any) THEN useEffect
