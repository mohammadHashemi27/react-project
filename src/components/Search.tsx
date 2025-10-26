"use client";

import { Input, InputGroup, Box } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { LuSearch } from "react-icons/lu";

interface Props {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const Search = ({ searchText, setSearchText }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.700"); // Light / Dark
  const placeholderColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Box w="full" maxW="400px">
      <InputGroup startElement={<LuSearch />}>
        <Input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search games..."
          borderRadius="2xl"
          py={5}
          px={4}
          fontSize="sm"
          bg={bg}
          _placeholder={{ color: placeholderColor }}
          _hover={{
            bg: useColorModeValue("gray.200", "gray.600"),
            boxShadow: "md",
          }}
          _focus={{
            outline: "none",
            ring: 2,
            ringColor: "purple.500",
            bg: useColorModeValue("gray.100", "gray.700"),
          }}
          transition="all 0.2s ease"
        />
      </InputGroup>
    </Box>
  );
};
