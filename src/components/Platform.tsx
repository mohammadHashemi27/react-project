// PlatformDropdown.tsx
import { Button, Menu, Portal } from "@chakra-ui/react";
import { usePlatforms } from "@/hook/usePlatforms";
import { useColorModeValue } from "@/components/ui/color-mode";
interface Props {
  selectedPlatform: string;
  onSelectPlatform: (platform: string) => void;
}
const PlatformDropdown = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { platforms } = usePlatforms();

  const bgMenu = useColorModeValue("gray.50", "gray.800");
  const hoverItem = useColorModeValue("gray.100", "gray.700");

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform ? selectedPlatform : "Platform"}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content bg={bgMenu} borderRadius="md" shadow="md">
            {platforms.map((platform) => (
              <Menu.Item
                key={platform.id}
                value={platform.slug}
                _hover={{ bg: hoverItem }}
                onClick={() => onSelectPlatform(platform.slug)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformDropdown;
