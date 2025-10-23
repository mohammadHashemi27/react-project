import { type Game } from "@/hook/useGames";
import {
  Button,
  Card,
  Image,
  HStack,
  Text,
  Heading,
  Badge,
  Flex,
} from "@chakra-ui/react";
import { FaXbox, FaPlaystation, FaGamepad } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaWindows } from "react-icons/fa6";
import type { JSX, Key } from "react";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const iconMap: Record<string, JSX.Element> = {
    pc: <FaWindows />,
    xbox: <FaXbox />,
    playstation: <FaPlaystation />,
    nintendo: <BsNintendoSwitch />,
  };

  const allowedPlatforms = ["pc", "xbox", "playstation", "nintendo"];
  const platforms = game.platforms
    ?.map((p: { platform: { slug: string } }) => p.platform.slug.split("-")[0])
    .filter((slug: string) => allowedPlatforms.includes(slug))
    .slice(0, 5);

  const metaScore = Number(game.metacritic);
  const iconColor = "#4A5568";
  const iconSize = "20px";

  return (
    <Card.Root
      width="full"
      overflow="hidden"
      shadow="md"
      borderRadius="xl"
      _light={{ bg: "gray.50" }}
      _dark={{ bg: "gray.800" }}
    >
      <Image
        src={game.background_image}
        alt={game.name}
        borderTopRadius="xl"
        objectFit="cover"
        w="full"
        h="200px"
      />

      <Card.Body textAlign="center" alignItems={"stretch"}>
        <Heading size="md" mb={1}>
          {game.name}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={3}>
          Released: {game.released}
        </Text>

        <HStack justify="center" gap={3} mb={4}>
          {platforms?.map(
            (slug: string | number, idx: Key | null | undefined) => {
              const Icon = iconMap[slug] || <FaGamepad />;
              return (
                <span
                  key={idx}
                  style={{ color: iconColor, fontSize: iconSize }}
                >
                  {Icon}
                </span>
              );
            }
          )}
        </HStack>

        <Flex align="center" justify="center" gap={2} mb={3}>
          <Text fontSize="md" color="gray.600">
            Metacritic:
          </Text>
          <Badge
            px={3}
            py={1}
            borderRadius="full"
            fontSize="md"
            fontWeight="bold"
            colorScheme={
              metaScore >= 75 ? "green" : metaScore >= 50 ? "yellow" : "red"
            }
          >
            {metaScore || "N/A"}
          </Badge>
        </Flex>
      </Card.Body>

      <Card.Footer justifyContent="center">
        <Button colorScheme="purple" variant="outline" borderRadius="full">
          Buy now
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};
