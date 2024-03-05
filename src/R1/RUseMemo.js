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

export const MyUseMemo3 = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };
  const IncrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  // const isEven = () => {
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return countOne % 2 === 0;
  // };

  const isEven = useMemo(() => {
    console.log("*********");
    let i = 0;
    while (i < 2000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button
        onClick={() => {
          IncrementOne();
        }}
      >
        Button {countOne}
      </button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button
        onClick={() => {
          IncrementTwo();
        }}
      >
        Button {countTwo}
      </button>
    </div>
  );
};
