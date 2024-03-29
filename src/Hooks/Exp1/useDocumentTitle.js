import { useEffect } from "react";

export function useDocumentTitle(count) {
  useEffect(() => {
    document.title = count;
  }, [count]);
}
