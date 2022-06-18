import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Center,
} from '@chakra-ui/react';
import Presentation from './components/Presentation/Presentation';
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe';
import Tecnologies from './components/Tecnologies/Tecnologies';
import Portifolio from './components/Portfolio/Portifolio';
import Contact from "./components/Contact/Contact";
import ReactLoading from "react-loading";

function App() {



  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setDone(true);
        });
    }, 1100);
  }, []);
  return (

    <>
          {!done ? (
              <Flex position="fixed" left="0px" height="100vh" right="0px" width="100vw" top="-10px">

              <Center paddingTop="0vh" margin="0"  width="100%" bgColor="#E9DFCC" >

             <ReactLoading
            
            type={"spin"}
            color={"#100F10"}
            height={100}
            width={100}
            />
            </Center>
            </Flex>
    
               
           ) : (
            
           
    
    <ChakraProvider theme={theme}>
    <Box maxWidth="100vw" height="100vh" bgColor="#bbdec6" scrollMarginX={"disabled"}>


      <Header/>
      <Presentation/>
      <AboutMe/>
      
      <Tecnologies/>

      <Portifolio/>

      <Contact/> 
    
    </Box>
    </ChakraProvider>
            
            )}
            </>
  );
  
}

export default App;
