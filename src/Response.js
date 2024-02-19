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

  const aob = [
    { framework: "React", website: "Paypal" },
    { framework: "JavaScript", website: "inblack67" },
    { framework: "Angular", website: "Google" },
    { framework: "Vue", website: "Vue" },
    { framework: "React", website: "Tesla" },
    { framework: "JavaScript", website: "inblack67" },
    { framework: "fb", website: "inblack67" },
  ];

  const countFrameworks = () => {
    const countMap = {};

    aob.forEach((item) => {
      const { framework } = item;
      countMap[framework] = (countMap[framework] || 0) + 1;
    });

    const result = Object.entries(countMap)?.map(([language, count]) => ({
      language,
      count,
    }));

    return result;
  };

  console.log(countFrameworks(), "count");

  return <div>Response</div>;
}

export default Response;
