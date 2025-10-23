import { useState } from "react";
import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
import type { Genres } from "@/hook/useGenres";
import Platform from "./components/Platform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [searchText, setSearchText] = useState(""); // متن سرچ
  const showAside = useBreakpointValue({ base: false, lg: true });

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
        <Platform />
        <GameGrid selectedGenre={selectedGenre} searchText={searchText} />
      </GridItem>
    </Grid>
  );
}

export default App;
