import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

//THIS IS A CUSTOM HOOK, must have the 'use' infront.

//here, we learn ways to solve the problem if we want to reuse the functionality: what if there is another component that needs to fetch data from a url, we do not need to duplicate the lines of code below.

const url = "https://course-api.netlify.app/api/javascript-store-products";
const Example = () => {
  const { loading, products } = useFetch(url); //now, the functionality of fetching data is tucked away in a CUSTOM HOOK. we import this custom hook on top.
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
