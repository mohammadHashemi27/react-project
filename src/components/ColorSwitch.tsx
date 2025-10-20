import { Button } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

export const ColorSwitch = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  );
};
