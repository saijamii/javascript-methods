import React, { useReducer } from "react";

 
const reducer = (state, action) => {
    console.log({state, action})
  switch (action.type) {
    case "INCREMENT":
      return { num: state.num + 1 };
    case "DECREMENT":
      return { num: state.num - 1 };
    default:
      return state.num;
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(reducer, { num: 0 });

  return (
    <div>
      <p>Count: {count.num}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
