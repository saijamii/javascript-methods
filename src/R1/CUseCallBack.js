import React, { memo } from "react";

const CUseCallBack = () => {
  console.log("Child Rendered!!!");
  return <div>CUseCallBack</div>;
};

export default memo(CUseCallBack);
