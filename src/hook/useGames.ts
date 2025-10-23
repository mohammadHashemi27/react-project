import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";
import type { Genres } from "../hook/useGenres";


export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  parent_platforms: Platform[];
  id: number;
  name: string;
  background_image: string;
  released: string;
  metacritic: number;
  platforms: Platform[];
}

interface FetchGamesResponse {
  results: Game[];
}

export const useGames = (
  selectedGenre: Genres | null,
  sortOrder: string,
  selectedPlatform?: string 
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const params: Record<string, string | number | undefined> = {
      genres: selectedGenre?.id,
      ordering: sortOrder,
      platforms: selectedPlatform, 
    };

    apiClient
      .get<FetchGamesResponse>("/games", { params })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [selectedGenre, sortOrder, selectedPlatform]);

  return { games, isLoading, error };
};
