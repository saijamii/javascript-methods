import React from "react";

import users from "./JSON/users.json";

const allUsers = users?.users;

function JavaArray() {
  // Find
  //   const isNameExist = (name, allUsers) => {
  //     const user = allUsers.find((e) => e.firstName === name);
  //     return Boolean(user);
  //   };

  // Find Index
  //   const isNameExist = (name, allUsers) => {
  //     const Index = allUsers.findIndex((e) => e.firstName === name);
  //     return Index >= 0;
  //   };

  // Some
  const isNameExist = (name) => {
    const user = allUsers.some((e) => e?.firstName === name);
    return user;
  };

  console.log(isNameExist("SAi"), "isNameExist");

  const array1 = [1, 2, 3];

  // const append = (array, element) => {
  //   array.push(element);
  //   return array;
  // };

  // console.log(append(array1, 4));
  // console.log(array1);

  const append = (array, element) => {
    const newArray = [...array, element];
    return newArray;
  };

  console.log(append(array1, 4));
  console.log(array1);

  // Duplicates Remove L0

  // function uniqueArray(array) {
  //   let unqueElements = [];
  //   array?.forEach((element) => {
  //     if (!unqueElements.includes(element)) {
  //       unqueElements.push(element);
  //     }
  //   });
  //   return unqueElements;
  // }

  // const numbersArray = [1, 2, 5, 2, 3, 5, 6, 8];
  // console.log(uniqueArray(numbersArray), "uniqueArray");
  // console.log(numbersArray, "numbersArray");

  // Duplicates Remove L1

  // function uniqueArray(array) {
  //   return [...new Set(array)];
  // }

  // const numbersArray = [1, 2, 5, 2, 3, 5, 6, 8];
  // console.log(uniqueArray(numbersArray), "uniqueArray");
  // console.log(numbersArray, "numbersArray");

  // Duplicates Remove L2

  function uniqueArray(array) {
    return array?.reduce((total, value) => {
      return total.includes(value) ? total : [...total, value];
    }, []);
  }

  const numbersArray = [1, 2, 5, 2, 3, 5, 6, 7, 8, 10, 10];

  console.log(uniqueArray(numbersArray), "uniqueArray");

  const reverseString = (inputString) => {
    return inputString.split("").reverse().join("");
  };

  const originalString = "Hello, World!";
  const reversedString = reverseString(originalString);

  console.log("Original: " + originalString);
  console.log("Reversed: " + reversedString);

  const findMissingNumber = (array) => {
    let uniquevalues = [...new Set(array)];
    const sortedArray = [...uniquevalues].sort((a, b) => a - b);

    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i + 1] - sortedArray[i] !== 1) {
        return sortedArray[i] + 1;
      }
    }
    return undefined;
  };

  const numbers = [1, 2, 3, 5, 6, 7, 9, 9, 4];
  console.log("Missing number:", findMissingNumber(numbers)); // Output: undefined

  return <div></div>;
}

export default JavaArray;
