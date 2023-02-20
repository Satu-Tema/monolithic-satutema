import { Box, Button, Flex, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MainNavbar = () => {
   return (
      <Box background="#fff" position="fixed" minW="100%">
         <Container maxW="container.lg">
            <Flex
               top={0}
               as="nav"
               minW="full"
               zIndex={1}
               alignItems={'center'}
               justifyContent="space-between"
               p={5}
            >
               <NavLink to="/">
                  <img
                     loading="lazy"
                     alt="Satu Tema"
                     src="./images/satutema.png"
                     style={{ objectFit: 'cover' }}
                     width={150}
                     height={100}
                  />
               </NavLink>
               <Box>
                  <Flex gap={15}>
                     <Link to="/home">
                        <Text fontWeight="semibold">Beranda</Text>
                     </Link>
                     <Link to="/home">
                        <Text fontWeight="semibold">Kenapa Satu Tema</Text>
                     </Link>
                     <Link to="/home">
                        <Text fontWeight="semibold">Project</Text>
                     </Link>
                  </Flex>
               </Box>
               <Flex gap={5}>
                  <Button
                     colorScheme="teal"
                     variant="outline"
                     _hover={{ bg: 'teal', color: '#fff' }}
                  >
                     Buat Website
                  </Button>
                  <Button
                     colorScheme="teal"
                     variant="outline"
                     _hover={{ bg: 'teal', color: '#fff' }}
                  >
                     Login
                  </Button>
               </Flex>
            </Flex>
         </Container>
      </Box>
   );
};

export default MainNavbar;
