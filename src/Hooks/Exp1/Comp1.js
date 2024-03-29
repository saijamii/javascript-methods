import React, { useState } from "react";
import { useDocumentTitle } from "./useDocumentTitle";

export default function Comp1() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);

  return <button onClick={() => setCount(count + 1)}>count - {count}</button>;
}
