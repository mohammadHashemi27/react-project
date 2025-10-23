import { SimpleGrid } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCard } from "./GameCard";
import { useGames, type Game } from "@/hook/useGames";
import type { Genres } from "@/hook/useGenres";

const GameGrid = ({
  selectedGenre,
  searchText,
}: {
  selectedGenre: Genres | null;
  searchText: string;
}) => {
  const { games, isLoading } = useGames(selectedGenre);

  const filteredGames = games.filter((game: { name: string }) =>
    game.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
