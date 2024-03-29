import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Api1() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    makeAPICall(URL);
  }, []);

  if (isError) {
    return <h3>something was happned</h3>;
  }

  if (loading) {
    return <h3>loading...</h3>;
  }

  const makeAPICall = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const comingData = await response.json();
      setUserData(comingData);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>users</h1>
      <ul>
        {userData.map((eachUser) => {
          return <li key={eachUser.id}>{eachUser.username}</li>;
        })}
      </ul>
    </div>
  );
}
