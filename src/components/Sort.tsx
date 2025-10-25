import { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { usePlatforms } from "@/hook/usePlatforms";
import PlatformSkeleton from "../components/PlatformAndSortSkeleton";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

export const SortDropdown = ({ onSelectSortOrder }: Props) => {
  const bgMenu = useColorModeValue("gray.50", "gray.800");
  const hoverItem = useColorModeValue("gray.100", "gray.700");

  const { isActive, error } = usePlatforms();

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");

  const handleSelect = (value: string, label: string) => {
    setSelectedSortLabel(label);
    onSelectSortOrder(value);
  };

  if (isActive) return <PlatformSkeleton />;

  if (error)
    return (
      <Button size="sm" variant="outline" colorScheme="red">
        Error loading sort menu
      </Button>
    );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Sort: {selectedSortLabel}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            bg={bgMenu}
            borderRadius="md"
            shadow="md"
            minW="180px"
            zIndex={1000}
          >
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                onClick={() => handleSelect(order.value, order.label)}
                _hover={{ bg: hoverItem }}
                py={1}
                px={3}
                value={order.label}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
