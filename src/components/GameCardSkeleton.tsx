import {
  Card,
  CardBody,
  Flex,
  HStack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root
      maxW="sm"
      w="full"
      borderRadius="xl"
      shadow="md"
      overflow="hidden"
    >
      <CardBody>
        <Flex direction="column" align="center" justify="center" gap={4}>
          <Skeleton height="200px" width="100%" borderRadius="xl" />
          <SkeletonText noOfLines={1} width="60%" textAlign="center" />
          <SkeletonText noOfLines={1} width="40%" textAlign="center" />
          <HStack gap={3} justify="center">
            <Skeleton width="30px" height="30px" borderRadius="md" />
            <Skeleton width="30px" height="30px" borderRadius="md" />
            <Skeleton width="30px" height="30px" borderRadius="md" />
          </HStack>
          <Skeleton width="80px" height="30px" borderRadius="full" />
          <Skeleton width="120px" height="40px" borderRadius="full" />
        </Flex>
      </CardBody>
    </Card.Root>
  );
};
