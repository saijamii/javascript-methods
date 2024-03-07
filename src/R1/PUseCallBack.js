import React, { useCallback, useState } from "react";
import CUseCallBack from "./CUseCallBack";

export function PUseCallBack() {
  const [countOne, setCountOne] = useState(0);
  const countTwo = 0;

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };

  const myFunction = useCallback(() => {
    console.log("My Function");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countTwo]);

  return (
    <>
      <CUseCallBack countTwo={countTwo} myFunction={myFunction} />
      <button
        onClick={() => {
          IncrementOne();
        }}
      >
        CallBack Button {countOne}
      </button>
    </>
  );
}
