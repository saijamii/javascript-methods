import React, { useEffect, useState } from "react";

export default function Comp2() {
    
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>count - {count}</button>;
}
