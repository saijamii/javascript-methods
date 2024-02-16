import React from "react";

function Response() {
  const sampleArray = [
    { id: "1", title: "sample" },
    { id: "2", title: "Button" },
    { id: "3", title: "sample3" },
    { id: "4", title: "sample4" },
  ];

  let view = [];

  const copyArray = [...sampleArray];
  copyArray.some((e) => {
    view.push(e);
    return e.title === "Button";
  });

  const filterArray = sampleArray.filter(
    (f) => !view?.map((e) => e?.id).includes(f?.id)
  );

  console.log(view, "view");
  console.log(filterArray, "filterArray");
  return <div>Response</div>;
}

export default Response;
