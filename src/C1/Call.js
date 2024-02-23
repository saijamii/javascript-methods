import React from "react";

function Call() {
  let User = {
    name: "A",
    age: 20,
    printDetails: function () {
      console.log(this.name);
    },
  };

  User.printDetails();

  let details = function (date, month) {
    console.log(this.name + " " + date + " " + month);
  };
  let details2 = function (date, month, year) {
    console.log(this.name + " " + date + " " + month + " " + year);
  };

  let User2 = {
    name: "B",
    age: 30,
    // printDetails: function () {
    //   console.log(this.name);
    // },
  };

  // User2.printDetails();

  let User3 = {
    name: "C",
    age: 40,
    // printDetails: function () {
    //   console.log(this.name);
    // },
  };

  // User3.printDetails();

  User.printDetails.call(User2);
  User.printDetails.call(User3);

  details.call(User2, "23", "02");
  details.call(User3, "24", "03");

  details2.apply(User2, ["23", "02", "2024"]);
  details2.apply(User3, ["24", "03", "2025"]);

  const User4 = {
    name: "Sai",
    age: 1000,
    printDetails: function () {
      console.log(this?.name);
    },
  };

  const getAge = User4.printDetails;
  console.log(getAge());

  const getBindAge = getAge.bind(User4);
  console.log(getBindAge());
}

export default Call;
