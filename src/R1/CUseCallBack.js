import React, { memo } from "react";

const CUseCallBack = memo(() => {
  console.log("Child Rendered!!!");
  return <div>CUseCallBack</div>;
});

export default CUseCallBack;
