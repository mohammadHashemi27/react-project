import { useGenres, type Genres } from "@/hook/useGenres";
import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
  Card,
  Skeleton,
} from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

interface Props {
  selectedGenre: Genres | null;
  onSelectGenre: (genre: Genres) => void;
}

export const GenresList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isActive } = useGenres();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const hoverBg = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  const skeletonCount = 15;

  return (
    <Card.Root
      bg={bgColor}
      borderRadius="2xl"
      boxShadow="md"
      p={3}
      w="200px"
      h="85vh"
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { width: "0px" },
        "&:hover::-webkit-scrollbar": { width: "6px" },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.500",
          borderRadius: "8px",
        },
      }}
      transition="all 0.3s ease"
      _hover={{ boxShadow: "lg", transform: "translateY(-2px)" }}
    >
      <List.Root listStyleType="none" gap={3}>
        {isActive
          ? Array.from({ length: skeletonCount }).map((_, i) => (
              <ListItem key={i} borderRadius="md" p={2}>
                <HStack gap={3}>
                  <Skeleton boxSize="36px" borderRadius="md" bg="gray.400" />
                  <Skeleton
                    height="20px"
                    flex="1"
                    borderRadius="md"
                    bg="gray.400"
                  />
                </HStack>
              </ListItem>
            ))
          : genres.map((genre) => (
              <ListItem
                key={genre.id}
                onClick={() => onSelectGenre(genre)}
                _hover={{
                  bg: hoverBg,
                  transform: "scale(1.02)",
                  transition: "all 0.2s ease",
                }}
                bg={selectedGenre?.id === genre.id ? hoverBg : "transparent"}
                borderRadius="md"
                p={2}
                cursor="pointer"
              >
                <HStack gap={3}>
                  <Image
                    src={genre.image_background}
                    boxSize="36px"
                    borderRadius="md"
                    objectFit="cover"
                  />
                  <Text
                    fontWeight={
                      selectedGenre?.id === genre.id ? "bold" : "medium"
                    }
                    fontSize="sm"
                    color={textColor}
                  >
                    {genre.name}
                  </Text>
                </HStack>
              </ListItem>
            ))}
      </List.Root>
    </Card.Root>
  );
};
