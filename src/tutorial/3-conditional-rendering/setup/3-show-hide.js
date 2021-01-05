import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      {/* toggles show true and false */}
      <button className="btn" onClick={() => setShow(!show)}>
        Show/hide
      </button>

      {/* only if show is true, then render <Item/> */}
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      //now, this function is required. this function is best used when the component is mounted on condition, for example, <Item />
      window.removeEventListener("resize", checkSize);
    };
  }, []); //now, the problem is with every toggle of the button to show/hide the window px value, it adds event listeners without cleanup, even with the empty dependency array.
  //the empty dependency array does not work in this case because on top, in the ShowHide component, the display of <Item/> depends on the state of show. and every time show is true, <Item/> MOUNTS.
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>Window</h1>
      <h2>Size: {size} PX</h2>
    </div>
  );
};

export default ShowHide;
