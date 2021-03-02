//memo function, useMemo, useCallback

//1. memo function.
//the problem now is, when we change the count state value, which is in the Index, it triggers re-render with Biglist component, which then triggers re-render in the SingleProduct component. solution is the memo function in React.

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders
const calculateMostExpensive = (data) => {
  console.log("hello");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  //the solution is to use the useCallback hook, which checks the function, has the value of the function changed? if it hasnt, we can leave it alone.

  //now, after adding useCallback to addToCart, it will no longer trigger re-render for Biglist component, it will only recreate the addToCart function when the cart state is affected. affecting the count state will not change anything.

  // once we interact with the count state, we wont trigger re-render and it wont console.log the SingleProduct side, because we can add the dependency array to only re-create the addToCart function if the cart state value changes.
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  //this is demonstrating useMemo hook

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        Increase Count by 1
      </button>
      <h1 style={{ marginTop: "3rem" }}> Cart: {cart}</h1>
      <h1>Most Expensive : ${calculateMostExpensive(products)}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//the memo method is checking the props value in the component itself, which is products, changes or not. if it does not, it will NOT trigger re-render in Biglist component, which in turn results that SingleProduct will not be re-rendered.
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("big list called");
  });
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single item called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add To Cart</button>
    </article>
  );
};
export default Index;
