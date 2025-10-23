import { Button, Menu, Portal } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}
export const SortDropdown = ({ onSelectSortOrder }: Props) => {
  const bgMenu = useColorModeValue("gray.50", "gray.800");
  const hoverItem = useColorModeValue("gray.100", "gray.700");
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Sort:
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={bgMenu} _hover={{ bg: hoverItem }}>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => onSelectSortOrder(order.value)}
                key={order.value}
                value={order.value}
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
