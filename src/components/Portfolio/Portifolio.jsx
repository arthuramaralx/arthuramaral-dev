import { Flex, Heading, Image, Text, Link } from '@chakra-ui/react';
import Carousel from 'react-elastic-carousel';
import Kenziefood from '../../assets/aplications/kenziefood.png';
import Kenziehub from '../../assets/aplications/kenziehub.png';
import Psique from '../../assets/aplications/psique.png';
import Nukenzie from '../../assets/aplications/nukenzie.png';

import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import github from '../../assets/tecnologies/github.png';

const Portifolio = () => {
  const breakPoints = [
    { width: 320, itemsToShow: 1 },
    { width: 720, itemsToShow: 1 },
    { width: 1300, itemsToShow: 2 },
  ];

  const MotionImage = motion(Image);
  return (
    <Flex
      id="portfolio"
      height={['88vh']}
      bgColor="#1e1c1e"
      flexDir="column"
      maxWidth="100vw"
    >
      <Flex
        justify="center"
        width="100%"
        paddingTop="20px"
        paddingBottom="70px"
      >
        <Heading color="#f2e7d2" fontFamily="Roboto Mono" justify="center">
          Portfólio
        </Heading>
      </Flex>

      <Carousel breakPoints={breakPoints}>
        <Flex
          bgColor="#100F10"
          height="370px"
          width={['200px', '200px', '600px', '600px']}
          paddingTop="20px"
          paddingLeft={['5px', '5px', '30px', '30px']}
          paddingRight="5px"
          _focusVisible="disabled"
          variant="unstyled"
          boxShadow=""
          flexDir="column"
          borderRadius="6px"
        >
          <Flex height="200px" flexDir={['column', 'column', 'row', 'row']}>
            <MotionImage
              whileHover={{ scale: 1.1 }}
              src={Psique}
              height="190px"
              width="300px"
              borderRadius="6px"
              draggable="false"
            />

            <Flex flexDir="column">
              <Heading
                paddingLeft="20px"
                fontFamily="Poppins"
                color="#f2e7d2"
              >
                Psique
              </Heading>
              <Text
                paddingLeft="20px"
                fontSize={['0px', '0px', '16px']}
                color="#f2e7d2"
                fontFamily="Poppins"
              >
                Plataforma para atendimentos psicológicos online criada com
                React.js, ChakraUI, JSONserver e axios para consumo de api.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex
              paddingTop="30px"
              flexDir={['column', 'column', 'row', 'row']}
            >
              <Link
                href="https://capstone-m3-sergioothoniel.vercel.app/"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingTop="10px" height="20px">
                  <Flex display={['none', 'none', 'flex', 'flex']}>
                    <FaLink size="60" color="white" />
                  </Flex>
                  <Flex display={['flex', 'flex', 'none', 'none']}>
                    <FaLink size="20" color="white" />
                  </Flex>
                  <Text
                    paddingTop={['0px', '0px', '30px']}
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Website
                  </Text>
                </Flex>
              </Link>

              <Link
                href="https://github.com/sergioothoniel/capstone-m3"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingLeft={['0px', '0px', '130px']}>
                  <Image
                    src={github}
                    height={['60px', '20px', '80px']}
                    paddingTop="35px"
                  ></Image>
                  <Text
                    paddingTop="40px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Código
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        {/*  */}
        <Flex
          bgColor="#100F10"
          height="370px"
          width={['200px', '200px', '600px', '600px']}
          paddingTop="20px"
          paddingLeft={['5px', '5px', '30px', '30px']}
          _focusVisible="disabled"
          variant="unstyled"
          boxShadow=""
          flexDir="column"
          borderRadius="6px"
        >
          <Flex height="200px">
            <MotionImage
              whileHover={{ scale: 1.1 }}
              src={Nukenzie}
              height="190px"
              width="300px"
              borderRadius="6px"
              draggable="false"
            />

            <Flex flexDir="column">
              <Heading paddingLeft="20px" fontFamily="Poppins" color="#f2e7d2">
                NuKenzie
              </Heading>
              <Text paddingLeft="20px" color="#f2e7d2" fontFamily="Poppins">
                Aplicativo de controle de finanças criado com React.js.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex paddingTop="30px">
              <Link
                href="https://react-entrega-s1-nu-kenzie-arthuramaralx.vercel.app/"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingTop="10px">
                  <FaLink size="60" color="white" />
                  <Text
                    paddingTop="30px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Website
                  </Text>
                </Flex>
              </Link>

              <Link
                href="https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-arthuramaralx"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingLeft="130px">
                  <Image src={github} height="80px"></Image>
                  <Text
                    paddingTop="40px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Código
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          bgColor="#100F10"
          height="400px"
          width="600px"
          paddingTop="20px"
          paddingLeft="30px"
          _focusVisible="disabled"
          variant="unstyled"
          boxShadow=""
          flexDir="column"
          borderRadius="6px"
        >
          <Flex height="200px">
            <MotionImage
              whileHover={{ scale: 1.1 }}
              src={Kenziehub}
              height="190px"
              width="300px"
              borderRadius="6px"
              draggable="false"
            />

            <Flex flexDir="column">
              <Heading paddingLeft="20px" fontFamily="Poppins" color="#f2e7d2">
                KenzieHub
              </Heading>
              <Text paddingLeft="20px" color="#f2e7d2" fontFamily="Poppins">
                Hub de cadastro de tecnologias para desenvolvedores criado com
                ReactJS, styled-components e axios para consumo de api.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex paddingTop="30px">
              <Link
                href="https://kenziehub-arthuramaral.vercel.app/"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingTop="10px">
                  <FaLink size="60" color="white" />
                  <Text
                    paddingTop="30px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Website
                  </Text>
                </Flex>
              </Link>

              <Link
                href="https://github.com/arthuramaralx/Kenziehub"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingLeft="130px">
                  <Image src={github} height="80px"></Image>
                  <Text
                    paddingTop="40px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Código
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          bgColor="#100F10"
          borderRadius="6px"
          height="400px"
          width="600px"
          paddingTop="20px"
          paddingLeft="30px"
          _focusVisible="disabled"
          variant="unstyled"
          boxShadow=""
          flexDir="column"
          paddingRight="30px"
        >
          <Flex height="200px">
            <MotionImage
              whileHover={{ scale: 1.1 }}
              src={Kenziefood}
              height="190px"
              width="300px"
              borderRadius="5px"
              draggable="false"
            />

            <Flex flexDir="column">
              <Heading paddingLeft="20px" fontFamily="Poppins" color="#f2e7d2">
                Kenziefood
              </Heading>
              <Text paddingLeft="20px" color="#f2e7d2" fontFamily="Poppins">
                E-commerce criado em JavaScript, HTML, CSS.
              </Text>
            </Flex>
          </Flex>
          <Flex>
            <Flex paddingTop="30px">
              <Link
                href="https://arthuramaralx.github.io/KenziefoodJS/"
                _focus="none"
                _focusVisible=""
                _active="none"
                target="_blank"
              >
                <Flex paddingTop="10px">
                  <FaLink size="60" color="white" />
                  <Text
                    paddingTop="30px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Website
                  </Text>
                </Flex>
              </Link>

              <Link
                href="https://github.com/arthuramaralx/KenziefoodJS"
                _focus="none"
                _active="none"
                target="_blank"
              >
                <Flex paddingLeft="130px">
                  <Image src={github} height="80px"></Image>
                  <Text
                    paddingTop="40px"
                    paddingLeft="20px"
                    fontFamily="Roboto mono"
                    color="white"
                  >
                    Código
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Carousel>
    </Flex>
  );
};

export default Portifolio;
