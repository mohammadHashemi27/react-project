import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import { GenresList } from "./components/GenresList";
function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={showAside}>
        <GridItem area="aside" padding={2}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
