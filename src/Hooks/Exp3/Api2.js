import React from "react";
import useFetch from "./useFetchApi";

export default function Api2() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [postData, loading, isError] = useFetch(URL);

  if (isError) {
    return <h3>something was happned</h3>;
  }

  if (loading) {
    return <h3>loading...</h3>;
  }

  return (
    <div>
      <h1>posts</h1>
      <ul>
        {postData.map((eachUser) => {
          return <li key={eachUser.id}>{eachUser.title}</li>;
        })}
      </ul>
    </div>
  );
}
