import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

//PropType and default props

const Product = ({ image, name, price }) => {
  const url = image && image.url;

  //in the return statement, we can see that for name and price, we can use the OR operator, but not for the image, because image is an object with the URL property that we are looking for, so 'one level deeper' that we cannot check, so we need to declare a constant url on top to check if the image property is true, and if it is, we ASSIGN image.url to the const url, which is then used below.
  return (
    <article className="product">
      <h4>Single Product</h4>
      <img src={url || defaultImage} alt={name || "default Name"} />
      <h4>{name}</h4>
      <p>${price || "$3.99"}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired, //now, it will show that image and the price for some of the products are missing.
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

//we set up default props to prevent browser from showing errors if the image property is missing. however, its now commented out because there is default checking now in the code on top:

//--------DEFAULT PROPS SETTING------------
// Product.defaultProps = {
//   name: "default name",
//   price: "$3.99 default",
//   image: defaultImage,
// };
//-------- END OF DEFAULT PROPS SETTING------------

export default Product;

//for now, the last product does not have the price here, because when we fetch data from APIs, we are not guaranteed values.

//what is worse is, in the url in the setup/proptypes that we fetch data from, each object has an image property, but the image property is another object, with a property of url, which shows the url of the image.

//in JS, if we try to access URL property on the img, that is UNDEFINED (like the last object), there will be a big error
//therefore, even if 99/100 of the objects in the data all have complete properties, the error will throw because the last one does not have the img property.
