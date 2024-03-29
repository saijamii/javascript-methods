import React from "react";
import { useCounter } from "./useCounter";

export default function Counter2() {
  const [count, increment, decrement, reset] = useCounter(10);

  return (
    <>
      <h1>Count == {count}</h1>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}
