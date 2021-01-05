import React, { useState } from "react";

//setting up controlled inputs

//the goal of this is to set up an array called people, that we can add to,

//JS
//const input = document.getElementById('myText');
//const inputValue = input.value;

//React is a different set up:
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
      const person = { id: new Date().getTime().toString(), firstName, email }; //the id will always be unique because its part of the time that the submit happens, something like a version of a hash.
      console.log(person);
      setPeople((people) => {
        return [...people, person]; //this is to CHANGE the array to either ADD or remove people in the array, and for this example its only ADDING.
      });
      setFirstName("");
      setEmail(""); //then set both values to be empty strings as we need to clear the input fields after submitting that user
    } else {
      console.log("empty values"); //if ONE or BOTH of the input fields are empty, log this into the console.
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          {/* handleSubmit is called onto the WHOLE form */}
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
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email} //the value here is the value in useState for email.
              onChange={(event) => setEmail(event.target.value)} //any keystroke in this input will setEmail to whatever is inside the input field
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          //mapping the people array.
          //below the input fields and the button to 'Add Person', we display the people array here.

          //do not use index creating lists, it will be a problem if we remove items from the list
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
