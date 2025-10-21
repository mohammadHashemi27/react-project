import { HStack, Skeleton, Stack } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Stack gap="6" maxW="xs">
      <HStack width="full"></HStack>
      <Skeleton height="200px" borderRadius={"10px"} />
    </Stack>
  );
};
