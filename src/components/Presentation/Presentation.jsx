import {
  Flex,
  Text,
  Heading,
  Center,
  Spacer,
  Button,
  transition,
  Image,
} from '@chakra-ui/react';
import {Link} from 'react-scroll'
import estacao from '../../assets/doca.jpg';
import coding from '../../assets/coding.jpg';
import { FaChevronCircleDown } from 'react-icons/fa';
import logo from '../../assets/myVector.png'

const Presentation = () => {
  return (
    <Flex
      id='presentation'
      bgImage={coding}
      bgSize="cover"
      backdropFilter="auto"
      backdropBlur="2px"
      bgColor="black"
      bgPos={['-200px 0px', '0px 0px', '0px -0px', '0px -0px']}
      bgRepeat="no-repeat"
      maxW="100vw"
      width="100%"
      height="100vh"
      minH="580px"
      boxShadow="inset 0 0 0 1000px rgba(0,0,0,.6);"
    >
      <Flex
        flexDir="column"
        backdropFilter="auto"
        backdropBlur="3px"
        width="100%"
      >
        <Center CenterDir="column" paddingTop="100px">
            

          <Flex flexDir="Column"  width="100%" position="fixed" paddingTop="70vh">
            
          <Flex flexDir="row" justify="space-around" >
            
            <Flex flexDir="column"  paddingTop="120px">

            
            <Heading
              color="#e9dfcc"
              paddingBottom="10px"
              fontSize="4em"
              textOverflow=""
              fontFamily="Roboto mono"
            >
              Arthur Amaral
            </Heading>

            <Heading color="#e9dfcc" fontFamily="Roboto mono">
              Desenvolvedor Front-end
            </Heading>
            </Flex>
            
            <Flex  >

            <Image src={logo
            } display={["none", "none", "flex",  "flex"]} 
            height="400px"
             borderRadius="200px"
             paddingTop="30px" >

            </Image>
            </Flex>
        </Flex>
   {/* button v */}
            <Flex  
              height={['50px']}
              alignSelf="center"
            >
                

 

              <Button
              paddingLeft="20px"
              paddingTop={["10vh", "30vh", "0", "0", "0", "8vh"]}
                width="auto"
                bg="none"
                variant="unstyled"
                _focus="none"
                onClick={() => transition()}
              >
                <FaChevronCircleDown size="9vw" color="#e9dfcc" />
              </Button>
           
           
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};
export default Presentation;
