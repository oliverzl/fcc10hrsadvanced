import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson"; //we change QuincyLarson to QuincyLarsons to trigger a 404 error (page not found)

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    //this is a useEffect that runs only on mount, that FETCHES DATA
    setIsLoading(true);
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          //this makes sure that the page is basically NOT 404
          return resp.json();
        } else {
          setIsLoading(false); //else, the loading is false, and there will be an error
          setIsError(true);
          throw new Error(resp.statusText); //throwing error stops the code below to stop running
        }
      }) //first it fetches data from the url, then changes it into json
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []); //empty dependency here means useEffect will only run on mount

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  if (user) {
    return (
      <div>
        <h1>{user}</h1>
      </div>
    );
  }

  return <h2>multiple Returns</h2>;
};

export default MultipleReturns;
