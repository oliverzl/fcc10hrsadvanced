//the purpose of this is to have a title, github users, and display components, which the data is FETCHED from the github API.

//becasue the data has to be fetched, which only occurs after the whole app is rendered, since it needs to request it from another server, this is where we use useEffect, to fetch the data after mounting the app.

import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

//second argument

const UseEffectSecondArgument = () => {
  const [users, setUsers] = useState([]);

  //within the callback function inside useEffect, we want to perform a fetch request.

  //in this example, we set up a seperate function, because we need to use async await.
  //since async await returns a promise, we cannot use async on useEffect itself
  //useEffect is looking for the cleanup function

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log("re-render");
    setUsers(users);
  };

  //the empty array in useEffect is important here, or getUsers will invoke setUsers, which will cause a re-render, and start useEffect again, and getUsers() will be invoked again, and the cycle continues..
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectSecondArgument;
