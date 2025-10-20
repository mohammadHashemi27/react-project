import { HStack } from "@chakra-ui/react";
import { ColorSwitch } from "./ColorSwitch";
import { IoGameControllerOutline } from "react-icons/io5";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <IoGameControllerOutline size={60} color="#7b2cbf" /> {/* 💜 آبی بنفش */}
      <ColorSwitch />
    </HStack>
  );
};
