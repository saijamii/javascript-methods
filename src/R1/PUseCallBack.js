import React, { useState } from "react";
import CUseCallBack from "./CUseCallBack";

export function PUseCallBack() {
  const [countOne, setCountOne] = useState(0);

  const IncrementOne = () => {
    setCountOne(countOne + 1);
  };

  return (
    <>
      <CUseCallBack />
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
