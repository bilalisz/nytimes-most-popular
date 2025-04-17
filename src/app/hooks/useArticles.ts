import { useState, useEffect } from "react";
import { ApiResponse, Article } from "../types/articles";

const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useArticles = (period: number = 1) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${BASE_URL}/${period}.json?api-key=${NYT_API_KEY}`
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse = await response.json();
      setArticles(data.results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, [period]);

  return { articles, loading, error };
};
