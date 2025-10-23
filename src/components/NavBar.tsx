import { Box, HStack } from "@chakra-ui/react";
import { Search } from "./Search";
import { ColorSwitch } from "./ColorSwitch";
import { SiAmazongames } from "react-icons/si";

interface Props {
  searchText: string;
  setSearchText: (text: string) => void;
}

export const NavBar = ({ searchText, setSearchText }: Props) => {
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
      px={4}
      py={2}
      backdropFilter="blur(10px)"
      bg="bg.canvas"
      boxShadow="md"
      borderBottom="1px solid"
      borderColor="border.subtle"
    >
      <Box as="button" cursor="default" transition="all 0.3s ease">
        <SiAmazongames size={48} />
      </Box>

      <Search searchText={searchText} setSearchText={setSearchText} />

      <ColorSwitch />
    </HStack>
  );
};
