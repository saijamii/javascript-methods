import React, { useMemo, useState } from "react";

export const MyUseMemo1 = ({ a, b }) => {
  const sum = useMemo(() => {
    return a + b;
  }, [a, b]);

  return <div>Sum: {sum}</div>;
};

export const MyUseMemo2 = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return expensiveFunction(count);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Result: {result}</div>
    </div>
  );
};

const expensiveFunction = (value) => {
  return value * 2;
};
