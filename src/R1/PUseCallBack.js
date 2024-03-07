import React, { useState } from "react";
import CUseCallBack from "./CUseCallBack";

export function PUseCallBack() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };

  const myFunction = () => {
    console.log("My Function");
  };

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
