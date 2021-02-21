//in this file, we use the shortcuts to quickly create a component with the propTypes
//instead of creating the file and typing in rface, now we type in rfacp, which generators quick boiletplate for components that we think requires the propTypes.

import React from "react";
import PropTypes from "prop-types";

const testing = (props) => {
  return <div></div>;
};

testing.propTypes = {
  //this is a shortcut of setting up the prop.
  //name:ptar
  //pt is proptypes, and after that there is a popup askng for the next character input, which signifies the type of prop, and adding the R right at the end is the shortcut for isRequired.
  name: PropTypes.array.isRequired,
};

export default testing;
