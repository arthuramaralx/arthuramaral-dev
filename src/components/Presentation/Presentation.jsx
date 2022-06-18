import {
  Flex,
  Heading,
  Center,
  Button,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import coding from '../../assets/coding.jpg';
import { FaChevronCircleDown } from 'react-icons/fa';
import logo from '../../assets/myVector.png';
import { motion } from 'framer-motion';

const Presentation = () => {
  const MotionFlex = motion(Flex);
  const MotionButton = motion(Button);

  return (
    <Flex
      id="presentation"
      bgImage={coding}
      bgSize="cover"
      backdropFilter="auto"
      bgColor="black"
      bgPos={['-200px 0px', '0px 0px', '0px -0px', '0px -0px']}
      bgRepeat="no-repeat"
      maxW="100vw"
      width="100%"
      height="100vh"
      minH="580px"
      boxShadow="inset 0 0 0 50vh rgba(0,0,0,.6);"
    >
      <Flex
        flexDir="column"
        backdropFilter="auto"
        backdropBlur="2px"
        width="100%"
      >
        <Center flexDir="column" paddingTop="100px">
          <Flex
            flexDir="Column"
            width="100%"
            position="fixed"
            paddingTop="70vh"
          >
            <MotionFlex
              opacity="0.1"
              animate={{

                opacity: [0.0, 1.0],
                scale: 1.0,
                transition: {
                  duration: 0.6,
                },
              }}
              width="90%"
              flexDir="row"
              justify="space-around"     
            >
              <Flex flexDir="column" paddingTop="120px" paddingLeft={["30px", "40px"]}>
            
                <Heading
                  color="#e9dfcc"
                  paddingBottom="10px"
                  fontSize="4em"
                  fontFamily="Roboto mono"
                >
                  Arthur Amaral
                </Heading>

                <Heading
                  color="#e9dfcc"
                  fontFamily="Roboto mono"
                  fontSize="2em"
                  paddingLeft="2px"
                >
                  Desenvolvedor Front-end
                </Heading>
              </Flex>

                  
              <Flex >
                <Image
                  src={logo}
                  display={['none', 'none', 'flex', 'flex']}
                  height="400px"
                  borderRadius="200px"
                  paddingTop="30px"
                  
                ></Image>
              </Flex>
            </MotionFlex>
            <Flex height={['50px']} alignSelf="center">
              <MotionButton
                paddingLeft="20px"
                paddingTop={['10vh', '30vh', '0', '0', '0', '6.5vh']}
                width="auto"
                variant="unstyled"
               _focus=""
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to="aboutme"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                >
                  <FaChevronCircleDown size="9vw" color="#e9dfcc" />
                </Link>
              </MotionButton>
            </Flex>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};
export default Presentation;
