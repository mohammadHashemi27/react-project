// PlatformDropdown.tsx
import { Button, Menu, Portal } from "@chakra-ui/react";
import { usePlatforms } from "@/hook/usePlatforms";

const PlatformDropdown = () => {
  const { platforms } = usePlatforms();

  return (
    <Menu.Root>
      <Menu.Trigger asChild >
        <Button size="sm" variant="outline">
          Platform
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item key={platform.id} value={platform.slug}>
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
