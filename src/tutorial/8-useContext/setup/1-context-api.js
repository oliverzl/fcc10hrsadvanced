import React, { useState, useContext } from "react";
import { data } from "../../../data";

//---------MY COMMENTS---------
//CREATING THE CONTEXT

//always wrap the main app in the context.Provider

const PersonContext = React.createContext();
//useContext returns two COMPONENTS, PROVIDER AND CONSUMER
//we access the context by: PersonContext.Provider
//provider works as a distributor: we find the root component, and wrap the return of root component in PersonContext provider.

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    //we only wrap our component tree or our whole application in PersonContext.Provider. this is the only place where PersonContext.Provider is used, to wrap around return statement of app/root component.
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>useContext / context API</h3>
      <List />
      {/* this button refreshes all the people */}
      <button
        className='btn'
        onClick={() => {
          setPeople(data);
        }}
      >
        Refresh
      </button>
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData);
  //here we show that we do not need to destructure mainData. useContext(PersonContext) returns an OBJECT as shown by mainData.
  //here we can just map mainData.people. this is an array
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

export default ContextAPI;

//we need to pass in PersonContext to any call of useContext

//john smilga's personal comments about useContext:
//useContext is not useful to him unless the component tree is at least 3 levels down, because it doesnt jusitfy the extra effort to create the context instead of drilling props.

//BREAKDOWN OF USECONTEXT SET UP:

// const AppContext = React.createContext();

// const AppProvider = () => {

//   //declare all the state values to use context with.
//   return (
//     <AppContext.Provider value = {{...}}>
//       <App />
//     </AppContext.Provider>
//   );
// };
