import React from "react";
import useFetch from "./useFetchApi";

export default function Api1() {
  const URL = "https://jsonplaceholder.typicode.com/users";
  const [userData, loading, isError] = useFetch(URL);

  if (isError) {
    return <h3>something was happned</h3>;
  }

  if (loading) {
    return <h3>loading...</h3>;
  }

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
