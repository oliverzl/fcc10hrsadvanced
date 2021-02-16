import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect"); //this is useEffect, runs after every mount and every subsequent re-render
    document.title = `New Messages(${value})`;
  }); //useEffect accepts second argument which is the dependency array
  //empty dependency array means that the useEffect will only run on mount.
  //values inside the array means that, useEffect will run as long as any variable inside the useEffect is triggered, useEffect will run as well.

  useEffect(() => {
    console.log("hello world");
  }, []); //we can have multiple useEffects in the component, but this useEffect will only run on initial mount as the dependency array is EMPTY therefore it will not run after subsequest renders of the component
  console.log("render Component"); //this is just normal JSX
  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        //MUST ALWAYS REMEMBER THAT FOR ONCLICK, WE MUST PUT IN THE FUNCTION DECLARATION. THIS MEANS:  1. DECLARE A FUNCTION ABOVE, AND PUT IN THE FUNCTION WITHOUT CALLING IT: onClick = {handleSubmit}, NOT onClick = {handleSubmit()}
        //2. arrow function right inside the onClick, like below
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me!!
      </button>
    </>
  );
};

export default UseEffectBasics;
