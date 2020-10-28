import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        //this sets a list of people all with the remove functionality
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove here
            </button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear all Items
      </button>
    </>
  );
};

export default UseStateArray;
