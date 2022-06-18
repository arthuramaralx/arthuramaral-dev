import {
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
  const MotionFlex = motion(Flex);
  return (
    <Flex
      as="header"
      flexDir="row"
      height={['0px', '0px', '60px', '60px']}
      opacity="-10px"
      bgColor="rgba(11, 11, 13, 0.9)"
      display={['none', 'none', 'flex', 'flex']}
      width="100%"
      position="fixed"
      zIndex="1"
    >
      <Flex flexDir="column" cursor="pointer">
        <Link
          to="presentation"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Heading
            paddingTop="6px"
            paddingLeft="26px"
            color="#e9dfcc"
            fontSize="1.5em"
            fontFamily="Roboto Mono"
          >
            &lt;Art/&gt;
          </Heading>
          <Text
            color="#e9dfcc"
            paddingLeft="13px"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize="0.7em"
          >
            Desenvolvimento Web
          </Text>
        </Link>
      </Flex>
      <Spacer></Spacer>
      <Flex
        width={['0px', '0px', '60%', '40%']}
        justify="space-evenly"
        paddingTop="17px"
        color="#e9dfcc"
        fontFamily="Poppins"
      >
        <MotionFlex
          active="black"
          cursor="pointer"

          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="presentation"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <Text color="#e9dfcc" _peerHover="">
              Home
            </Text>
          </Link>
        </MotionFlex>
        <MotionFlex
          active="black"
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc" _peerHover="">
              Sobre
            </Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="tecnologies"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc">Tecnologias</Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc" _peerHover="">
              Portfólio
            </Text>
          </Link>
        </MotionFlex>

        <MotionFlex
          cursor="pointer"
          whileHover={{
            scale: 1.1,
            textShadow: '0px 0px 6px rgb(255, 255, 255)',
          }}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
          >
            <Text color="#e9dfcc" _peerHover="">
              Contato
            </Text>
          </Link>
        </MotionFlex>
      </Flex>
    </Flex>
  );
};

export default Header;
