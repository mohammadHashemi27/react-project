import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
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
      {/* show  */}
      <Show when={showAside}>
        <GridItem area="aside" bg="gold">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="blue">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
