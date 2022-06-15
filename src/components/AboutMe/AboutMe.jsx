import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import myPicture from '../../assets/my-picture.jpg';

const AboutMe = () => {
  return (
    <Flex maxWidth="100%" height="100vh" bgColor="#e9dfcc" id="aboutme">
    <Flex marginX="auto" paddingTop="60px" flexDir="column">
        <Heading alignSelf="center">Sobre mim</Heading>
        <Flex paddingTop="70px">
        <Image  src={myPicture} width="40%" borderRadius="200px" boxShadow="5px 8px 7px 5px rgba(0,0,0,0.56)" 
        _peerHover={{
            transition:"width 2s",
            width:"40%",

        }
        }
        >

        </Image>
        </Flex>
    </Flex>
    </Flex>
  );
};
export default AboutMe;
