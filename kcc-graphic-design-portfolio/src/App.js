import { Grid, GridItem, Stack, VStack } from "@chakra-ui/react";

// Components
import NavHeader from "./pages/home/components/NavHeader";

function App() {
  return (
    <Stack direction="column" p={0} w="100%">
      <Grid
        h='100vh'
        templateRows='repeat(4, 1fr)'
        templateColumns='repeat(4, 1fr)'
      >
        <GridItem colSpan={2} rowSpan={2}>
          <NavHeader />
        </GridItem>
        <GridItem colSpan={2} rowSpan={3} bg='tomato' />
        <GridItem colSpan={1} rowSpan={2} bg='tomato' />
        <GridItem colSpan={1} rowSpan={2} bg='tomato' />
        <GridItem colSpan={2} rowSpan={2} bg='tomato' />
      </Grid>
    </Stack>
  );
}

export default App;
