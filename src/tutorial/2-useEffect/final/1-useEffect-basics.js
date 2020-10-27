import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  console.log("this is outside use effect so it loads after every render");
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
    console.log(
      "this logs after every render as well, but if empty dependency array means this will only run on mount"
    );
  }, []);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
