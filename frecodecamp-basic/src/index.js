import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    id: 1,
    title: "I Love You To The Moon and Back",
    author: "Amelia Hepworth",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 2,
    title: "Ready Player Two: A Novel",
    author: "Ernest Cline",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/811W9hHXiwL._AC_UL200_SR200,200_.jpg",
  },

  {
    id: 3,
    title: "A Promised Land",
    author: "Barack Obama",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
  },
];

const BookList = () => {
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          const { img, title, author } = book;
          //this
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = ({ img, title, author }) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world wow");
  };

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>

      <button type="button" onCLick={}>
        A More Complex Example
      </button>
    </article>
  );
};

ReactDOM.render(
  <BookList />,

  document.getElementById("root")
);
