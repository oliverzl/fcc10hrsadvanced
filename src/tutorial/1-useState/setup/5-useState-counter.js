import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0); //this is the normal counter

  const [asyncValue, setAsyncValue] = useState(0); //this is an example in the event of an async useState

  const reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    //this is the async useState. instead of setState(valuehere), we use setState((previousValue) => {...}) for the TRUE state, so that even if there is a delay when clicking the button to add 1 to the value, react will take in the true state as it was clicked, NOT the state during the actual render.
    setTimeout(() => {
      setAsyncValue((prevValue) => {
        return prevValue + 1;
      });
    }, 1000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>Regular Counter</h1>
        <h1>{value}</h1>
        <button
          className="btn"
          // the onClick below is a callback function declared directly inside onClick
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button className="btn" onClick={reset}>
          {/* the button here is a reference handler for onClick */}
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>

        <h1>Async Counter (1 second delay)</h1>
        <h1>{asyncValue}</h1>
        <button className="btn" onClick={complexIncrease}>
          {" "}
          Async Increase Example
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
