import { type Game } from "@/hook/useGames";
import { Button, Card, Image, HStack } from "@chakra-ui/react";
import { MdStarRate, MdOutlineStarRate } from "react-icons/md";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2" textAlign="center">
        <Card.Title>{game.name}</Card.Title>
        <Card.Description>{game.released}</Card.Description>

        <Card.Description>
          <HStack justify="center" gap={0.5}>
            <MdStarRate color="gold" />
            <MdStarRate color="gold" />
            <MdStarRate color="gold" />
            <MdStarRate color="gold" />
            <MdOutlineStarRate color="gold" />
            <span>({game.rating})</span>
          </HStack>
        </Card.Description>
      </Card.Body>

      <Card.Footer gap="2" justifyContent="center">
        <Button colorPalette="purple" variant="outline">
          Buy now
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
