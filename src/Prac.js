import React from "react";

//Node/Prac/async.js
function Prac() {
  let Fruits = ["Apple", "Mango", "grape"];

  const getFruits = () => {
    Fruits.forEach((e) => {
      console.log(e);
    });
  };

  const postFruits = (value) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Fruits.push(value);
        let err = false;
        if (!err) {
          resolve();
        } else {
          reject("Something Went Wrong");
        }
      }, 2000);
    });
  };

  const inti = async () => {
    try {
      await postFruits("KIWI");
      getFruits();
    } catch (err) {
      console.log(err);
    }
  };

  inti();

  //   *******************************
  // Node/Prac/callback.js
  let alphabets = ["A", "B", "C"];

  const getAlpha = () => {
    alphabets.forEach((e) => {
      console.log(e);
    });
  };

  const postFruits2 = (value, getAlpha) => {
    setTimeout(() => {
      alphabets.push(value);
      getAlpha();
    }, 2000);
  };

  postFruits2("D", getAlpha);
  return <div>Prac</div>;
}

//Node/Prac/promise.js
let Fruits = ["Apple", "Mango", "grape"];

const getFruits = () => {
  Fruits.forEach((e) => {
    console.log(e);
  });
};

const postFruits = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Fruits.push(value);
      let err = false;
      if (!err) {
        resolve();
      } else {
        reject("Something Went Wrong");
      }
    }, 2000);
  });
};

postFruits("Kiwi")
  .then(getFruits)
  .catch((err) => console.log(err));

export default Prac;
