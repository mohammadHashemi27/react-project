import { Button, HStack } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";

export const ColorSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    toggleColorMode();
    setActive(!active);
  };

  return (
    <Button
      variant="ghost"
      color={useColorModeValue("gray.800", "white")}
      _hover={{
        bg: useColorModeValue("black.200", "white.600"),
        transform: "scale(1.1)",
      }}
      _active={{ bg: useColorModeValue("gray.300", "gray.700") }}
      onClick={handleClick}
      borderRadius="full"
      p={2}
      transition="all 0.2s ease"
    >
      <HStack>
        {active ? <CgDarkMode size={40} /> : <CgDarkMode size={40} />}
      </HStack>
    </Button>
  );
};
