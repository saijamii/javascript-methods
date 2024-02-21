import React from "react";
import CustomData from "./JSON/CustomData.json";

function Response() {
  let responseData = CustomData?.CustomData;

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

  let rangeFilteredObject = {};

  const convertedCustomFields = () => {
    let convertedData = [];
    responseData?.forEach((e) => {
      const { dataType, uniqueName } = e;
      if (convertedData?.find((item) => item.lable === dataType)) {
        const index = convertedData.findIndex((i) => i.lable === dataType);
        convertedData[index]?.values.push(uniqueName);
      } else {
        convertedData.push({
          lable: dataType,
          values: [],
        });
      }
    });
    return convertedData;
  };

  console.log(convertedCustomFields(), "convertedCustomFields");

  const RangeValues = {
    selectedBrand: "AFX Lighting",
    selectedCategory: "12V Landscape",
    selectedStorageLoc: "101D",
    range_base: [0, 31],
    selectedBuilding: "Warehouse",
    selectedSubCategory: "High Point Bulbs Warehouse",
    isRangeForm: true,
  };

  const CustomValues = {
    selectedBrand: "AFX Lighting",
    selectedCategory: "12V Landscape",
    selectedStorageLoc: "101D",
    base: ["E12", "Med Bi-Pin"],
    dimmable: ["Yes", "Y"],
    voltage: ["120"],
    isRangeForm: true,
  };

  rangeFilteredObject = Object.fromEntries(
    Object.entries(RangeValues)
      ?.filter(([key, value]) => key.includes("range_") && value !== undefined)
      ?.map(([key, value]) => [
        key.replace("range_", ""),
        value.map((e) => parseInt(e)),
      ])
  );

  console.log(rangeFilteredObject, "rangeFilteredObject");

  return <div>Response</div>;
}

export default Response;
