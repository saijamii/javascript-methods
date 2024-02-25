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

  class Triangle {
    constructor(a, b, c) {
      this.sideA = a;
      this.sideB = b;
      this.sideC = c;
    }

    getArea() {
      console.log((this.sideA + this.sideB) / 2, "getArea");
    }

    getSides() {
      console.log({ sideA: this.sideA, sideB: this.sideB, sideC: this.sideC });
    }
  }

  let myTriangle1 = new Triangle(5, 6, 7);
  myTriangle1.getArea();
  myTriangle1.getSides();

  let myTriangle2 = new Triangle(10, 11, 12);
  myTriangle2.getArea();
  myTriangle2.getSides();

  let myTriangle3 = new Triangle(20, 30, 40);
  myTriangle3.getArea();
  myTriangle3.getSides();

  return <div>Classes</div>;
}

export default Classes;
