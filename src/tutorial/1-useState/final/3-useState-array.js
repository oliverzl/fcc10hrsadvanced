import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // the function below is to remove singular entries of data
  const removeItem = (id) => {
    // let newPeople  = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    let newPeople = people.filter((person) => person.id !== id);

    setPeople(newPeople);

    // creating a new array which does NOT include the id of the selected person during removeItem function call
  };

  //this is the function to add all the people back into the list, regardless of how many was removed
  const addAll = () => {
    setPeople(data);
  };

  return (
    <>
      {people.map((person) => {
        //this destructures the person object, into two variables, the id and name of the person
        const { id, name } = person;

        return (
          // returns a map of all the people in data
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => addAll()}>
        Add Everything Back
      </button>

      {/* since this sets People array to an empty array, the button below deletes everything from the list. */}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
