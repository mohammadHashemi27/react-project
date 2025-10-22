import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [isActive, setActive] = useState(true);
  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
        setActive(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setActive(false);
      });
  }, []);

  return { genres, error, isLoading, isActive };
};
