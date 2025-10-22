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
  Badge,
  Flex,
} from "@chakra-ui/react";
import { FaXbox, FaPlaystation, FaGamepad } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaWindows } from "react-icons/fa6";
import type { JSX } from "react";

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

  // فقط پلتفرم‌های مورد نظر
  const allowedPlatforms = ["pc", "xbox", "playstation", "nintendo"];
  const platforms = game.platforms
    ?.map((p) => p.platform.slug.split("-")[0])
    .filter((slug) => allowedPlatforms.includes(slug))
    .slice(0, 5); // حداکثر 5 پلتفرم

  const metaScore = Number(game.metacritic);
  const iconColor = "#4A5568"; // رنگ یکدست و حرفه‌ای
  const iconSize = "20px"; // سایز یکسان برای تمام آیکون‌ها

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
        src={game.background_image || "https://via.placeholder.com/400"}
        alt={game.name}
        borderTopRadius="xl"
        objectFit="cover"
        w="full"
        h="200px"
      />

      <CardBody textAlign="center">
        <Heading size="md" mb={1}>
          {game.name}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={3}>
          Released: {game.released}
        </Text>

        <HStack justify="center" gap={3} mb={4}>
          {platforms?.map((slug, idx) => {
            const Icon = iconMap[slug] || <FaGamepad />;
            return (
              <span key={idx} style={{ color: iconColor, fontSize: iconSize }}>
                {Icon}
              </span>
            );
          })}
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
      </CardBody>

      <CardFooter justifyContent="center">
        <Button colorScheme="purple" variant="outline" borderRadius="full">
          Buy now
        </Button>
      </CardFooter>
    </Card.Root>
  );
};
