import { Box, Button, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainFooter = () => {
   const navigate = useNavigate();
   return (
      <>
         <Box p={10} minH={250} backgroundImage="./images/bgconcrete.png">
            <Container maxW="container.lg">
               <Heading textAlign="center" mt={20} fontWeight={400}>
                  Buat Website Anda Sekarang
               </Heading>
               <Center mt={15} mb={20}>
                  <Button
                     onClick={() => navigate('/auth/register')}
                     width={60}
                     colorScheme="blue"
                     variant="solid"
                  >
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
