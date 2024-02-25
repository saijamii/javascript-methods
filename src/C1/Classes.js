import React from "react";

function Classes() {
  let myTri = {
    sideA: 5,
    sideB: 6,
    sideC: 7,
    getArea: function () {
      console.log((this.sideA + this.sideB) / 2, "getArea");
    },
    getSides: function () {
      console.log(
        { sideA: this.sideA, sideB: this.sideB, sideC: this.sideC },
        "getSides"
      );
    },
  };

  myTri.getArea();
  myTri.getSides();

  let myTri2 = {
    sideA: 10,
    sideB: 11,
    sideC: 12,
    getArea: function () {
      console.log((this.sideA + this.sideB) / 2, "getArea");
    },
    getSides: function () {
      console.log(
        { sideA: this.sideA, sideB: this.sideB, sideC: this.sideC },
        "getSides"
      );
    },
  };

  myTri2.getArea();
  myTri2.getSides();

  return <div>Classes</div>;
}

export default Classes;
