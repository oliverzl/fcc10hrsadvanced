//index.js is the main entry, unless we change settings.

//in the terms of useReducer, we want to have some kind of structure when the app gets bigger and bigger. useState for small scale applications is okay, but when we work as a team, its good to have some 'guardrails', where we only update the state in a 'certain way', so that way everyone is on the same page.
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../../data";

const Index = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
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
      {people.map((person) => {
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
