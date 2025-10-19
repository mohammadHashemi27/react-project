import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorScheme: "dark",
    },
    body: {
      bg: "gray.900",
      color: "whiteAlpha.900",
    },
  },
  theme: {
    tokens: {
      colors: {
        primary: { value: "#ff4757" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
