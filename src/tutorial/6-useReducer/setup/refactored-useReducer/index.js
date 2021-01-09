//index.js is the main entry, unless we change settings.

//REFACTORED VERSION THAT USES USEREDUCER

//in the terms of useReducer, we want to have some kind of structure when the app gets bigger and bigger. useState for small scale applications is okay, but when we work as a team, its good to have some 'guardrails', where we only update the state in a 'certain way', so that way everyone is on the same page.

//for React's explanation:
//useReducer is preferable compared to useState, when we have complex state logic that involves multiple sub-values or when the NEXT STATE DEPENDS ON THE PREVIOUS STATE.

//when we invoke useReducer, we get two things: the state value, and the dispatch function, similar to useState.
// the difference between useState and useReducer, is that, each and every time we want to do something with the state, for useReducer, we must always ALWAYS use dispatch, and it goes through the reducer, and the reducer function takes in the old state, puts it through an 'action', and then 'spits' out the new state.

//useReducer, looks for reducer, a function that manipulates the state, which happens when we DISPATCH the ACTION, and the second argument in useReducer is the initial state, for now, we set it up as a separate variable called defaultState.

import React, { useState, useReducer, useRef, useEffect } from "react";
import Modal from "./Modal";
import reducer from "./reducer";

//initial state used by useReducer
const defaultState = {
  list: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  //sets the state, to initialState for the 'initial state' when it mounts
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      //in order to affect anything in our state, we need to 'dispatch' it. now, we set it to happen if the name is not an empty string, essentially meaning we have to add at least a single letter into the input field for the dispatch to work. for dispatch, we always need to pass in an object with the property of type.
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  //this useEffect is to make sure the input field is highlighted on mount.

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  //----------------RETURN STATEMENT BELOW--------------

  return (
    <>
      {/* only if state.isModalOpen is true, then return the <Modal/> component, with the modalContent set to the state.modelContent. */}
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.list.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
