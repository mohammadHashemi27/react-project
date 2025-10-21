import { type Game } from "@/hook/useGames";
import {
  Button,
  Card,
  Image,
  HStack,
  Text,
  Heading,
  CardBody,
  CardFooter,
  Tooltip,
  Badge,
  Flex,
} from "@chakra-ui/react";
import {
  FaWindows,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import type { JSX } from "react";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const iconMap: Record<string, JSX.Element> = {
    pc: <FaWindows color="#3b82f6" />,
    xbox: <FaXbox color="#107c10" />,
    playstation: <FaPlaystation color="#00439c" />,
    nintendo: <BsNintendoSwitch color="#e60012" />,
    mac: <FaApple color="#6e6e6e" />,
    android: <FaAndroid color="#3ddc84" />,
  };

  const platforms = game.platforms
    ?.map((p) => p.platform.slug)
    .filter((slug) => iconMap[slug.split("-")[0]])
    .slice(0, 5);

  const metaScore = Number(game.metacritic);

  return (
    <Card.Root
      maxW="sm"
      overflow="hidden"
      shadow="md"
      borderRadius="xl"
      _light={{ bg: "gray.50" }}
      _dark={{ bg: "gray.800" }}
    >
      <Image
        src={game.background_image || "https://via.placeholder.com/400"}
        alt={game.name}
        borderTopRadius="xl"
      />

      <CardBody textAlign="center">
        <Heading size="md" mb={2}>
          {game.name}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={3}>
          Released: {game.released}
        </Text>

        <HStack justify="center" gap={3} mb={4}>
          {platforms?.map((slug) => {
            const key = slug.split("-")[0];
            return (
              <Tooltip.Root key={key}>
                <span>{iconMap[key]}</span>
              </Tooltip.Root>
            );
          })}
        </HStack>

        <Flex align="center" justify="center" gap={2}>
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
      </CardBody>

      <CardFooter justifyContent="center">
        <Button colorScheme="purple" variant="outline" borderRadius="full">
          Buy now
        </Button>
      </CardFooter>
    </Card.Root>
  );
};
