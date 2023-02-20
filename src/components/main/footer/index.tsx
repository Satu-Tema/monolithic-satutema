import { Box, Button, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const MainFooter = () => {
   return (
      <>
         <Box p={10} minH="40vh" backgroundImage="./images/bgconcrete.png">
            <Container maxW="container.lg">
               <Heading textAlign="center" mt={20} fontWeight={400}>
                  Buat Website Anda Sekarang
               </Heading>
               <Center mt={15} mb={20}>
                  <Button width={60} colorScheme="blue" variant="solid">
                     Buat Website
                  </Button>
               </Center>
            </Container>
         </Box>
         <Box bg="#127CA6" p={5}>
            <Text textAlign="center" color="#fff">
               © 2023 satutema.com. All rights reserved.
            </Text>
         </Box>
      </>
   );
};

export default MainFooter;
