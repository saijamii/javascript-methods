import React, { memo } from "react";

const CUseCallBack = ({ countTwo }) => {
  console.log(countTwo,"countTwo");
  console.log("Child Rendered!!!");
  return <div>CUseCallBack</div>;
};

export default memo(CUseCallBack);
