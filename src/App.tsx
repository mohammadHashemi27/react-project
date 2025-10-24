import { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import type { Genres } from "@/hook/useGenres";
import Platform from "./components/Platform";
import { SortDropdown } from "./components/Sort";
import { GameHeading } from "./components/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [searchText, setSearchText] = useState("");
  const showAside = useBreakpointValue({ base: false, lg: true });
  const [sortOrder, setSortOrder] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "240px 1fr",
      }}
    >
      <GridItem area="nav" padding={2}>
        <NavBar searchText={searchText} setSearchText={setSearchText} />
      </GridItem>

      <Show when={showAside}>
        <GridItem area="aside" padding={2}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={setSelectedGenre}
          />
        </GridItem>
      </Show>

      <GridItem area="main" padding={2}>
        <Box marginBottom={5}>
          <GameHeading selectedGenre={selectedGenre} />
        </Box>
        <HStack marginBottom={5}>
          <Platform
            selectedPlatform={selectedPlatform}
            onSelectPlatform={setSelectedPlatform}
          />
          <SortDropdown onSelectSortOrder={setSortOrder} />
        </HStack>
        <GameGrid
          selectedGenre={selectedGenre}
          searchText={searchText}
          sortOrder={sortOrder}
          selectedPlatform={selectedPlatform} // ← اضافه شد
        />
      </GridItem>
    </Grid>
  );
}

export default App;
