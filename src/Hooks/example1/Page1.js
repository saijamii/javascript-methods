import React, { useState } from "react";

export default function Page1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count -- {count}
      </button>
    </div>
  );
}
