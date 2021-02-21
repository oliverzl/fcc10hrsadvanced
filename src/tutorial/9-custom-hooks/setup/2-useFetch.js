import { useState, useEffect } from "react";
//functionality is tucked away in this custom hook
//this custom hookl expects one argument, url

//the function here can only be a component, or a custom hook.
//custom hook names MUST have use infront, eg useFetch useDelete etc.
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  //we call the useEffect when we invoke the function, and also if we change the arugment for the custom hook.
  return { loading, products };
};
