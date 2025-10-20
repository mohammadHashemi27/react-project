import { Button, HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ColorSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    toggleColorMode();
    setActive(!active);
  };

  return (
    <Button
      variant="solid"
      bg="purple.500"
      color="white"
      _hover={{ bg: "purple.600" }}
      onClick={handleClick}
    >
      <HStack gap={2}>
        {active ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
        {active ? "Dark Mode" : "Light Mode"}
      </HStack>
    </Button>
  );
};
