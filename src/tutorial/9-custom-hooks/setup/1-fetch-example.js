import React, { useState, useEffect } from "react";

//this is importing the custom hook from 2-useFetch
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  //useFetch(url) returns both loading and product state values, and below is just destructuring it.
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
