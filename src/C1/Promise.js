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
