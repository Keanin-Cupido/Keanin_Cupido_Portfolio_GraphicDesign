import { Grid, GridItem, Stack } from "@chakra-ui/react";

// Components
import NavHeader from "./pages/home/components/NavHeader";

function App() {
  return (
    <Stack direction="column" p={0} w="100%">
      <Grid
        templateRows={{sm: 'repeat(24, 1fr)', md: 'repeat(14, 1fr)', lg: 'repeat(14, 1fr)', xl: 'repeat(14, 1fr)', '2xl': 'repeat(4, 1fr)'}}
        templateColumns='repeat(4, 1fr)'
        shouldWrapChildren={true}
      >
        <GridItem
          colSpan={{sm: '4', md: '4', lg: '4', xl: '4', '2xl': '2'}} 
          rowSpan={{sm: '8', md: '4', lg: '3', xl: '6', '2xl': '2'}} 
          bg="tomato"
        >
          <NavHeader />
        </GridItem>
        <GridItem
          colSpan={{sm: '4', md: '4', lg: '4', xl: '2', '2xl': '2'}} 
          rowSpan={{sm: '4', md: '4', lg: '3', xl: '4', '2xl': '3'}} 
          bg='white'
        />
        <GridItem 
          colSpan={{sm: '4', md: '4', lg: '4', xl: '2', '2xl': '1'}} 
          rowSpan={{sm: '4', md: '4', lg: '3', xl: '4', '2xl': '2'}}  
          bg='blue.300' 
        />
        <GridItem 
          colSpan={{sm: '4', md: '4', lg: '4', xl: '2', '2xl': '1'}} 
          rowSpan={{sm: '4', md: '4', lg: '3', xl: '4', '2xl': '2'}} 
          bg='green.300'
        />
        <GridItem 
          colSpan={{sm: '4', md: '4', lg: '4', xl: '2', '2xl': '2'}} 
          rowSpan={{sm: '4', md: '4', lg: '3', xl: '4', '2xl': '2'}}  
          bg='red.300'
        />
      </Grid>
    </Stack>
  );
}

export default App;
