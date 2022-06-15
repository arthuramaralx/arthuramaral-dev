import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Presentation from './components/Presentation/Presentation';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
function App() {
  return (
    <ChakraProvider theme={theme}>
    <Box maxWidth="100vw" height="100vh" bgColor="#bbdec6">
      <Header></Header>
      <Presentation></Presentation>
      <AboutMe></AboutMe>
    </Box>
    </ChakraProvider>
  );
}

export default App;
