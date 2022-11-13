import { useCallback, useState } from "react";

export const useConvertionRate = () => {
  const [visitors, setVisitors] = useState<string>("");
  const [sells, setSells] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const calculateConvertionRate = useCallback(() => {
    if (!visitors || !sells) {
      setError(true);
    } else {
      setError(false);
      setResults((+sells / +visitors) * 100);
    }
  }, [visitors, sells]);

  const updateSells = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSells(e.target.value);
  };

  const updateVisitors = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisitors(e.target.value);
  };

  return {
    updateVisitors,
    updateSells,
    calculateConvertionRate,
    results,
    error,
  };
};
