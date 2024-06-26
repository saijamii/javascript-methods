import { useState, useEffect } from "react";

function useFetch(URL) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    makeAPICall(URL);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makeAPICall = async () => {
    setLoading(true);
    setIsError(false);
    try {
      const response = await fetch(URL);
      const comingData = await response.json();
      setData(comingData);
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    }
  };

  return [data, loading, isError];
}

export default useFetch;
