import { useState } from "react";
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

  // state محلی برای نگه داشتن انتخاب کاربر
  const [selectedSortLabel, setSelectedSortLabel] = useState("Relevance");

  const handleSelect = (value: string, label: string) => {
    setSelectedSortLabel(label); // نمایش روی دکمه
    onSelectSortOrder(value); // ارسال به parent
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Sort: {selectedSortLabel}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={bgMenu}>
            {sortOrders.map((order) => (
              <Menu.Item
                onClick={() => handleSelect(order.value, order.label)}
                key={order.value}
                value={order.value}
                _hover={{ bg: hoverItem }}
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
