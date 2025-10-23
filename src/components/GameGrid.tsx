import { SimpleGrid } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCard } from "./GameCard";
import { useGames, type Game } from "@/hook/useGames";
import type { Genres } from "@/hook/useGenres";

interface GameGridProps {
  selectedGenre: Genres | null;
  searchText: string;
  sortOrder: string;
  selectedPlatform: string; 
}

const GameGrid = ({
  selectedGenre,
  searchText,
  sortOrder,
  selectedPlatform, 
}: GameGridProps) => {
  const { games, isLoading } = useGames(selectedGenre, sortOrder);

  const filteredGames = games.filter((game: Game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesPlatform = selectedPlatform
      ? game.parent_platforms.some(
          (p: { platform: { name: string; }; }) =>
            p.platform.name.toLowerCase() === selectedPlatform.toLowerCase()
        )
      : true;

    return matchesSearch && matchesPlatform;
  });

  const skeletons = Array.from({ length: 8 });

  if (isLoading)
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
        {skeletons.map((_, index) => (
          <GameCardSkeleton key={index} />
        ))}
      </SimpleGrid>
    );

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
      {filteredGames.map((game: Game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
