import React, { useMemo } from "react";

export const MyUseMemo1 = ({ a, b }) => {
  const sum = useMemo(() => {
    console.log("Calculating sum");
    return a + b;
  }, [a, b]);

  return <div>Sum: {sum}</div>;
};
