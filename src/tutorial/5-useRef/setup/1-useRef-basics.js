import React, { useEffect, useState, useRef } from "react";
//----------START OF FCC COMMENTS----------
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements
//----------END OF FCC COMMENTS----------

// works alot like useState
//useState triggers re-render, useRef does not.
//useRef returns MUTABLE OBJECT, with one property: current

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null); //useRef(null) sets the default value of the ref to be null.

  //below is just another useRef example.
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  //below is fcc setup
  const handleSubmit = (e) => {
    e.preventDefault(); //to prevent default behaviour
    console.log(refContainer.current.value); //whatever is typed into the input will be logged into the console when the submit button is clicked
    console.log(divContainer.current); //the DOM element that has the divContainer useRef will be logged into the console when the submit button is clicked, in this case its <div>hello world</div>
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  }, []); // empty array means it only triggers on mount. this is here so that it does not run when we try out the second example of useRef below. remove the empty array to try the second example
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit"> submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>

      {/* below is another example for useRef */}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        My Name is {name} and it used to be {prevName.current}
      </div>
    </>
  );
};

export default UseRefBasics;
