import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world"; //for the OR operator, if text is falsy, which it is now, because it is an empty strong, we return 'hello world'.
  const secondValue = text && "hello world";
  //for the AND operator, it works diffrently, in the sense that text has to be truthy for the 'hello world' after && to display.

  //we learn about this so we can set up short circuit exporessions in JSX

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1> value: {secondValue}</h1> */}
      <h1>{text || "john doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError); //this onClick switches the isError state between true and false.
        }}
      >
        {" "}
        toggle error
      </button>
      {isError && <h1> Error...</h1>}
      {/* here it only displays Error... if {isError} is true */}

      {/* below is the ternary operator */}
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error!</h2>
        </div>
      )}
      {/* if isError is true, run paragraph, else, display h2 there is no error! */}
    </>
  );
};

export default ShortCircuit;
