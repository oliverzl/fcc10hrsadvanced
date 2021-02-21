//working with APIs, we know that sometimes some of the properties in objects with APIs are not always there. john shows that the price property of all the objects may not always exist, and the last object in the array does not have the price property.

//the question is, what if a property does not exist in the data that we're fetching?

//sample object shows that the image prop inside the sample object is actually an object as well, with the url property, which is what we really want.
//if we try to access the url property on image: undefined on the last object, we get error
//if only 99/100 have all the properties except that one object, it will still throw an error
//sample: { id: '...', name: 'randomName', image: {url: '.....'} }

//in the video, the last object does not even have the image object property, and in javascript, we know that if we try to access the url property in a non-existent object, we get a huge error.
//if 1/100 of the properties is missing, it doesnt matter if the 99 items are errorless, it will still spoil everything.

import React from "react";

//here, we just import PropTypes, which is what we need to get started.
//below is an import from the package.
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  // what we are doing below is, we only set image.url to a const url, ONLY if image ExtensionScriptApis.
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>Single Product</h4>
      {/* we cannot use default image as the default value with the OR operator like this: */}
      {/* <img src={image.url || defaultImage} alt='' /> */}
      {/* when we check for the url property on the image, we cannot use the OR operator, because JS will complain that we are trying to access a property called url on an image object property that is undefined, so we set up the AND operator on top.  */}

      <img src={url || defaultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      {/* we can use the OR operator to show either the price OR 3.99 as a default */}
      <p>{price || 3.99}</p>
    </article>
  );
};

//this is the PROPERTY ON THE PRODUCT COMPONENT THAT IS ALWAYS GOING TO BE THERE.
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

//here we set up default props, if name/price/image is missing.
Product.defaultProps = {
  name: "default name",
  price: 3.99,
  image: defaultImage,
};

export default Product;
