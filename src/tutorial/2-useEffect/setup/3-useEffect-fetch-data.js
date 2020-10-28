import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users"; //passed into fetch

//second argument

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  const gitUsers = async () => {
    //this is the async await syntax with arrow function
    const response = await fetch(url);
    const users = await response.json(); //running json on the response variable and setting it to the variable name users.
    setUsers(users);
  };

  //can only set up promises INSIDE callback function in useEffect
  useEffect(() => {
    gitUsers();
  }, []); //to solve the infinite loop problem, we add the empty array, which means that useEffect will only run ON MOUNT, not on re-renders, and now we should iterate over the users

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          //in this UL, we map the users array, and for each user we DESTRUCTURE the object, then return the list item INSIDE the unordered list.
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectSecondArgument;

//in this tutorial, we learn that we cannot call useState inside useEffect, because calling useState will trigger a re-render, which triggers useEffect.
//since useState is inside useEffect, we trigger useState again, and it becomes an INFINITE LOOP
