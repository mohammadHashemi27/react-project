"use client";

import { useGames } from "@/hook/useGames";
import { SimpleGrid, Text, Box } from "@chakra-ui/react";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { error, games } = useGames();

  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 5 }} gap={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
