import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter1, setCounter1] = useState(0);

  const [counter2, setCounter2] = useState(0);

  const reset1 = () => {
    setCounter1(0);
  };

  const reset2 = () => {
    setCounter2(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setCounter2((prevState) => {
        //whatever we return below will be our new state value
        return prevState + 1;
      });
    }, 1000);
  };

  return (
    <>
      <p style={{ width: "50%", margin: "0 auto" }}>
        this is an example on two different counters, one that is a standard
        useState counter, and the second one is a more complex counter that has
        setTimeout and for useState to target the actual value, not just during
        a app re-render.
      </p>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{counter1}</h1>
        <button className="btn" onClick={() => setCounter1(counter1 - 1)}>
          decrease
        </button>
        <button className="btn" onClick={reset1}>
          reset
        </button>
        <button className="btn" onClick={() => setCounter1(counter1 + 1)}>
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            width: "50%",
            margin: "0 auto 1rem auto",
          }}
        >
          Here, we demonstrate using useState function instead of just passing
          in the value
        </h1>
        <p style={{ width: "50%", margin: "0 auto 1.5rem auto" }}>
          Instead of passing in the value to setCounter2 directly, we pass in a
          function instead, and the fucntion takes in the prevValue as the
          argument, so it will render with the true value after multiple clicks
        </p>
        <h2>more complex counter</h2>
        <h1>{counter2}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
        <button className="btn" onClick={reset2}>
          Reset counter 2
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
