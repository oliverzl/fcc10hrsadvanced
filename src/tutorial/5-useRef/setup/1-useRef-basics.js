import React, { useEffect, useRef } from "react";

//preserves value
//DOES NOT TRIGGER RE-RENDER
//target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello world</div>
    </>
  );
};

export default UseRefBasics;
