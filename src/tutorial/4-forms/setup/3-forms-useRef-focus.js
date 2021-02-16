import React, { useState, useRef, useEffect } from "react";
// //for this forms, we implement useRef to focus the field right after the render and submission of the person object itself.

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const firstNameContainer = useRef(null);
  const emailContainer = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  useEffect(() => {
    emailContainer.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
      //focus on firstName input RIGHT after a submission
      firstNameContainer.current.focus();
    }
  };

  const removeItem = (id) => {
    console.log(id);
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    firstNameContainer.current.focus();
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              ref={firstNameContainer}
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName} //value set to the person object firstName property in useState
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              ref={emailContainer}
              type='email'
              id='email'
              name='email'
              value={person.email} //default of person.email and the other properties are empty strings
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person; //destructuring here so we can display the h4 and p below with the variables created here during the destructure.
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                Remove here
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
