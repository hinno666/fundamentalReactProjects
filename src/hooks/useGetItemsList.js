import { useEffect, useState } from "react";

export const useGetItemsList = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        if (!response.ok) {
          throw new Error(data.msg);
        }
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return [isLoading, isError, data];
};
