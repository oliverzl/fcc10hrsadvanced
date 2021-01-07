//index.js is the main entry, unless we change settings.

//REFACTORED VERSION THAT USES USEREDUCER

//in the terms of useReducer, we want to have some kind of structure when the app gets bigger and bigger. useState for small scale applications is okay, but when we work as a team, its good to have some 'guardrails', where we only update the state in a 'certain way', so that way everyone is on the same page.
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../../data";

const reducer = (state, action) => {
  console.log(state);
  if (action.type === "TESTING") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  //from reducer, we always want to return some kind of state. if we dont return, none of the functionality below will make sense.
  console.log([state, action]);
  return state;
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Hello World",
};

const Index = () => {
  const [name, setName] = useState("");

  //when we invoke useReducer, we get two things: the state value, and the dispatch function, similar to useState.
  // the difference between useState and useReducer, is that, each and every time we want to do something with the state, for useReducer, we must always ALWAYS use dispatch, and it goes through the reducer, and the reducer function takes in the old state, puts it through an 'action', and then 'spits' out the new state.

  //useReducer, looks for reducer, a function that manipulates the state, which happens when we DISPATCH the ACTION, and the second argument in useReducer is the initial state, for now, we set it up as a separate variable called defaultState.
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      //in order to affect anything in our state, we need to 'dispatch' it. now, we set it to happen if the name is not an empty string, essentially meaning we have to add at least a single letter into the input field for the dispatch to work. for dispatch, we always need to pass in an object with the property of type.
      dispatch({ type: "TESTING" });
    } else {
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
