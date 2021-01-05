import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [usertest, setUserTest] = useState({
    loginName: "",
    profileImg: "",
  });

  //for the whole useEffect below, we include the empty array as the second argument in useEffect to let useEFfect only run on MOUNT.
  //in useEffect, we make a fetch request for the properties of he user QuincyLarson.

  //for the first then(), we check for a 404 error with the resp.status

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      //for this then(), we take the resolved value from the previous resolved promise. because the value is an object, and we have to remember that objects cannot be children of react, and they have to be broken down to something other than objects.

      //in this example, we DESTRUCTURE the object that we passed in as tw variables, login and avatar_url, and we setUserTest for multiple variables, reaching the name Quincy Larson and the profile picture.
      .then((user) => {
        console.log(user);
        const { login, avatar_url } = user;
        setUserTest({
          ...usertest,
          loginName: login,
          profileImg: avatar_url,
        });
      })
      .catch((error) => console.log(error));
  }, []);

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

  //in this return, we display the userTest.loginName, and the userTest.profileImg
  return (
    <div>
      <h1>{usertest.loginName}</h1>
      <img src={usertest.profileImg} alt="" />
    </div>
  );
};

export default MultipleReturns;
