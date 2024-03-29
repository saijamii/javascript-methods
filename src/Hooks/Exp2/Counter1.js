import React from "react";
import { useCounter } from "./useCounter";

export default function Counter1() {
  const [count, increment, decrement, reset] = useCounter()
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
