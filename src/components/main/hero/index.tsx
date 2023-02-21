import { Box, Flex, Container, Heading, Spacer } from '@chakra-ui/react';
import React from 'react';

const MainHero = () => {
   return (
      <Box p={10} minH={250}>
         <Container maxW="container.lg">
            <Flex
               mt={{ sm: '3%', md: '6%' }}
               alignItems="center"
               textAlign={{ base: 'center', sm: 'center', md: 'left' }}
               flexWrap="wrap"
            >
               <Box display="flex">
                  <img src="./images/monitor.png" alt="Satu Tema" width="387" height="477" />
               </Box>
               <Spacer />
               <Box maxWidth="45%" minW="45%">
                  <img
                     loading="lazy"
                     alt="Satu Tema"
                     src="./images/satutemawithicon.png"
                     style={{ objectFit: 'cover' }}
                     width={350}
                     height={100}
                  />
                  <Heading as="h1" size="md" fontWeight="500">
                     Solusi Semua Website Untuk Anda
                  </Heading>
               </Box>
            </Flex>
         </Container>
      </Box>
   );
};

export default MainHero;
