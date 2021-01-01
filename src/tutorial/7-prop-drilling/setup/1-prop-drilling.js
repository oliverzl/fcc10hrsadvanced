import React, { useState } from "react";
import { data } from "../../../data";
//----------START OF FCC COMMENTS----------
// more components
// fix - context api, redux (for more complex cases)
//----------END OF FCC COMMENTS----------

//---------MY COMMENTS---------
//prop drilling is not an official term, but it is like a side effect when we have multiple components, and we have the big component tree, and we need to pass some state from the top component to the bottom of the component tree.

//what if we set up a function that deletes a single item from the list? now, we need to pass down the removePerson function to the List component, and the List component needs to pass down that same function to SinglePerson component.

//WE CAN ALSO PASS DOWN FUNCTION AS PROPS

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    //we have to pass this down to the <SinglePerson/> component because only the main component here, <PropDrilling/>, has the people useState.
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson} />
      {/* List component has two props: people, removePerson */}
      {/* <List/> component with a prop called people, set to the people useState, set to the data array */}
    </section>
  );
};

const List = ({ people, removePerson }) => {
  //getting the people prop and the removePerson function (prop) from above.
  return (
    <>
      {people.map((person) => {
        //for each item in the people array, we return a <SinglePerson/> component, in data there are 4
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson} //we still have to pass this from the <List/> prop above
          />
        );
        //{...people} is destructuring the data array. this gives us two props, id and name, which is shown below in the SinglePerson props
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default PropDrilling;
