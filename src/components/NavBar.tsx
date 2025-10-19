import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/OIP.webp";
import { ColorSwitch } from "./ColorSwitch";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize={"60px"} />
      <ColorSwitch />
    </HStack>
  );
};
