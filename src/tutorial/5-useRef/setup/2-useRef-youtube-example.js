import React, { useState, useEffect, useRef } from "react";

//this is the useRef Hook Example from youtuber WEB DEV SIMPLIFIED

//here, we try out what to do if we want to show the number of times a component renders on the screen.
//most poeple, will create a useState just to count the number of times the app is rendered, and set up a useEffect that sets the render count + 1.
//however, setRenderCount is updating the state, which triggers useEffect again, which AGAIN calls setRenderCount again and an infinite loop occurs.

//te solution is to useRef, in that the ref will persist between renders of the component itself, and ref does not trigger re-render
const UseRefBasics = () => {
  const [name, setName] = useState("");

  //useRef returns a single object called current, and current will be initially set to the first value passed in to the useRef, in this case, 1.
  const renderCount = useRef(1);
  //so, renderCount is just an object with a current property, and when we update that property, that is what gets PERSISTED between our renders

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  //the keynote to take away is that, now, the initial renderCount is 1. every character we type into the input field, we are triggering a re-render,  which triggers useEffect, however, since renderCount is part of useRef, it will keep adding on to the counter correctly with every re-render. we can change renderCount as manay times as we want and it will NOT TRIGGER RE-RENDER, because it is completely separate from our component render cycle.

  //SIMILAR TO STATE, useRef STORES A PREVIOUS VALUE IN IT, AND THAT VALUE PERSISTS BETWEEN DIFFERENT RENDERS, BUT IT DOES NOT CAUSE A RE-RENDER LIKE STATE.

  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <div>My Name is {name}</div>
      <div>I Rendered {renderCount.current} times</div>
    </>
  );
};

export default UseRefBasics;
