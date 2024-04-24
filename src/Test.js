import React from "react";
import { useState } from "react";

export default function Test() {
  const [country, setCountry] = useState(["0"]);
  console.log(country, "country");
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];

  return (
    <div>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries?.map((e, index) => {
          return (
            <option key={index} value={index}>
              {e?.name}
            </option>
          );
        })}
      </select>

      <select>
        {countries[country] &&
          countries[country].cities?.map((e, index) => {
            return (
              <option key={index} value={e}>
                {e}
              </option>
            );
          })}
      </select>
    </div>
  );
}
