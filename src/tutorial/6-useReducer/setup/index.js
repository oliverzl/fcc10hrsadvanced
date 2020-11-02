import React, { useState, useEffect, useReducer, useRef } from "react";

import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState); //always use dispatch that goes through reducer every time we want to do something with the whole state.

  //----------HANDLE SUBMIT----------
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      //this handles the case where there is input value
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  //----------END OF HANDLE SUBMIT----------

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
      <div>
        <button
          className="button"
          onClick={() => {
            dispatch({ type: "REMOVE_ALL" });
          }}
        >
          Remove All
        </button>
      </div>
    </>
  );
};

export default Index;
