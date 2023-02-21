import { Box, Flex, Container } from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavbarAuth = () => {
   return (
      <Box
         background="#fff"
         minW="100%"
         borderBottomWidth={2}
         borderBottomColor="rgba(18, 18, 18, 0.1)"
      >
         <Container maxW="container.lg">
            <Flex
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
                     src={`${process.env.PUBLIC_URL}/images/satutema.png`}
                     style={{ objectFit: 'cover' }}
                     width={150}
                     height={100}
                  />
               </NavLink>
            </Flex>
         </Container>
      </Box>
   );
};

export default MainNavbarAuth;
