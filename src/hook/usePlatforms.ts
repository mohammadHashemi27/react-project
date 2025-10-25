// usePlatforms.ts
import { useEffect, useState } from "react";
import axios from "axios";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  results: Platform[];
}

const RAWG_API_KEY = "66aa294028d0476ea552012b99adad79";

export const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [isActive, setActive] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const url = encodeURIComponent(
      `https://api.rawg.io/api/platforms/lists/parents?key=${RAWG_API_KEY}`
    );
    const proxyUrl = `https://api.allorigins.win/get?url=${url}`;

    axios
      .get(proxyUrl)
      .then((res) => {
        const data: FetchPlatformsResponse = JSON.parse(res.data.contents);
        setPlatforms(data.results);
        setActive(false);
      })
      .catch((err) => {
        setError(err.message);
        setActive(false);
      });
  }, []);

  return { platforms, isActive, error };
};
