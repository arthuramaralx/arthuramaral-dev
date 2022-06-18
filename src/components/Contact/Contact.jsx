import { Flex, Heading, Image, Link } from '@chakra-ui/react';
import Linkedin from '../../assets/linkedin.png';
const Contact = () => {
  return (
    <Flex
      direction="column"
      id="contact"
      height="86vh"
      maxWidth="100vw"
      bgColor="#121214"
    >
      <Flex justify="center" width="100%" paddingTop="200px">
        <Heading justifySelf="center" color="#E9DFCC" fontFamily="Roboto Mono">
          Fique a vontade para entrar em contato comigo :&#x00029;
        </Heading>
      </Flex>

      <Flex paddingTop="180px" justify="center" align="center" flexDir="column">
        <Link
          href="https://www.linkedin.com/in/arthur-amaral-60574018b/"
          target="_blank"
          cursor="pointer"
          background="#E9DFCC"
          borderRadius="5px"
          padding="5px"
        >
          <Image src={Linkedin} height="50px" width="180px"></Image>
        </Link>
        <Heading
          fontFamily="Roboto Mono"
          color="#E9DFCC"
          paddingTop="10px"
          fontSize="16px"
        >
          Email: arthuramaralx@outlook.com
        </Heading>
        <Flex
          bgColor="##E9DFCC"
          height="80px"
          width="100%"
          position="relative"
          top="140px"
          boxShadow="inset 0 0 0 50vh rgba(0,0,0,.2);"
          borderTop="3px solid gray"
        >
          Footer
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Contact;
