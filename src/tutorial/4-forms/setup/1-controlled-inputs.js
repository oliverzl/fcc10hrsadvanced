import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // this prevents the default behaviour of onSubmit, which will prevent the page from refreshing.
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          {/* by default, javascript will try to submit the form and then refresh the page, that is why we cannot see any changes regardining testing. */}
          <div className="form-control">
            <label htmlFor="firstName"> Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email"> Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <button type="submit"> add person</button>
        </form>
        {people.map((person) => {
          const { id: new Date().getTime().toString(), firstName, email } = person;
          return (
            <div>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
