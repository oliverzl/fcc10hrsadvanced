import React, { useState, useContext } from "react";
import { data } from "../../../data";

//----------START OF FCC COMMENTS----------
// more components
// fix - context api, redux (for more complex cases)
//----------END OF FCC COMMENTS----------

//----------MY COMMENTS----------
//the context API is a way to solve prop drilling, so that we do not need to pass functions down multiple levels as props, hence the name prop drilling.

const PersonContext = React.createContext(); //creating the context.
//now we have access to two components after React.createContext: PROVIDER AND CONSUMER

//Provider: works as a distributor: find the root component, in this case it is the <ContextAPI/>, and then we wrap the return statement of the root component in the PersonContext.Provider

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // in the PersonContext.Provider, we have the value prop, and we can pass in whatever we want inside.
    //in the value below, we pass in the removePerson function, and the people array of objects(data)
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>ContextAPI / useContext</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext); //this is not destructuring mainData
  console.log(mainData);
  //now, we can see that the removePerson function from the <ContextAPI/> component does not go through prop drilling, (does not drill through the <List/> component. )
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext); //curly braces here is destructuring removePerson.

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
