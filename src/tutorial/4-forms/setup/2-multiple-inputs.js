import React, { useState } from "react";
//         ----------START OF FCC COMMENTS----------

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

//         ----------END OF FCC COMMENTS----------
const ControlledInputs = () => {
  //in this multiple inputs, we learn about having only ONE useState value for the person instead of multiple useState values. this is useful incase we have too many inputs to handle. we can also set ONE onChange function to be responsible for all the onChange handling.

  //instead of the 3 useState values below:
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");

  //we use this person useState instead. this is just ONE useState value.
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  //over here, we set the useState to store in the addition of person in the people array.
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value }); //universal handleChange function for all inputs. first, const name is the event target name attribute in each input. eg the (Name: input) has 'firstName' as the name attribute, and the (Email: input) has the name set to 'email'. the const value variable follows the (Name: input) example where the value is set to the person object properties set above, in the person useState.
    //the setPerson uses the {...rest} object destucturing, then the name attribute as the 'key' setting it to the value in the input.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      //this ensures that ALL the inputs are filled(using the ternary operators with React)
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]); //adding the newPerson into the people useState array
      setPerson({ firstName: "", email: "", age: "" }); //setting the input fields to empty strings after clicking submit
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName} //value set to the person object firstName property in useState
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email} //default of person.email and the other properties are empty strings
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="age"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person; //destructuring here so we can display the h4 and p below with the variables created here during the destructure.
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
