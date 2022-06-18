import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import myPicture from '../../assets/my-picture.jpg';
import { motion } from 'framer-motion';

const AboutMe = () => {
  const MotionStack = motion(Stack);
  const MotionHeading = motion(Heading);

  return (
    <Flex
    maxWidth="100vw"
      bgColor="#e9dfcc"
      id="aboutme"
      height={['190vh', '', '90vh', '89vh']}
    >
      <Flex
        width="100%"
        marginX="auto"
        boxSizing="border-box"
        paddingTop="20px"
        flexDir="column"
   
      >
        <MotionHeading
          alignSelf="center"
          fontFamily="Poppins"
          fontSize="2.7em"
          whileInView={{
            opacity: [0.0, 1.0],
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Sobre
        </MotionHeading>
        <MotionStack
          width="90%"
          direction={['column', 'column', 'row', 'row']}
          paddingTop="50px"
          spacing="20"
          align="center"
          paddingX={['', '', '5%', '5%', '20%']}
          whileInView={{
            opacity: [0.0, 1],
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            src={myPicture}
            width="40%"
            borderRadius="200px"
            boxShadow="5px 8px 7px 5px rgba(0,0,0,0.56)"
            maxWidth="300px"
            marginRight={['', '', '60px']}
          ></Image>

          <Flex width={['70%', '70%', '60%']} flexDir="column">
            <Heading  paddingBottom="20px" fontFamily="Poppins" width="300px" fontSize={["1.4rem", "" ,"1.7rem"]}>
              {' '}
              Arthur Sousa Amaral
            </Heading>
            <Text
              fontFamily="Poppins"
              fontWeight="400"
              fontSize={['', '', '0.9rem']}
              lineHeight="1.4"
            >
              Sou desenvolvedor há 1 ano,e sou completamente apaixonado pela
              área. Tive contato com tecnologia cedo, desde o tão querido Super
              Nintendo, sempre me questionei: "como será que isso funciona atrás
              dos panos?...". Além dessa vontade enorme de aprender mais e mais
              da área, tenho experiência em Pedagogia, já trabalhei em várias
              instituições de ensino, públicas e privadas, como professor
              auxiliar, auxiliar de educação especial e monitor pedagógico. Na
              área da tecnologia, estou com o JavaScript a 1 ano e tenho mais de
              1.000h de bootcamp intensivo para Front-End. no momento estou
              ingressando na área de Back-end com Node.js e PostgreSQL.
            </Text>
          </Flex>
        </MotionStack>
      </Flex>
    </Flex>
  );
};
export default AboutMe;
