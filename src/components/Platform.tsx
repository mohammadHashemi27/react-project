import { Button, Menu, Portal, Text } from "@chakra-ui/react";
import { usePlatforms } from "@/hook/usePlatforms";
import { useColorModeValue } from "@/components/ui/color-mode";
import PlatformSkeleton from "./PlatformAndSortSkeleton";
import { MdArrowDropDown } from "react-icons/md";
interface Props {
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
}

const PlatformDropdown = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms, isActive, error } = usePlatforms();

  const bgMenu = useColorModeValue("gray.50", "gray.800");
  const hoverItem = useColorModeValue("gray.100", "gray.700");

  if (isActive) return <PlatformSkeleton />;

  if (error)
    return (
      <Button size="sm" variant="outline" colorScheme="red">
        Error loading platforms
      </Button>
    );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform || "Platform"}
          <MdArrowDropDown style={{ marginLeft: "4px" }} />
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={bgMenu} borderRadius="md" shadow="md" minW="180px">
            {platforms.length > 0 ? (
              platforms.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  _hover={{ bg: hoverItem }}
                  onClick={() => onSelectPlatform(platform.name)}
                  value={platform.slug}
                >
                  <Text>{platform.name}</Text>
                </Menu.Item>
              ))
            ) : (
              <Text px={3} py={2} color="gray.500">
                No platforms found
              </Text>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformDropdown;
