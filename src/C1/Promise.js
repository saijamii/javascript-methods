export const Promisese1 = () => {
  let Fruits = ["Apple", "Mango", "Grapes"];

  const getFruits = () => {
    Fruits?.map((e) => {
      return console.log(e);
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
    .catch((err) => console.error(err));
};

export const Promisese2 = () => {
  const AsyncOperation = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data1");
      }, 1000);
    });
  };

  AsyncOperation()
    .then((data) => {
      console.log("Step 1:", data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data 2");
        }, 1500);
      });
    })
    .then((data) => {
      console.log("Step 2:", data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data 3");
        }, 2000);
      });
    })
    .then((data) => {
      console.log("Step 3:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
