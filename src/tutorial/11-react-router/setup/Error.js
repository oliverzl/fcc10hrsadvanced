import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;

//we add a link to the homepage, in case the user tries to access a page that does not exist.
