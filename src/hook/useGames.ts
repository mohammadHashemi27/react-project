import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import type { Genres } from "../hook/useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  metacritic: number;
  platforms: { platform: { slug: string } }[];
}

interface FetchGamesResponse {
  results: Game[];
}

export const useGames = (selectedGenre: Genres | null, sortOrder: string) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", {
        params: { genres: selectedGenre?.id, ordering: sortOrder },
      })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre, sortOrder]); // ← اضافه کردن sortOrder به dependencies

  return { games, isLoading, error };
};
