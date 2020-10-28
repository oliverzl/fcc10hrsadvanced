import React, { useState } from "react";

//setting up controlled inputs

//JS
//const input = document.getElementById('myText');
//const inputValue = input.value;
//React
//value.onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]); //these are the three useState values

  const handleSubmit = (event) => {
    //function to handle onSubmit
    event.preventDefault(); //this is to set up prevent default behaviour, so that the page will NOT refresh on submit.
    if (firstName && email) {
      //if firstName && email are both true (not empty strings)
      const person = { id: new Date().getTime().toString(), firstName, email };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });

      setFirstName("");
      setEmail(""); //then set both values to be empty strings as we need to clear the input fields after submitting that user
    } else {
      console.log("empty values"); //if ONE or both of the input fields are empty, log this into the console.
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(event) => {
                //on any change to the input field, we set whatever is in the input field to setState for firstName and email.
                setFirstName(event.target.value); //set to the target value of the event of this input field.
              }}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email} // when we provide {value} prop to a FORM FIELD, we need to provide an onChange handler as well, else it will render a READ ONLY field.
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person) => {
          //below the input fields and the button to 'Add Person', we display the people array here.
          const { id, firstName, email } = person; //object destructuring
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>3
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
