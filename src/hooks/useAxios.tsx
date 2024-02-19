import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

const useAxios = (param: string) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.coingecko.com/api/v3";

  const fetchData = async (param: string) => {
    try {
      setLoading(true);
      const response = await axios(param);
      setResponse(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
      } else {
        setError("Wystąpił błąd podczas pobierania danych");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    loading,
    error,
  };
};

export default useAxios;
