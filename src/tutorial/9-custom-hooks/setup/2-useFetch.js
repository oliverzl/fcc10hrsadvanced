import { useState, useEffect } from "react";
//when we pass in useFetch to other components, we can simply pass in the URL as an argument.
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
  }, [url]); //this means that the useEffect will run whenever it mounts OR if the argument(url) changes, meaning we can use it in other components.

  return { loading, products };
};
