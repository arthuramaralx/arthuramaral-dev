import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
} from '@chakra-ui/react';
import html from '../../assets/tecnologies/html.png';
import css from '../../assets/tecnologies/css.png';
import js from '../../assets/tecnologies/js.png';
import git from '../../assets/tecnologies/git.png';
import github from '../../assets/tecnologies/github.png';
import react from '../../assets/tecnologies/react.png';
import styledcomponents from '../../assets/tecnologies/styled-components.png';
import chakra from '../../assets/tecnologies/chakra.png';
import redux from '../../assets/tecnologies/redux.png';
import axios from '../../assets/tecnologies/axios.png';
import node from '../../assets/tecnologies/node.js.png';
import { motion } from 'framer-motion';

const Tecnologies = () => {
  const MotionStack = motion(Stack);

  return (
    <Flex
      id="tecnologies"
      display={["none","none","flex","flex"]}
      height={['164vh', '164vh', '88vh']}
      backgroundColor="#100F10"
      flexDir="column"
      maxWidth="100vw"
    >
      <Flex width="100%" justify="center" paddingTop="70px">
        <Heading color="#E9DFCC" fontFamily="Roboto mono">
          {' '}
          Eu domino as seguintes tecnologias:
        </Heading>
      </Flex>

      <Center>
        <MotionStack
          paddingLeft={['', '', '40px']}
          direction={['column', 'column', 'row', 'row']}
          spacing="39px"
          width="90%"
          height={['900px', '900px', '20px', '30px']}
          wrap="wrap"
          align="center"
          paddingTop={['12vh', '', '20vh']}
          whileInView={{
            opacity: [0.0, 1],
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image src={html} height="80px"></Image>
          <Image src={css} height="80px"></Image>
          <Image src={js} height="80px"></Image>
          <Image src={react} height="80px"></Image>
          <Image src={styledcomponents} height="80px"></Image>
          <Image src={chakra} height="40px"></Image>
          <Image src={axios} height="30px"></Image>
          <Image src={redux} height="80px"></Image>
          <Image src={node} height="80px"></Image>
          <Image src={github} height="80px"></Image>
          <Image src={git} height="80px"></Image>
        </MotionStack>
      </Center>
    </Flex>
  );
};

export default Tecnologies;
