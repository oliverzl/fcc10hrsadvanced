import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //ti make text truthy, it must be a string, and to make text falsy, it must be an empty string
  const [text, setText] = useState("");
  const [isError, setIsError] = useState("");

  //for the OR operator, if text is an empty string, then we return the second value.
  // for the beginning firstValue example,

  const firstValue = text || "hello world";

  //however, for the && operator, if text is truthy, we return the second value.
  const secondValue = text && "hello world";

  return (
    <>
      {/* we can also set ternary operators right inside the return statements of JSX: */}
      <h1>{firstValue + " is shown when it is true"}</h1>
      {/* the value below will display variable text if text is truthy, and 'john doe' if variable text is falsy */}
      <h1>{text || "john doe will be displayed if text is falsy"}</h1>

      {/* for the example below: if text is true, return h1 goodye world */}
      {text && <h1>goodbye world will be displayed if text is truthy</h1>}

      {!text && <h1>Shown when variable text is NOT true</h1>}

      <h2>Value: {secondValue}</h2>

      <h1>BUTTON EXAMPLE</h1>

      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        Toggle error
      </button>
      {isError && <h1>Error occurred...</h1>}
    </>
  );
};

export default ShortCircuit;
