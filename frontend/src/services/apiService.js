// apiService.js
import { useEffect, useState, useRef } from "react";
import axios from "axios";

//i just generalize this for get; 
//for update/create/delete, you may want to see how to further generalize this service

const useApiService = (url, method = "get", dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const abortControllerRef = useRef(null);

  const cleanup = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // Cleanup function to abort the request if the component unmounts
      cleanup();

      setIsLoading(true);

      try {
        abortControllerRef.current = new AbortController();

        const response = await axios({
          method,
          url,
          signal: abortControllerRef.current.signal,
        });

        // Axios automatically throws an error for non-2xx responses
        const result = response.data;
        setData(result);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error:", error.message);
        }
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, isLoading };
};

export default useApiService;
