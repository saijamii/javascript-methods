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

  return <div>call</div>;
}

export default Call;
