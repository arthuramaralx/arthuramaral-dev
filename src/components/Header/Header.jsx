import { Flex, Heading, Spacer, Text, Image,  } from '@chakra-ui/react';
import {Link} from 'react-scroll'

const Header = () => {
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
      <Flex flexDir="column" pointerEvents="none"> 
        <Heading
          paddingTop="6px"
          paddingLeft="px"
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
      </Flex>
      <Spacer></Spacer>
      <Flex
        width={['0px', '0px', '60%', '40%']}
        justify="space-evenly"
        paddingTop="17px"
        color="#e9dfcc"
        fontFamily="Poppins"
      >
        <Link to='presentation' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
        <Link to='aboutme' spy={true} smooth={true} offset={-60} duration={500}>Sobre</Link>
        <Link>Tecnologias</Link>
        <Link>Portifólio</Link>
        <Link>Contato</Link>
      </Flex>
      {/* <Image src={myPicture} borderRadius="50px" padding="3px" height="60px"></Image> */}
    </Flex>
  );
};

export default Header;
